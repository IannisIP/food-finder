<template>
	<div class="ff-dashboard-container">
		<Map2 />
	</div>
</template>

<script>
import Map2 from "../map/Map2";

export default {
	components: {
		Map2,
	},
};
</script>

<style scoped>
.ff-dashboard-container {
	width: 1000px;
	height: 1000px;
}
</style>
