const createConnection = require('./connection')

const deleteTransaction = (params,callback) =>{

    const {user_id} = params

    const connection = createConnection()

    const query = `DELETE FROM transaction WHERE user_id ='${user_id}'`

    connection.query(query,(err,result)=>{
        callback({DELETED : 'SUCESS'})
    })
}

module.exports = deleteTransaction