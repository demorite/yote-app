import ApiProvider from './ApiProvider';

const BabyfootProvider = {
	getBabyfoots: async () => await ApiProvider.get('babyfoot')
};

export default BabyfootProvider;