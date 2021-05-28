// import mockRestaurants from "../mocks/restaurants.json";
import mockReviews from "../mocks/reviews.json";
import mockFavorites from "../mocks/favorites.json";

const getRestaurants = async () => {
	const getLocations = async (position) => {
		const response = await fetch(
			`http://localhost:3001/restaurants/?lat=${position.coords.latitude}&lng=${position.coords.longitude}`
		);
		return response.json();
	};

	const locations = await new Promise((resolve) => {
		navigator?.geolocation?.getCurrentPosition((position) => {
			resolve(getLocations(position));
		});
	});

	return locations;
};

const getReviews = async (placeId) => {
	const response = await fetch(
		`http://localhost:3001/details/?placeId=${placeId}`
	);

	const processedResponse = await response.json();
	if (processedResponse.reviews) {
		return processedResponse.reviews;
	} else {
		return null;
	}
};

const postReview = async ({ review, file, placeId }) => {
	const formData = new FormData();
	formData.append("review", review);
	formData.append("receipt", file);
	formData.append("placeId", placeId);

	const jwt = localStorage.getItem("jwt");

	if (jwt) {
		const response = await fetch("http://localhost:3001/review", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"x-access-token": jwt,
			},
			body: formData,
		});
		return response.json();
	}

	return { message: "JWT not found!" };
};

const postFavorites = async () => {
	const response = new Promise((resolve) => {
		const data = mockReviews;

		setTimeout(function() {
			resolve(data.reviews);
		}, 1500);
	});
	return response;
};

const getFavorites = async () => {
	const response = new Promise((resolve) => {
		const data = mockFavorites;

		setTimeout(function() {
			resolve(data.favorites);
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
	postFavorites,
	getFavorites,
	postReview,
};
