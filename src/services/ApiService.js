const ApiService = {

	/**
	 * Perform a GET request to API
	 * and return the response
	 * @param {String} endpoint 
	 * @param {Object} params 
	 */
	get: (endpoint, params) => {
		return new Promise(async (resolve, reject) => {
			try {

				// Build url with query params
				let url = `${process.env.VUE_APP_API_ENDPOINT}/${endpoint}`;
				if (params) {
					url += "?";
					url += params.param + "=" + params.equals;
				}

				// Return response as resolved promise
				let req = await fetch(url);
				let res = await req.json();

				if (req.status != 200) {
					reject({
						request: req,
						response: res
					});
				}

				resolve(res);

			} catch (err) {
				reject(err);
			}
		});
	}

}

export default ApiService;