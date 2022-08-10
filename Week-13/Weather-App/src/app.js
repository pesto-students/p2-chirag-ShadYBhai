const express = require('express')
const app = express();

const weatherData = require('../utils/weatherData')

const forcastData = require('../utils/forcastData')

const port = process.env.PORT || 3000

app.get('/',(req,res)=>{
    res.send('THIS IS A WEATHER APP')
})


app.get('/weather',(req,res)=>{

    const cities = req.query.address   

    req.query.address.split(',')

    if(!cities){
        return res.send({
            error : 'you must enter cityname'
        })
    }
     

    weatherData(cities, (error,{temprature,description,cityName}) => {
        if(error){
            return res.send({
                error
            })
        }
        console.log(temprature,description,cityName)
        res.send({
            temprature,
            description,
            cityName,
        })
    })
})
app.get('/forcast',(req,res)=>{
    const address = req.query.address

    if(!address){
        return res.send({
            error : 'you must enter cityname'
        })
    }

    forcastData(address, (error,{temprature,description,cityName,maxTemp,minTemp}) => {
        if(error){
            return res.send({
                error
            })
        }
        console.log(temprature,description,cityName)
        res.send({
            temprature,
            description,
            cityName,
            maxTemp,
            minTemp
        })
    })
})

app.get('*',(req,res)=>{
    res.send('PAGE NOT FOUND')
})

app.listen(port,()=>{
    console.log('Server Running')
})
