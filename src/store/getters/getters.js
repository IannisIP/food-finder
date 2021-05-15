export const getters = {
	GET_RESTAURANTS: (state) => {
		return state.restaurants;
	},
	GET_REVIEWS: (state) => {
		return state.reviews;
	},
	LOADING: (state) => {
		return state.loading;
	},
	MAP: (state) => {
		return state.map;
	},
	GET_PROPERTIES: (state) => {
		return state.propertiesOpen;
	},
	GET_CURRENT_SELECTION: (state) => {
		return state.currentSelection;
	},
};
