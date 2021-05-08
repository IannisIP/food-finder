<template>
	<div>
		<v-app-bar color="white">
			<v-toolbar-title id="toolbar-title" @click="goHome"
				>IT Essentials</v-toolbar-title
			>
			<v-spacer></v-spacer>
			<v-btn icon>
				<v-icon>mdi-magnify</v-icon>
			</v-btn>
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
</style>
