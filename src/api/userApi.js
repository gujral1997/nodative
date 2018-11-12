import axios from 'axios'
import { API_HOST } from 'react-native-dotenv'

export const userApi = {

    login: (username, password) => {
        return axios({
            method: 'post',
            url: `${API_HOST}/nodative/api/v1/users/login`,
            data: {
                'username': username,
                'password': password
            },
            timeout: 15000
        })
            .then(response => {
                console.log(response)
            }).catch(err=> {
                console.log(err)
            })
    }
}