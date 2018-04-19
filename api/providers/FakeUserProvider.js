import ApiProvider from './ApiProvider'

const FakeUserProvider = {
    getUsers: async () => {
        return await ApiProvider.get('users')
    }
};


export default FakeUserProvider;