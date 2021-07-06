<template>
	<div class="ff-pending-container">
		<div class="wrapper">
			<div class="header">
				{{ "Reported reviews" }}
			</div>
			<div class="pending-reviews-container">
				<reported-review
					v-for="(review, i) in state.reportedReviews"
					:key="i"
					:review="review"
					@handleIgnore="handleIgnore($event, 'id')"
					@handleRemoveReview="handleRemoveReview($event)"
				/>
			</div>
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
import { EventBus } from "@/main.js";

export default {
	components: { ReportedReview, LoadingOverlay },
	setup() {
		const state = reactive({
			reportedReviews: null,
		});
		onMounted(async () => {
			state.reportedReviews = await RestaurantService.getReportedReview();
		});

		const handleIgnore = async (pendingReviewId) => {
			const response = await RestaurantsService.removeReported({
				id: pendingReviewId,
			});
			state.reportedReviews = await RestaurantService.getReportedReview();
			EventBus.$emit("alert", response.message);
		};

		const handleRemoveReview = async (data) => {
			const response = await RestaurantsService.removeReview(data);
			state.reportedReviews = await RestaurantService.getReportedReview();
			EventBus.$emit("alert", response.message);
		};

		return { state, handleIgnore, handleRemoveReview };
	},
};
</script>

<style lang="scss" scoped>
.ff-pending-container {
	.wrapper {
		margin-top: 30px;
		.header {
			font-size: 20px;
			font-family: Avenir, Helvetica, Arial, sans-serif;
		}
	}
	.pending-reviews-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin-top: 15px;

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
