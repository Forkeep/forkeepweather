const getWeather = require('./index')

getWeather('平顶山')
    .then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    })