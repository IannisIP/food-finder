<template>
	<div class="ff-pending-container">
		<div class="grey--text mb-2">
			Font
		</div>
		<div class="header">{{ "Reported reviews" }}</div>
		<div class="pending-reviews-container">
			<reported-review
				v-for="(review, i) in state.reportedReviews"
				:key="i"
				:review="review"
				@handleIgnore="handleIgnore($event, 'id')"
				@handleRemoveReview="handleRemoveReview($event)"
			/>
		</div>
		<loading-overlay v-if="!state.reportedReviews" />
	</div>
</template>

<script>
import { onMounted, reactive } from "@vue/composition-api";
import ReportedReview from "./partials/ReportedReview.vue";
import RestaurantService from "../../services/RestaurantsService";
import LoadingOverlay from "../../shared-components/LoadingOverlay.vue";
import RestaurantsService from "../../services/RestaurantsService";
export default {
	components: { ReportedReview, LoadingOverlay },
	setup() {
		const state = reactive({
			reportedReviews: null,
		});
		onMounted(async () => {
			state.reportedReviews = await RestaurantService.getReportedReview();
		});

		//TODO:
		const handleIgnore = async (pendingReviewId) => {
			const response = await RestaurantsService.removeReported({
				id: pendingReviewId,
			});
			state.reportedReviews = await RestaurantService.getReportedReview();
			alert(response.message);
		};

		const handleRemoveReview = async (data) => {
			const response = await RestaurantsService.removeReview(data);
			state.reportedReviews = await RestaurantService.getReportedReview();
			alert(response.message);
		};

		return { state, handleIgnore, handleRemoveReview };
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
