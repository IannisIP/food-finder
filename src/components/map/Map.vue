<template>
	<div style="height: calc(100vh - 64px); width: 100%">
		<l-map
			ref="mapRef"
			style="height: calc(100vh - 64px)"
			:zoom="state.zoom"
			:center="state.center"
			@ready="saveRef()"
			@mouseup="mouseup"
			:options="{ zoomControl: false }"
		>
			<l-tile-layer :url="state.url"></l-tile-layer>
			<restaurant
				v-for="restaurant in restaurants"
				:restaurant="restaurant"
				:key="restaurant.id"
			/>
			<l-control-zoom position="bottomright"></l-control-zoom>
		</l-map>
	</div>
</template>

<script>
import { onMounted, reactive, ref } from "@vue/composition-api";
import { LMap, LTileLayer, LControlZoom } from "vue2-leaflet";
import Restaurant from "./Restaurant.vue";

export default {
	name: "Map",
	components: {
		LMap,
		LTileLayer,
		LControlZoom,
		Restaurant,
	},
	props: {
		restaurants: {
			type: Array,
		},
	},
	setup(props, context) {
		const store = context.root.$store;

		const state = reactive({
			url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
			zoom: 8,
			center: [47.31322, -1.319482],
			mapRef: ref(null),
			zoomOptions: { position: "topright" },
		});

		onMounted(() => {
			navigator?.geolocation?.getCurrentPosition((position) => {
				state.center = [position.coords.latitude, position.coords.longitude];
			});
		});

		const mouseup = (e) => {
			context.root.$store.dispatch("GET_RESTAURANTS", {
				coords: {
					latitude: parseFloat(e.latlng.lat.toFixed(7)),
					longitude: parseFloat(e.latlng.lng.toFixed(7)),
				},
			});
		};
		const saveRef = () => {
			store.dispatch("SET_MAP", context.refs.mapRef.mapObject);
		};

		return { state, saveRef, mouseup };
	},
};
</script>
