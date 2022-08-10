const request = require('request')
const constantsF = require('../configF')

const forcastData = (address,callback) => {
    const url = constantsF.openWeatherMap.BASE_URL + encodeURIComponent(address) + '&appid=' + constantsF.openWeatherMap.SECRET_KEY

    console.log(url)
    request({url, json:true},
        (error,{body})=>{
            console.log(body)
            if(error){
                callback('Cannot fetch data')
            }
            else{
                callback(undefined,{
                    temprature : body.main.temp,
                    description : body.weather[0].description,
                    cityName : body.name,
                    maxTemp : body.main.temp_max,
                    minTemp : body.main.temp_min

                })
            }
        })
}
module.exports = forcastData
