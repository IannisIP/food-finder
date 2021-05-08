<template>
	<v-app id="app">
		<!-- <Header /> -->
		<v-main id="content">
			<router-view></router-view>
		</v-main>
		<!-- <Footer /> -->
	</v-app>
</template>

<script>
// import Header from "./shared-components/Header";
// import Footer from "./shared-components/Footer";
import { onMounted } from "@vue/composition-api";

export default {
	components: {
		// Header,
		// Footer,
	},

	setup(props, { root }) {
		onMounted(() => {
			root.$store.dispatch("GET_PRODUCTS");
			root.$store.dispatch("cart/GET_ORDER");
		});
		return {
			gigi: "HEEELEL",
		};
	},
};
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
