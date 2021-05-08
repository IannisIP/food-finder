import router from "@/router";

export const mutations = {
	SET_ORDER(state, order) {
		state.order = order;
	},
	SET_DELIVERY(state, delivery) {
		state.deliveryMethod = delivery;
	},
	SET_DATE_FACTURARE(state, dateFact) {
		state.dateFacturare = dateFact;
	},
	SET_METODA_PLATA(state, metoda) {
		state.metodaPlata = metoda;
	},
	SET_PRODUCT_TO_CART(state, { id }) {
		const existingProduct = state.order.find((order) => order.productId === id);
		if (existingProduct) {
			existingProduct.quantity += 1;
			const idx = state.order.findIndex(
				(order) => order.productId == existingProduct.productId
			);
			state.order.splice(idx, 1, existingProduct);
		} else {
			state.order.push({ productId: id, quantity: 1 });
		}
	},
	UPDATE_ORDER_QUANTITY(state, product) {
		const idx = state.order.findIndex((order) => order.productId == product.id);
		state.order.splice(idx, 1, {
			productId: product.id,
			quantity: product.quantity,
		});
	},
	REMOVE_ORDER(state, product) {
		state.order = state.order.filter((order) => order.productId !== product.id);

		if (state.order.length === 0) {
			router.push("/");
		}
	},
};
