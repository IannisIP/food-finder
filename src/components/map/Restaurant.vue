<template>
	<l-marker :lat-lng="markerLatLng">
		<l-popup>Hello!</l-popup>
	</l-marker>
</template>

<script>
import { LMarker, LPopup } from "vue2-leaflet";

export default {
	components: {
		LMarker,
		LPopup,
	},
	props: {
		markerLatLng: {
			type: Array,
		},
	},
};
</script>
