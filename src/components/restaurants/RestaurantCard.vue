<template>
	<div @click="selectionHandler">
		<v-card class="mx-auto my-1" max-width="374">
			<v-img
				v-if="restaurant.picture"
				height="250"
				src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
			></v-img>
			<v-card-title>{{ restaurant.name }}</v-card-title>
			<v-card-text>
				<v-row align="center" class="mx-0">
					<v-rating
						:value="4.5"
						color="amber"
						dense
						half-increments
						readonly
						size="14"
					></v-rating>

					<div class="grey--text ml-4">
						4.5 (413)
					</div>
				</v-row>

				<div class="my-4 subtitle-1">
					$
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
					coords: [props.restaurant.lat, props.restaurant.lng],
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
