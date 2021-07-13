import Api from './Api';

export default {

    async createUser(_user) {
        const user = {
            name: _user.name,
            email: _user.email,
        }
        try {
            const response = await Api().post('/users/', user);
            return response.data;
        } catch (error) {
            return console.log(error);
        }
    },
    async updateUser(_user) {
        const user = {
            name: _user.name,
            email: _user.email,
        }
        try {
            const response = await Api().put(`/users/${_user.id}`, user);
            return response.data;
        } catch (error) {
            return console.log(error);
        }
    },
    async getUsers() {
        try {
            const response = await Api().get('/users');
            return response.data;
        } catch (error) {
            return console.log(error);
        }
    },
    async getUserById(id) {
        try {
            const response = await Api().get(`/users/${id}`);
            return response.data;
        } catch (error) {
            return console.log(error);
        }
    },

    async deleteUser(_id) {
        // const user = {
        //     name: _user.name,
        //     email: _user.email
        // };        
        const response = await Api().delete(`/users/${_id}`);
    },

}