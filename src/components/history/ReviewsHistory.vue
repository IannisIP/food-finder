<template>
	<div class="ff-pending-container">
		<div class="wrapper">
			<div class="header">
				{{ "Reviews added by you" }}
			</div>
			<div class="pending-reviews-container">
				<review-history
					v-for="(review, i) in state.pendingReviews"
					:key="i"
					:review="review"
				/>
			</div>
		</div>
		<no-content-yet
			:message="`Seems like you haven't added any reviews yet!`"
			v-if="state.pendingReviews && state.pendingReviews.length === 0"
		/>
		<loading-overlay v-if="!state.pendingReviews" />
	</div>
</template>

<script>
import { onMounted, reactive } from "@vue/composition-api";
import ReviewHistory from "./partials/ReviewHistory.vue";
import RestaurantsService from "../../services/RestaurantsService";
import LoadingOverlay from "../../shared-components/LoadingOverlay.vue";
import NoContentYet from "@/shared-components/NoContentYet.vue";

export default {
	components: { ReviewHistory, LoadingOverlay, NoContentYet },
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
