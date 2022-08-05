const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiZnJhbmNpc3JlbnlsIiwiYSI6ImNsNjdpM3o4bjNsOG0zb3BkY3Q0N2JvOTQifQ.PFKC-SydvLiWVT8b98W2xg'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            //callback('Unable to find location. Try another search.', undefined)
            console.log(body)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode