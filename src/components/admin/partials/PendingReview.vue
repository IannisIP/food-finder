<template>
	<div class="ff-restaurant-card">
		<v-card class="mx-auto my-1" max-width="374">
			<v-card-title>{{ review.name }}</v-card-title>
			<v-card-text>
				<div>
					Reviewer:
					{{
						review.reviewer["first_name"] + " " + review.reviewer["last_name"]
					}}
				</div>
				<div>Email: {{ review.reviewer.email }}</div>
				<div>Review: {{ review.pendingReviewText }}</div>

				<div>
					<v-date-picker v-model="state.receiptDate"></v-date-picker>
					<v-time-picker
						v-model="state.receiptTime"
						format="24hr"
					></v-time-picker>
					<v-text-field
						v-model="state.cif"
						placeholder="Firm Unique Id"
						type="number"
					></v-text-field>
					<v-text-field
						v-model="state.receiptNumber"
						placeholder="Receipt Number"
						type="number"
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
			<div>
				<v-img :src="state.receipt" contain></v-img>
			</div>
		</v-dialog>
	</div>
</template>

<script>
import { reactive } from "@vue/composition-api";
import RestaurantsService from "../../../services/RestaurantsService";

export default {
	props: {
		review: {
			type: Object,
		},
	},
	setup(props, context) {
		const state = reactive({
			modal: false,
			receipt: undefined,
			receiptDate: null,
			cif: "",
			receiptNumber: "",
			receiptTime: null,
		});

		const handlePreview = async () => {
			state.modal = !state.modal;
			if (state.modal) {
				state.receipt = await RestaurantsService.getReceipt(
					props.review.pendingReviewId
				);
			}
		};

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
</style>
