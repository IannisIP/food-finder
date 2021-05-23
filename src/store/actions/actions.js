import RestaurantsService from "../../services/RestaurantsService";

export const actions = {
	GET_RESTAURANTS: async ({ commit }) => {
		commit("LOADING", true);
		const restaurants = await RestaurantsService.getRestaurants("mockURL");
		commit("LOADING", false);
		commit("SET_RESTAURANTS", restaurants);
	},
	GET_REVIEWS: async ({ commit, getters }) => {
		const placeId = getters["GET_CURRENT_SELECTION"]["place_id"];
		const reviews = await RestaurantsService.getReviews(placeId);
		commit("SET_REVIEWS", reviews);
	},
	SET_MAP: ({ commit }, map) => {
		commit("SET_MAP", map);
	},
	FLY_TO: ({ getters }, { coords, zoom }) => {
		getters["MAP"].flyTo(coords, zoom);
	},
	SET_PROPERTIES_OPEN: ({ commit }, payload) => {
		commit("SET_PROPERTIES_OPEN", payload);
	},
	SET_CURRENT_SELECTION: ({ commit }, selection) => {
		commit("SET_CURRENT_SELECTION", selection);
	},
};
