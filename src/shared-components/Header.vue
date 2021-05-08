<template>
	<div>
		<v-app-bar color="white">
			<v-toolbar-title id="toolbar-title" @click="goHome"
				>Food Finder</v-toolbar-title
			>
			<v-spacer></v-spacer>

			<div class="search-input-container">
				<v-text-field prepend-icon="mdi-magnify"></v-text-field>
			</div>

			<v-btn icon>
				<v-icon>mdi-heart</v-icon>
			</v-btn>
			<v-btn icon @click="openCart">
				<v-icon>mdi-cart</v-icon>
				<span v-show="orderAmount" id="product-counter">{{ orderAmount }}</span>
			</v-btn>
		</v-app-bar>
	</div>
</template>

<script>
import { computed } from "@vue/composition-api";
import router from "@/router";
export default {
	setup(props, { root }) {
		return {
			orderAmount: computed(() => {
				return root.$store.getters["cart/GET_ORDER_NO_PRODUCTS"];
			}),
			openCart: () => {
				router.push("/cart/products");
			},
			goHome: () => {
				router.push("/");
			},
		};
	},
};
</script>

<style scoped lang="scss">
#product-counter {
	border-radius: 50%;
	width: 17px;
	color: white;
	position: absolute;
	background-color: red;
	top: -3px;
	left: 20px;
}

#toolbar-title {
	cursor: pointer;
}

.search-input-container {
	width: 300px;

	::v-deep .v-input {
		max-width: 450px;
		border-radius: 8px !important;
		border-top-left-radius: 8px !important;
		border-top-right-radius: 8px !important;
		border-bottom-right-radius: 8px !important;
		border-bottom-left-radius: 8px !important;
		background-color: #c6d8ff !important;
		border-color: #c6d8ff !important;
	}

	::v-deep .v-text-field__details {
		display: none;
	}
}
</style>
