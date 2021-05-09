<template>
	<l-marker :lat-lng="[restaurant.lat, restaurant.lng]">
		<l-popup>{{ restaurant.name }}</l-popup>
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
		restaurant: {
			type: Object,
		},
	},
};
</script>
