const { json } = require("express");
const createConnection = require("./connection");

const getTransactionByUser = (params,callback) => {

    const {user_id} = params
    
    let query = `select u.first_name , u.last_name , t.created, a.asset_type , b.label from user_table u join transaction t on u.user_id = '${user_id}'
    join assets a join amount_type b;`

    const connection = createConnection()

    connection.query(query,(err,result)=>{
        if(result){
            callback(JSON.stringify(result))
        }
    })
}

module.exports = getTransactionByUser

