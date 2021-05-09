<template>
	<div class="ff-dashboard-container">
		<restaurants-list :restaurants="restaurants" />
		<Map :restaurants="restaurants" />
	</div>
</template>

<script>
import { computed } from "@vue/composition-api";
import Map from "../map/Map";
import RestaurantsList from "../restaurants/RestaurantsList";

export default {
	components: {
		Map,
		RestaurantsList,
	},
	setup(props, context) {
		const store = context.root.$store;

		const restaurants = computed(() => store.getters["GET_RESTAURANTS"]);

		return {
			restaurants,
		};
	},
};
</script>

<style scoped>
.ff-dashboard-container {
	display: flex;
}
</style>
