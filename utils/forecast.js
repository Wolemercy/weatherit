const request = require('postman-request')

const forecast = (lati, long, callback) => {
    url = "http://api.weatherstack.com/current?access_key=a4c0f1b63b7ce71524ad42e39e14332a&query="
    + long + ',' + lati + "&units=m"

    request({url:url, json: true}, (error, response) => {
        if (error) {
            callback("Unable to connect to weather service", undefined)
        } else if (response.body.error) {
            callback("Unable to find location", undefined)
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] +
                            ". It is currently " + 
                            response.body.current.temperature + 
                            " degrees out. It feels like " + 
                            response.body.current.feelslike + " degrees out")
        }
    })

}

module.exports = forecast