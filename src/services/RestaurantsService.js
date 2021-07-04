const getLocations = async (position) => {
	const response = await fetch(
		`http://localhost:3001/restaurants/?lat=${position.coords.latitude}&lng=${position.coords.longitude}`
	);
	return response.json();
};

const getRestaurants = async (newPosition) => {
	let locations;
	if (newPosition) {
		locations = await getLocations(newPosition);
	} else {
		locations = await new Promise((resolve) => {
			navigator?.geolocation?.getCurrentPosition((position) => {
				resolve(getLocations(position));
			});
		});
	}

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
	const response = await fetch("http://localhost:3001/reviews/pending", {
		method: "POST",
		headers: {
			"x-access-token": jwt,
		},
		body: formData,
	});
	return response.json();
};

const getPendingReviews = async () => {
	const jwt = localStorage.getItem("jwt");
	const response = await fetch(`http://localhost:3001/reviews/pending`, {
		headers: {
			"x-access-token": jwt,
		},
	});

	const pendingReviews = await response.json();

	if (pendingReviews) {
		return pendingReviews;
	} else {
		return null;
	}
};

const getReceipt = async (pendingReviewId) => {
	const jwt = localStorage.getItem("jwt");
	const response = await fetch(
		`http://localhost:3001/receipt/download/?review=${pendingReviewId}`,
		{
			headers: {
				"x-access-token": jwt,
			},
		}
	);
	const blob = await response.blob();
	const receipt = URL.createObjectURL(blob);
	return receipt;
};

const acceptPendingReview = async (data) => {
	const jwt = localStorage.getItem("jwt");
	const response = await fetch(`http://localhost:3001/reviews`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"x-access-token": jwt,
		},
		body: JSON.stringify({ ...data, operation: "accept" }),
	});

	return response.json();
};

const declinePendingReview = async (data) => {
	const jwt = localStorage.getItem("jwt");
	const response = await fetch(`http://localhost:3001/reviews`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"x-access-token": jwt,
		},
		body: JSON.stringify({ ...data, operation: "decline" }),
	});

	return response.json();
};

const getReviewHistory = async () => {
	const jwt = localStorage.getItem("jwt");
	const response = await fetch(`http://localhost:3001/reviews/history`, {
		headers: {
			"x-access-token": jwt,
		},
	});
	const reviews = await response.json();
	return reviews;
};

const reportReview = async (reportedReview) => {
	const jwt = localStorage.getItem("jwt");
	const response = await fetch(`http://localhost:3001/reviews/report`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"x-access-token": jwt,
		},
		body: JSON.stringify(reportedReview),
	});
	return await response.json();
};

const getReportedReview = async () => {
	const jwt = localStorage.getItem("jwt");
	const response = await fetch(`http://localhost:3001/reviews/report`, {
		headers: {
			"x-access-token": jwt,
		},
	});
	const reviews = await response.json();
	return reviews;
};

const removeReported = async (data) => {
	const jwt = localStorage.getItem("jwt");
	const response = await fetch(`http://localhost:3001/reviews/report`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			"x-access-token": jwt,
		},
		body: JSON.stringify(data),
	});

	return response.json();
};

const removeReview = async (data) => {
	const jwt = localStorage.getItem("jwt");
	const response = await fetch(`http://localhost:3001/reviews`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			"x-access-token": jwt,
		},
		body: JSON.stringify(data),
	});

	return response.json();
};

const getProcessedReceipt = async (pendingReviewId, signal) => {
	const jwt = localStorage.getItem("jwt");
	const response = await fetch(`http://localhost:3001/process-receipt`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"x-access-token": jwt,
		},
		body: JSON.stringify({ pendingReviewId }),
		signal: signal,
	});

	return response.json();
};

export default {
	getProcessedReceipt,
	getRestaurants,
	getPendingReviews,
	declinePendingReview,
	acceptPendingReview,
	getReviews,
	postReview,
	getReceipt,
	getReviewHistory,
	reportReview,
	getReportedReview,
	removeReported,
	removeReview,
};
