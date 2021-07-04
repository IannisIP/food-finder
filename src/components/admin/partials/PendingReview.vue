<template>
	<div class="ff-restaurant-card">
		<v-card class="mx-auto my-1" max-width="374">
			<v-card-title>{{ review.name }}</v-card-title>
			<v-card-text>
				<v-text-field
					:value="
						review.reviewer['first_name'] + ' ' + review.reviewer['last_name']
					"
					label="Reviwer name"
					readonly
				></v-text-field>
				<v-text-field
					v-model="review.reviewer.email"
					label="Email"
					readonly
				></v-text-field>
				<v-textarea
					filled
					label="Review"
					auto-grow
					readonly
					:value="review.pendingReviewText"
				></v-textarea>
				<div v-if="state.receipt">
					<v-text-field
						v-model="state.receiptDate"
						label="Recepit date"
						prepend-icon="mdi-calendar"
						readonly
					></v-text-field>
					<v-text-field
						v-model="state.receiptTime"
						label="Recepit time"
						prepend-icon="mdi-calendar"
						readonly
					></v-text-field>
					<v-text-field
						v-model="state.cif"
						placeholder="Firm Unique Id"
						label="Firm Unique Id"
						type="number"
						readonly
					></v-text-field>
					<v-text-field
						v-model="state.receiptNumber"
						placeholder="Receipt Number"
						label="Receipt Number"
						type="number"
						readonly
					></v-text-field>
				</div>

				<div class="btn-wrapper">
					<v-btn @click="handlePreview" v-if="review.hasReceipt"
						>Preview Receipt</v-btn
					>
					<v-btn @click="handleValidate" color="primary">Validate</v-btn>
					<v-btn @click="handleDismiss" color="error">Dismiss</v-btn>
				</div>
			</v-card-text>
		</v-card>
		<v-dialog v-model="state.modal" max-width="600px" min-width="360px">
			<div class="pending-review-receipt-dialog">
				<div class="image-preview" v-if="state.receipt">
					<inner-image-zoom :src="state.receipt" />
				</div>
				<div class="image-preview-details">
					<div v-if="state.loading">
						<v-progress-circular
							indeterminate
							color="primary"
						></v-progress-circular>
						<div>Completing the form for you...</div>
					</div>

					<v-menu
						ref="menu"
						v-model="state.menu"
						:close-on-content-click="false"
						:return-value.sync="state.receiptDate"
						transition="scale-transition"
						offset-y
						min-width="auto"
					>
						<template v-slot:activator="{ on, attrs }">
							<v-text-field
								v-model="state.receiptDate"
								label="Recepit date"
								prepend-icon="mdi-calendar"
								readonly
								v-bind="attrs"
								v-on="on"
							></v-text-field>
						</template>
						<v-date-picker v-model="state.receiptDate" no-title scrollable>
							<v-spacer></v-spacer>
							<v-btn text color="primary" @click="state.menu = false">
								Cancel
							</v-btn>
							<v-btn
								text
								color="primary"
								@click="$refs.menu.save(state.receiptDate)"
							>
								OK
							</v-btn>
						</v-date-picker>
					</v-menu>
					<v-menu
						ref="menu2"
						v-model="state.menu2"
						:close-on-content-click="false"
						:return-value.sync="state.receiptTime"
						transition="scale-transition"
						offset-y
						min-width="auto"
					>
						<template v-slot:activator="{ on, attrs }">
							<v-text-field
								v-model="state.receiptTime"
								label="Recepit time"
								prepend-icon="mdi-calendar"
								readonly
								v-bind="attrs"
								v-on="on"
							></v-text-field>
						</template>
						<v-time-picker v-model="state.receiptTime" format="24hr">
							<v-spacer></v-spacer>
							<v-btn text color="primary" @click="state.menu2 = false">
								Cancel
							</v-btn>
							<v-btn
								text
								color="primary"
								@click="$refs.menu2.save(state.receiptTime)"
							>
								OK
							</v-btn>
						</v-time-picker>
					</v-menu>
					<v-text-field
						v-model="state.cif"
						label="Firm Unique Id"
						placeholder="Firm Unique Id"
						type="number"
					></v-text-field>
					<v-text-field
						label="Receipt Number"
						v-model="state.receiptNumber"
						placeholder="Receipt Number"
						type="number"
					></v-text-field>
				</div>
			</div>
		</v-dialog>
	</div>
</template>

<script>
import { reactive, watch } from "@vue/composition-api";
import RestaurantsService from "../../../services/RestaurantsService";
import "vue-inner-image-zoom/lib/vue-inner-image-zoom.css";
import InnerImageZoom from "vue-inner-image-zoom";

export default {
	props: {
		review: {
			type: Object,
		},
	},
	components: {
		InnerImageZoom,
	},
	setup(props, context) {
		const state = reactive({
			modal: false,
			menu: false,
			menu2: false,
			receipt: undefined,
			receiptDate: null,
			cif: "",
			receiptNumber: "",
			receiptTime: null,
			processedReceipt: null,
			loading: false,
			controller: null,
		});

		const handlePreview = async () => {
			state.modal = !state.modal;
			if (state.modal) {
				state.receipt = await RestaurantsService.getReceipt(
					props.review.pendingReviewId
				);

				state.controller = new AbortController();
				state.signal = state.controller.signal;

				state.loading = true;
				const {
					cif,
					date,
					receiptNbr,
					time,
				} = await RestaurantsService.getProcessedReceipt(
					props.review.pendingReviewId,
					state.signal
				);
				state.cif = cif && cif.substring(2);
				state.receiptNumber = receiptNbr && receiptNbr.replace("-", "");
				state.receiptTime = time;

				if (date) {
					let originalDate = date
						.split(".")
						.reverse()
						.join(".")
						.replace(/\./g, "-");

					// originalDate = new Date(originalDate);
					// state.receiptDate = originalDate.toISOString();
					state.receiptDate = originalDate;
				}

				state.loading = false;
			}
		};

		watch(
			() => state.modal,
			(current) => {
				if (!current && state.loading === true) {
					state.controller.abort(state.signal);
				}
			}
		);

		const handleValidate = () => {
			const receiptParams = {
				receiptDate: state.receiptDate,
				cif: state.cif,
				receiptNumber: state.receiptNumber,
				receiptTime: state.receiptTime,
			};

			if (
				state.receipt &&
				!receiptParams.receiptDate &&
				!receiptParams.cif &&
				!receiptParams.receiptNumber &&
				!receiptParams.receiptTime
			) {
				console.alert(
					"Receipt Data, Receipt Time, Receipt Number must be completed."
				);
				return;
			}

			context.emit("handleValidation", {
				id: props.review.pendingReviewId,
				receiptParams: JSON.stringify(receiptParams),
			});
		};
		const handleDismiss = () => {
			context.emit("handleDecline", props.review.pendingReviewId);
		};

		return {
			state,
			handlePreview,
			handleDismiss,
			handleValidate,
		};
	},
};
</script>

<style scoped lang="scss">
.btn-wrapper {
	display: flex;
	flex-direction: column;

	::v-deep .v-btn {
		margin-top: 5px;
		margin-bottom: 5px;
	}
}

.pending-review-receipt-dialog {
	padding: 16px;
	display: flex;
}

.image-preview {
	width: 300px;
}
</style>

<style>
.v-dialog {
	height: 400px !important;
}
</style>
