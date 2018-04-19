const url = 'https://jsonplaceholder.typicode.com/';

const ApiProvider = {
    get: async (entity) => await (await fetch(`${url}${entity}`)).json()
};

export default ApiProvider