const request = require('postman-request')

const url = "http://api.weatherstack.com/current?access_key=a4c0f1b63b7ce71524ad42e39e14332a&query=37.8267,-122.4223&units=f"

// request({url: url, json: true}, (error, response) => {
//     if (error) {
//         console.log("Unable to connect to weather service")
//     } else if (response.body.error) {
//         console.log("Unable to find location")
//     } else {
//         console.log(response.body.current.weather_descriptions[0] +
//             ". It is currently " + 
//             response.body.current.temperature + 
//             " degrees out. It feels like " + 
//             response.body.current.feelslike + " degrees out")
//     }
    
// })

// Geocoding

urlGeo = "https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1Ijoid29sZW1lcmN5IiwiYSI6ImNrdmJsenQ5NzRjM2UycHF3czlzcjAwNjgifQ.T3lr_DDkEPcMqz-r84x9iA&limit=1"

request({url: urlGeo, json: true}, (error, response) => {

    if (error) {
        console.log("Unable to connect to Geo service")
    } else if (response.body.features.length === 0) {
        console.log("Unable to find location")
    } else {
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log(latitude, longitude)
    }


})