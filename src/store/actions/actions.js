import RestaurantsService from "../../services/RestaurantsService";

export const actions = {
	GET_RESTAURANTS: async ({ commit }) => {
		commit("LOADING", true);
		const restaurants = await RestaurantsService.getRestaurants("mockURL");
		commit("LOADING", false);
		commit("SET_RESTAURANTS", restaurants);
	},
	SET_MAP: ({ commit }, map) => {
		commit("SET_MAP", map);
	},
	FLY_TO: ({ getters }, { coords, zoom }) => {
		getters["MAP"].flyTo(coords, zoom);
	},
};
