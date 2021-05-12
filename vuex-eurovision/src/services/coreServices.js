import axios from 'axios'

export const CoreServices = {
    get({
        url,
        params,
        header,
        auth,
        responseType
    }) {
        return new Promise((resolve, reject) => {
            axios.get(url, {
                auth: auth,
                params: params,
                responseType: responseType,
                headers: header
            })
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                })

        })
    },
    post({
        url,
        data,
        header
    }) {
        return new Promise((resolve, reject) => {
            axios.post(url, data, {
                headers: header
            })
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },
    put({
        url,
        data,
        header
    }) {
        return new Promise((resolve, reject) => {
            axios.put(url, data, {
                headers: header
            })
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },
    delete({
        url
    }) {
        return new Promise((resolve, reject) => {
            axios.delete(url)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }
}