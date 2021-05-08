import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../components/dashboard/Dashboard.vue";
import FavoriteRestaurants from "../components/favorite/FavoriteRestaurants.vue";

const routes = [
	{
		path: "/",
		name: "Dashboard",
		component: Dashboard,
	},
	{
		path: "/favorites",
		name: "FavoriteRestaurants",
		component: FavoriteRestaurants,
	},
	// {
	// 	path: "/cart/products",
	// 	name: "ProductOrder",
	// 	component: ProductsOrder,
	// },
	// {
	// 	path: "/cart/checkout",
	// 	name: "ProductCheckout",
	// 	component: Checkout,
	// },
	// {
	// 	path: "/confirmation",
	// 	name: "confirmation",
	// 	component: Confirmation,
	// },
];

const router = new VueRouter({
	mode: "history",
	routes,
});

Vue.use(VueRouter);

export default router;
