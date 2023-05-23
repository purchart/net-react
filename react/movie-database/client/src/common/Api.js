import axios from "axios";

const API_URL = "http://localhost:5000";

export const ApiGet = (url, par) => {
	return axios({ method: "get", url: API_URL + url, params: par })
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			throw error;
		});
};

