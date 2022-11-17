import axios from 'axios'

const url = `https://centresocialeclater.onrender.com`

const ApiService = {
    get(ressource) {
        return axios
            .get(`${url}/api/${ressource}`)
    }

}

export { ApiService }