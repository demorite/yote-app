import {apiUrl} from "../../constants/config";

const ApiProvider = {
	get: async (entity) => await (await fetch(`${apiUrl}${entity}`)).json()
};

export default ApiProvider