<template>
	<div class="ff-restaurant-list">
		<v-text-field
			solo
			label="Search"
			prepend-inner-icon="mdi-map-marker"
			v-model="search"
		></v-text-field>
		<diV v-for="restaurant in filteredRestaurants" :key="restaurant.id">
			<restaurant-card v-if="restaurant.rating" :restaurant="restaurant" />
		</diV>

		<no-results-found v-if="!filteredRestaurants.length" />
	</div>
</template>

<script>
import { computed, ref } from "@vue/composition-api";
import RestaurantCard from "./RestaurantCard";
import NoResultsFound from "../../shared-components/NoResultsFound.vue";
export default {
	components: {
		RestaurantCard,
		NoResultsFound,
	},
	props: {
		restaurants: {
			type: Array,
		},
	},
	setup(props) {
		const search = ref("");
		const filteredRestaurants = computed(() => {
			if (!search) {
				return props.restaurants;
			}

			return props.restaurants.filter((restaurant) =>
				restaurant.name.toLowerCase().includes(search.value.toLowerCase())
			);
		});
		return {
			filteredRestaurants,
			search,
		};
	},
};
</script>

<style scoped>
.ff-restaurant-list {
	height: calc(100vh - 64px);
	overflow-y: scroll;
	width: 400px;
}
</style>
