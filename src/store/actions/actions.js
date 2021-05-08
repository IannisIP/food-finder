import ProductsService from "../../services/ProductsService";

export const actions = {
	GET_PRODUCTS: async ({ commit }) => {
		commit("LOADING", true);
		const products = await ProductsService.getProducts("mockURL");
		commit("LOADING", false);
		commit("SET_PRODUCTS", products);
	},
};
