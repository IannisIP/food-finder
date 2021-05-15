<template>
	<div class="ff-dashboard-container">
		<restaurants-list :restaurants="restaurants" />
		<restaurant-properties v-if="properties" />

		<Map :restaurants="restaurants" />

		<loading-overlay v-if="!restaurants.length" />
	</div>
</template>

<script>
import Map from "../map/Map";
import RestaurantsList from "../restaurants/RestaurantsList";
import RestaurantProperties from "../restaurants/RestaurantProperties";

import LoadingOverlay from "../../shared-components/LoadingOverlay";

import { computed } from "@vue/composition-api";

export default {
	components: {
		Map,
		RestaurantsList,
		RestaurantProperties,
		LoadingOverlay,
	},
	setup(props, context) {
		const store = context.root.$store;

		const restaurants = computed(() => store.getters["GET_RESTAURANTS"]);
		const properties = computed(() => store.getters["GET_PROPERTIES"]);

		return {
			restaurants,
			properties,
		};
	},
};
</script>

<style scoped>
.ff-dashboard-container {
	display: flex;
}

::v-deep .v-overlay {
	z-index: 999 !important;
}
</style>
