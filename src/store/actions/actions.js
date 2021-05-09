import RestaurantsService from "../../services/RestaurantsService";

export const actions = {
	GET_RESTAURANTS: async ({ commit }) => {
		commit("LOADING", true);
		const restaurants = await RestaurantsService.getRestaurants("mockURL");
		commit("LOADING", false);
		commit("SET_RESTAURANTS", restaurants);
	},
};
