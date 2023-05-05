import GLOBAL from '../GLOBAL'

export default class BaseModel {
    async directFetch(data) {
        return await fetch(GLOBAL.Base_URL.URL + data.url, {
            method: data.method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: data.body,
        }).then((response) => response.json().then((responseJson) => {
            return responseJson
        })).catch((error) => {
            return { require: false, data: [], err: error }
        })
    }

    // async authFetch(data) {
    //     const response = await fetch(GLOBAL.BASE_URL.URL + data.url, {
    //         method: data.method,
    //         headers: GLOBAL.AUTH_HEADERS,
    //         body: data.body,
    //     }).then((response) => response.json().then((responseJson) => {
    //         return responseJson
    //     })).catch((error) => {
    //         return { require: false, data: [], err: error }
    //     })

    //     if (response.unauthorized) {
    //         console.log('unauthorized', response.error)

    //         localStorage.clear()
    //         window.location.reload()
    //     }

    //     return response
    // }
}