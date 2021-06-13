<template>
	<div @click="selectionHandler" class="ff-restaurant-card">
		<v-card class="mx-auto my-1" max-width="374">
			<v-card-title>{{ restaurant.name }}</v-card-title>
			<v-card-text>
				<v-row align="center" class="mx-0">
					<v-rating
						:value="restaurant.rating"
						color="amber"
						dense
						half-increments
						readonly
						size="14"
					></v-rating>

					<div class="grey--text ml-4">
						{{ restaurant.rating }} ({{ restaurant.user_ratings_total }})
					</div>
				</v-row>

				<div class="my-4 subtitle-1">
					{{
						restaurant.business_status === "OPERATIONAL"
							? `${restaurant.name} is operational`
							: `${restaurant.name} is not operational`
					}}

					{{
						restaurant.opening_hours && restaurant.opening_hours.open_now
							? "and currently open"
							: "and currently not open"
					}}
				</div>

				<div>
					<div
						class="ff-restaurant-services"
						v-for="(service, i) in restaurant.services"
						:key="i"
					>
						{{ service }}
					</div>
				</div>
			</v-card-text>
		</v-card>
	</div>
</template>

<script>
export default {
	props: {
		restaurant: {
			type: Object,
		},
	},
	setup(props, context) {
		const store = context.root.$store;
		return {
			selectionHandler: () => {
				store.dispatch("SET_CURRENT_SELECTION", props.restaurant);
				store.dispatch("SET_PROPERTIES_OPEN", true);

				store.dispatch("FLY_TO", {
					coords: [
						props.restaurant.geometry.location.lat,
						props.restaurant.geometry.location.lng,
					],
					zoom: 18,
				});
			},
		};
	},
};
</script>

<style scoped>
.ff-restaurant-services {
	margin-left: 1px;
	margin-right: 1px;
}
</style>
