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
			context.emit("handleValidation", props.review.pendingReviewId);
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
