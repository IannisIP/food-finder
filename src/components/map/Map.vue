<template>
	<div style="height: calc(100vh - 64px); width: 100%">
		<l-map style="height: calc(100vh - 64px)" :zoom="zoom" :center="center">
			<l-tile-layer :url="url"></l-tile-layer>
			<restaurant :markerLatLng="markerLatLng" />
		</l-map>
	</div>
</template>

<script>
import { LMap, LTileLayer } from "vue2-leaflet";
import Restaurant from "./Restaurant.vue";

export default {
	name: "Map",
	components: {
		LMap,
		LTileLayer,
		Restaurant,
	},
	setup() {
		return {
			url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
			zoom: 8,
			center: [47.31322, -1.319482],
			markerLatLng: [47.31322, -1.319482],
		};
	},
};
</script>
