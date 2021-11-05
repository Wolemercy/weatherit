const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// Geocoding
 
// geocode('Boston', (error, data) => {
//     if (error) {
//         return console.log(error)
//     }
//     console.log('Error', error)
//     console.log('Data', data)
//     forecast(data.latitude, data.longitude, (error, forecastData) => {
//         if (error) {
//             return console.log(error)
//         }

//         console.log(data.location)
//         console.log(forecastData)
        
//       })
// })

const address = process.argv[2]

if (!address) {
    return console.log('Please provide an address')
} else {
    geocode(address, (error, {longitude, latitude, location}={}) => {
        if (error) {
            return console.log(error)
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
    
            console.log(location)
            console.log(forecastData)
            
          })
    })
}