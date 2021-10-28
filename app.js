const request = require('postman-request')

const url = "http://api.weatherstack.com/current?access_key=a4c0f1b63b7ce71524ad42e39e14332a&query=37.8267,-122.4223&units=f"

request({url: url, json: true}, (error, response) => {
    console.log(response.body.current.weather_descriptions[0] +
                 ". It is currently " + 
                 response.body.current.temperature + 
                 " degrees out. It feels like " + 
                 response.body.current.feelslike + " degrees out")
})

// Geocoding