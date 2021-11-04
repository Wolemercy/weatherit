const request = require('postman-request')

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1Ijoid29sZW1lcmN5IiwiYSI6ImNrdmJsenQ5NzRjM2UycHF3czlzcjAwNjgifQ.T3lr_DDkEPcMqz-r84x9iA&limit=1"

    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to location service', undefined)
        } else if (response.body.features.length === 0) {
            callback('unable to find location. Try another search', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
} 


module.exports = geocode