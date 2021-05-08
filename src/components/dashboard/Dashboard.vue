<template>
	<div class="ff-dashboard-container">
		<restaurants-list />
		<Map />
	</div>
</template>

<script>
import Map from "../map/Map";
import RestaurantsList from "../restaurants/RestaurantsList";

export default {
	components: {
		Map,
		RestaurantsList,
	},
};
</script>

<style scoped>
.ff-dashboard-container {
	display: flex;
}
</style>
