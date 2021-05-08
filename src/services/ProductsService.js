//import mockProducts from "../mocks/products.json";

const getProducts = async () => {
	const response = await fetch(
		"https://it-essentials-basic-backend.herokuapp.com/products"
	);
	// const response = new Promise((resolve) => {
	// 	const data = mockProducts;

	// 	setTimeout(function() {
	// 		resolve(data.products);
	// 	}, 1500);
	// });
	const myJson = await response.json();

	return myJson;
};

export default {
	getProducts,
};
