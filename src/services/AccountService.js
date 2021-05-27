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

	localStorage.setItem("user", JSON.stringify(data.user));
	localStorage.setItem("jwt", data.token);

	return data;
};

export default {
	registerUser,
	loginUser,
};
