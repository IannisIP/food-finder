<template>
	<div class="ff-pending-container">
		<div class="wrapper">
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
import { EventBus } from "@/main.js";

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
			EventBus.$emit("alert", response);
		};

		const handleDecline = async (id) => {
			const response = await RestaurantsService.declinePendingReview({
				id: id,
			});
			state.pendingReviews = await RestaurantService.getPendingReviews();
			EventBus.$emit("alert", response);
		};

		return { state, handleValidation, handleDecline };
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

<style>
html {
	overflow: auto !important;
}
</style>
