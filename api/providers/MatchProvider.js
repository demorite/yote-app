import ApiProvider from './ApiProvider';

const MatchProvider = {
	getMatches: async () => await ApiProvider.get('match'),
};

export default MatchProvider;