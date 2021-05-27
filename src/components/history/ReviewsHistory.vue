<template>
	<div class="ff-favorite-container">
		<div class="header">{{ "Favorite page" }}</div>
		<div class="favorites-restaurants-container">
			<restaurant-card
				v-for="(restaurant, i) in state.favorites"
				:key="i"
				:restaurant="restaurant"
			/>
		</div>
		<loading-overlay v-if="!state.favorites" />
	</div>
</template>

<script>
import { onMounted, reactive } from "@vue/composition-api";
import RestaurantCard from "../restaurants/RestaurantCard.vue";
import RestaurantService from "../../services/RestaurantsService";
import LoadingOverlay from "../../shared-components/LoadingOverlay.vue";
export default {
	components: { RestaurantCard, LoadingOverlay },
	setup() {
		const state = reactive({
			favorites: null,
		});
		onMounted(async () => {
			state.favorites = await RestaurantService.getFavorites();
		});

		return { state };
	},
};
</script>

<style scoped>
.favorites-restaurants-container {
	display: flex;
	justify-content: center;
}
.ff-restaurant-card {
	width: 200px;
	margin-left: 5px;
	margin-right: 5px;
}
</style>
