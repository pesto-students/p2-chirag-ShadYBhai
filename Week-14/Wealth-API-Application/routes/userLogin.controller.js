const express = require('express')

const createConnection = require('./connection')

const userLogin = ({email,password},callback) => 
{
    const connection = createConnection()

    const query = `SELECT user_id, count(*) as cnt from user_table where 
                   email='${email}' and password='${password}'` 

    connection.query(query , (err,results)=>{
        console.log(results)
        if (results)
            callback({ isLoginSuccess: true, userId: results[0].id });
        else
            callback({ isLoginSuccess: false });
    })
}

module.exports = userLogin