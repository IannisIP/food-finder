import OrdersService from "@/services/OrdersService";

export const actions = {
	GET_ORDER: async ({ commit }) => {
		const order = await OrdersService.getOrder();
		commit("SET_ORDER", order);
	},
	SET_PRODUCT_TO_CART: ({ commit }, product) => {
		commit("SET_PRODUCT_TO_CART", product);
	},
	UPDATE_ORDER_QUANTITY: ({ commit }, product) => {
		commit("UPDATE_ORDER_QUANTITY", product);
	},
	REMOVE_ORDER: ({ commit }, product) => {
		commit("REMOVE_ORDER", product);
	},
};
