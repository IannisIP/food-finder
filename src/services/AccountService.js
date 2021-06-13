const registerUser = async (userInfo) => {
	const response = await fetch("http://localhost:3001/users", {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(userInfo),
	});

	console.log(response);
	return response.json();
};

const loginUser = async (userInfo) => {
	const response = await fetch("http://localhost:3001/users/login", {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(userInfo),
	});
	const data = await response.json();

	//localStorage.setItem("user", JSON.stringify(data.user));
	localStorage.setItem("jwt", data.token);

	return data;
};

const getUserInfo = async (jwt) => {
	const response = await fetch("http://localhost:3001/user-info", {
		method: "GET",
		headers: {
			Accept: "application/json",
			"x-access-token": jwt,
		},
	});
	const jsonResponse = await response.json();
	if (jsonResponse.message === "Failed to authenticate token.") {
		const user = localStorage.getItem("user");
		const jwt = localStorage.getItem("jwt");
		user && localStorage.removeItem("user");
		jwt && localStorage.removeItem("jwt");

		alert(jsonResponse.message);
	}
	return jsonResponse;
};

export default {
	registerUser,
	loginUser,
	getUserInfo,
};
