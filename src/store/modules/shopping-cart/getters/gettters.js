export const getters = {
	GET_ORDER(state) {
		return state.order;
	},
	GET_DELIVERY(state) {
		return state.deliveryMethod;
	},
	GET_DATE_FACTURARE(state) {
		return state.dateFacturare;
	},
	GET_METODA_PLATA(state) {
		return state.metodaPlata;
	},
	GET_ORDER_NO_PRODUCTS(state) {
		return state.order.reduce((acc, order) => acc + order.quantity, 0);
	},
};
