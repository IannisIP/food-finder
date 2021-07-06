<template>
	<div class="ff-restaurant-card">
		<v-card class="mx-auto my-1" max-width="374">
			<v-card-title>{{ review.name }}</v-card-title>
			<v-card-text>
				<v-text-field
					:value="
						review.review.author['first_name'] +
							' ' +
							review.review.author['last_name']
					"
					label="Reviwer name"
					readonly
				></v-text-field>
				<v-textarea
					filled
					label="Review"
					auto-grow
					readonly
					:value="review.review.text"
				></v-textarea>
				<v-textarea
					filled
					label="Report reason"
					auto-grow
					readonly
					:value="review.reported.reason"
				></v-textarea>
				<div class="block-reporter">
					<v-text-field
						:value="
							review.reported.user['first_name'] +
								' ' +
								review.reported.user['last_name']
						"
						label="Reported by"
						readonly
					></v-text-field>
					<v-menu bottom>
						<template v-slot:activator="{ on, attrs }">
							<v-btn icon v-bind="attrs" v-on="on">
								<v-icon>mdi-dots-vertical</v-icon>
							</v-btn>
						</template>
						<v-list>
							<v-list-item>
								<v-list-item-title @click="handleReport"
									>Block</v-list-item-title
								>
							</v-list-item>
						</v-list>
					</v-menu>
				</div>
				<div class="btn-wrapper">
					<v-btn @click="handleIgnore" color="primary">Ignore report</v-btn>
					<v-btn @click="handleRemoveReview" color="error">Remove review</v-btn>
				</div>
				<v-dialog
					v-model="modal"
					max-width="600px"
					min-width="360px"
					height="225px"
				>
					<div class="report-form-wrapper">
						<v-form lazy-validation>
							<v-textarea
								label="Reason"
								v-model="reason"
								height="265px"
							></v-textarea>

							<v-spacer></v-spacer>
							<div>
								<v-btn color="success" @click="handleBlockUser">
									Submit
								</v-btn>
							</div>
						</v-form>
					</div>
				</v-dialog>
			</v-card-text>
		</v-card>
	</div>
</template>

<script>
import { ref } from "@vue/composition-api";
import UsersService from "../../../services/UsersService";
import { EventBus } from "@/main.js";

export default {
	props: {
		review: {
			type: Object,
		},
	},
	setup(props, context) {
		const modal = ref(false);
		const reason = ref("");

		const handleIgnore = () => {
			context.emit("handleIgnore", props.review.reported.id);
		};
		const handleRemoveReview = () => {
			context.emit("handleRemoveReview", {
				id: props.review.review.id,
				reportedId: props.review.reported.id,
			});
		};

		const handleBlockUser = async () => {
			modal.value = !modal.value;

			const response = await UsersService.blockUser({
				id: props.review.reported.user.id,
				reason: reason.value,
			});

			EventBus.$emit("alert", response.message);
		};

		const handleReport = () => {
			modal.value = !modal.value;
		};

		return {
			handleIgnore,
			handleRemoveReview,
			handleBlockUser,
			handleReport,
			modal,
			reason,
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
.block-reporter {
	display: flex;
}

.report-form-wrapper {
	display: flex;
	flex-direction: column;

	padding-right: 10px;
	padding-left: 10px;
	width: 100%;

	::v-deep .v-text-field__slot {
		height: 260px;
	}
}
</style>
