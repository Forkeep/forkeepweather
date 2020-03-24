const axios = require('axios')

function getWeather(city) {
    return new Promise((resolve, reject) => {
        axios.get(`http://api.jirengu.com/getWeather.php/city=${encodeURI(city)}`)
            .then( response => {
                // console.log(response)
                resolve(response.data)
            })
            .catch( error => {
                reject('网络异常')
                // console.log(error);
            })
    })

}

module.exports = getWeather