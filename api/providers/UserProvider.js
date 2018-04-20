import ApiProvider from './ApiProvider'

const UserProvider = {
    getUsers: async () => await ApiProvider.get('user')
};


export default UserProvider;