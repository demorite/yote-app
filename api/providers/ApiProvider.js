const url = 'http://localhost:1337/';

const ApiProvider = {
	get: async (entity) => await (await fetch(`${url}${entity}`)).json()
};

export default ApiProvider