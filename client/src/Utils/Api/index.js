export default function buildApi() {
	return Object.freeze({
		makeGetRequest,
		makePostRequest
	});

	async function makePostRequest(url, data) {
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		};
		const response = await fetch(url, options);
		return response.json();
	}
	async function makeGetRequest(url, headers) {
		let options = {
			method: "GET"
		};
		if (headers) {
			options.header = headers;
		}
		const response = await fetch(url, options);
		return response.json();
	}
}
