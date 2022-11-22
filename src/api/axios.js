import axios from 'axios'

const url = `https://centresocialeclater.onrender.com/api/users`


const ApiService = {
    get() {
        return axios
            .get(`${url}`)
    }

}

export { ApiService }