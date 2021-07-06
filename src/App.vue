<template>
	<v-app id="app">
		<Header />
		<v-snackbar
			v-if="snackbar"
			v-model="snackbar"
			absolute
			top
			centered
			:color="alertType"
			rounded="pill"
		>
			<v-icon> mdi-alert-circle </v-icon> {{ alertMessage }}

			<template v-slot:action="{ attrs }">
				<v-btn color="white" text v-bind="attrs" @click="snackbar = false">
					Close
				</v-btn>
			</template>
		</v-snackbar>
		<v-main id="content">
			<router-view></router-view>
		</v-main>
		<!-- <Footer /> -->
	</v-app>
</template>

<script>
import Header from "./shared-components/Header";
// import Footer from "./shared-components/Footer";
import { onMounted, ref } from "@vue/composition-api";
import { EventBus } from "@/main.js";
export default {
	components: {
		Header,
		// Footer,
	},

	setup(props, { root }) {
		const snackbar = ref(false);
		const alertMessage = ref("");
		const alertType = ref("");

		onMounted(() => {
			root.$store.dispatch("GET_RESTAURANTS");
		});

		EventBus.$on("alert", ({ message, type }) => {
			snackbar.value = true;
			alertMessage.value = message;
			alertType.value = type === "error" ? "red lighten-1" : "success";

			clearTimeout(timeout);
			const timeout = setTimeout(() => {
				snackbar.value = false;
			}, 5000);
		});

		return {
			snackbar,
			alertMessage,
			alertType,
		};
	},
};
</script>

<style>
html {
	overflow: hidden;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

.v-snack.v-snack--absolute {
	top: 60px;
	z-index: 9999999999;
	height: auto;
}
</style>
