const blockUser = async ({ id, reason }) => {
	const jwt = localStorage.getItem("jwt");
	const response = await fetch(`http://localhost:3001/blacklist`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"x-access-token": jwt,
		},
		body: JSON.stringify({ userId: id, reason }),
	});

	return response.json();
};

const unblockUser = async (id) => {
	const jwt = localStorage.getItem("jwt");
	const response = await fetch(`http://localhost:3001/blacklist`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			"x-access-token": jwt,
		},
		body: JSON.stringify({ userId: id }),
	});

	return response.json();
};

const getBlockedUsers = async () => {
	const jwt = localStorage.getItem("jwt");
	const response = await fetch(`http://localhost:3001/blacklist`, {
		headers: {
			"x-access-token": jwt,
		},
	});

	return response.json();
};

export default {
	getBlockedUsers,
	unblockUser,
	blockUser,
};
