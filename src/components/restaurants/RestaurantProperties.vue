<template>
	<div class="ff-restaurant-properties">
		<div class="ff-restaurant-header">
			<div class="title">{{ restaurant.name }}</div>
			<div class="close-panel-btn">
				<v-btn icon @click="handleClose">
					<v-icon>mdi-close</v-icon>
				</v-btn>
			</div>
		</div>
		<div class="ff-restaurant-details">{{ restaurant.address }}</div>
		<div class="ff-restaurant-services-container">
			<div v-for="(service, i) in restaurant.services" :key="i">
				<v-icon>mdi-check</v-icon> <span>{{ service }} </span>
			</div>
		</div>
		<div class="ff-restaurant-reviews">
			<div class="ff-restaurant-title">{{ "Recenzii de pe FoodFinder" }}</div>
			<div v-for="(review, i) in reviews" :key="i">
				<review :review="review" />
			</div>
		</div>
	</div>
</template>

<script>
import Review from "./partials/Review";
import { computed, onMounted } from "@vue/composition-api";

export default {
	components: {
		Review,
	},
	setup(props, context) {
		const store = context.root.$store;

		onMounted(() => {
			store.dispatch("GET_REVIEWS");
		});

		const reviews = computed(() => store.getters["GET_REVIEWS"]);
		//TODO: here we use the selected restaurants propertis and dispatch request for getting reviews by restaurant id
		const restaurant = computed(() => store.getters["GET_CURRENT_SELECTION"]);

		return {
			restaurant,
			reviews,
			handleClose: () => {
				store.dispatch("SET_CURRENT_SELECTION", null);
				store.dispatch("SET_PROPERTIES_OPEN", false);
			},
		};
	},
};
</script>

<style lang="scss" scoped>
.ff-restaurant-properties {
	position: absolute;
	left: 320px;
	z-index: 999;
	background: #fff;
	width: 400px;
	height: 600px;

	margin: 5px 0px 0px 5px;

	border: 1px solid #dfe1e5;
	border-radius: 8px;
	background: #fff;
	box-shadow: 0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%);

	.ff-restaurant-header {
		display: flex;
		justify-content: space-between;
	}
}
</style>
