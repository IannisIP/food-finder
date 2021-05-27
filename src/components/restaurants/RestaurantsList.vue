<template>
	<div class="ff-restaurant-list">
		<diV v-for="restaurant in restaurants" :key="restaurant.id">
			<restaurant-card v-if="restaurant.rating" :restaurant="restaurant" />
		</diV>
	</div>
</template>

<script>
import RestaurantCard from "./RestaurantCard";

export default {
	components: {
		RestaurantCard,
	},
	props: {
		restaurants: {
			type: Array,
		},
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
