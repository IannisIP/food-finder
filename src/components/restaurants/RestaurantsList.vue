<template>
	<div class="ff-restaurant-list">
		<restaurant-card
			v-for="restaurant in restaurants"
			:key="restaurant.id"
			:restaurant="restaurant"
		/>
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
