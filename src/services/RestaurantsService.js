import mockRestaurants from "../mocks/restaurants.json";
import mockReviews from "../mocks/reviews.json";

const getRestaurants = async () => {
	const response = new Promise((resolve) => {
		const data = mockRestaurants;

		setTimeout(function() {
			resolve(data.restaurants);
		}, 1500);
	});
	return response;
};

const getReviews = async () => {
	const response = new Promise((resolve) => {
		const data = mockReviews;

		setTimeout(function() {
			resolve(data.reviews);
		}, 1500);
	});
	return response;
};

const sendOrder = async (order) => {
	await fetch("https://httpbin.org/post", {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(order),
	});
	// const content = await rawResponse.json();

	// console.log(content);
};

const createOrUpdateCart = async (newCart) => {
	await fetch(`https://it-essentials-basic-backend.herokuapp.com/carts`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(newCart),
	});
};

const updateProductQuantity = async (updatedProduct) => {
	await fetch(`https://it-essentials-basic-backend.herokuapp.com/carts`, {
		method: "PUT",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			userId: 9912,
			...updatedProduct,
		}),
	});
};

const removeCartProduct = async (data) => {
	await fetch(`https://it-essentials-basic-backend.herokuapp.com/carts`, {
		method: "DELETE",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});
};

export default {
	getRestaurants,
	sendOrder,
	createOrUpdateCart,
	updateProductQuantity,
	removeCartProduct,
	getReviews,
};
