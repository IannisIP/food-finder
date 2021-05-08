<template>
	<div class="ff-restaurant-list">
		<restaurant-card v-for="restaurant in restaurants" :key="restaurant.id" />
	</div>
</template>

<script>
import RestaurantCard from "./RestaurantCard";

export default {
	components: {
		RestaurantCard,
	},
	setup() {
		return {
			restaurants: [{ id: 1 }, { id: 2 }, { id: 3 }],
		};
	},
};
</script>

<style scoped>
.ff-restaurant-list {
	height: calc(100vh - 64px);
	overflow-y: scroll;
	width: 550px;
}
</style>
