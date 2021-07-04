export const mutations = {
	SET_RESTAURANTS(state, restaurants) {
		//dont allow duplicate restaurants
		state.restaurants = [...state.restaurants, ...restaurants].filter(
			(thing, index, self) =>
				index ===
				self.findIndex(
					(t) =>
						t.geometry.location.lat === thing.geometry.location.lat &&
						t.geometry.location.lng === thing.geometry.location.lng
				)
		);
	},
	CLEAR_RESTAURANTS(state) {
		//clear
		state.restaurants = [];
		state.propertiesOpen = false;
		state.currentSelection = null;
		state.loading = false;
		state.map = null;
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
