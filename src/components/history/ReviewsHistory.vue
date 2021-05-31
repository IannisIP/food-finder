<template>
	<div class="ff-pending-container">
		<div class="header">{{ "Pending reviews" }}</div>
		<div class="pending-reviews-container">
			<review-history
				v-for="(review, i) in state.pendingReviews"
				:key="i"
				:review="review"
				@handleValidation="handleValidation($event, 'id')"
				@handleDecline="handleDecline($event, 'id')"
			/>
		</div>
		<loading-overlay v-if="!state.pendingReviews" />
	</div>
</template>

<script>
import { onMounted, reactive } from "@vue/composition-api";
import ReviewHistory from "./partials/ReviewHistory.vue";
import RestaurantsService from "../../services/RestaurantsService";
import LoadingOverlay from "../../shared-components/LoadingOverlay.vue";

export default {
	components: { ReviewHistory, LoadingOverlay },
	setup() {
		const state = reactive({
			pendingReviews: null,
		});
		onMounted(async () => {
			state.pendingReviews = await RestaurantsService.getReviewHistory();
		});

		return { state };
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
