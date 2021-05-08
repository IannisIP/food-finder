export const getters = {
	GET_PRODUCTS: (state) => {
		return state.products;
	},
	LOADING: (state) => {
		return state.loading;
	},
	GET_PRODUCTS_BY_ORDER: (state, getters) => {
		const orders = getters["cart/GET_ORDER"];
		const products = getters["GET_PRODUCTS"];

		const filteredProducts = products.filter((product) =>
			orders.some((order) => order.productId === product.id)
		);

		orders.forEach((order) => {
			filteredProducts.forEach((product, idx) => {
				if (product.id === order.productId) {
					filteredProducts[idx] = {
						...filteredProducts[idx],
						quantity: order.quantity,
					};
				}
			});
		});

		return filteredProducts;
	},
	TOTAL_CART: (state, getters) => {
		const productsByOrder = getters["GET_PRODUCTS_BY_ORDER"];
		return productsByOrder.reduce(
			(acc, currVal) => acc + currVal.price * currVal.quantity,
			0
		);
	},
};
