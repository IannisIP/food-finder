export const mutations = {
	SET_RESTAURANTS(state, restaurants) {
		state.restaurants = restaurants;
	},
	SET_REVIEWS(state, reviews) {
		state.reviews = reviews;
	},
	LOADING(state, loading) {
		state.loading = loading;
	},
	SET_MAP(state, map) {
		state.map = map;
	},
	SET_PROPERTIES_OPEN: (state, payload) => {
		state.propertiesOpen = payload;
	},
	SET_CURRENT_SELECTION: (state, selection) => {
		state.currentSelection = selection;
	},
	SET_USER: (state, user) => {
		state.user = user;
	},
};
