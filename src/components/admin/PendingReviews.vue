<template>
	<div class="ff-pending-container">
		<div class="header">{{ "Pending reviews" }}</div>
		<div class="pending-reviews-container">
			<pending-review
				v-for="(review, i) in state.pendingReviews"
				:key="i"
				:review="review"
				@handleValidation="handleValidation($event)"
				@handleDecline="handleDecline($event, 'id')"
			/>
		</div>
		<loading-overlay v-if="!state.pendingReviews" />
	</div>
</template>

<script>
import { onMounted, reactive } from "@vue/composition-api";
import PendingReview from "./partials/PendingReview.vue";
import RestaurantService from "../../services/RestaurantsService";
import LoadingOverlay from "../../shared-components/LoadingOverlay.vue";
import RestaurantsService from "../../services/RestaurantsService";
export default {
	components: { PendingReview, LoadingOverlay },
	setup() {
		const state = reactive({
			pendingReviews: null,
		});
		onMounted(async () => {
			state.pendingReviews = await RestaurantService.getPendingReviews();
		});

		const handleValidation = async (data) => {
			const response = await RestaurantsService.acceptPendingReview(data);
			state.pendingReviews = await RestaurantService.getPendingReviews();
			alert(response.message);
		};

		const handleDecline = async (id) => {
			const response = await RestaurantsService.declinePendingReview({
				id: id,
			});
			state.pendingReviews = await RestaurantService.getPendingReviews();
			console.log(response.message);
		};

		return { state, handleValidation, handleDecline };
	},
};
</script>

<style lang="scss" scoped>
.ff-pending-container {
	.pending-reviews-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		.ff-restaurant-card {
			margin: 0px 5px 5px 5px;
		}
	}
}
.ff-pending-card {
	width: 200px;
	margin-left: 5px;
	margin-right: 5px;
}
</style>

<style>
html {
	overflow: auto;
}
</style>
