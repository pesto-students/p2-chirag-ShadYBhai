const createConnection = require('./connection')

const createTransaction = (params,callback) =>
{
    const {user_id,amount_type_id,amount,asset_id,created,} = params

    const connection = createConnection()

    let query = `insert into transaction(user_id,created,asset_id,amount,amount_type_id)
    values('${user_id}','${created}','${asset_id}',"${amount}",'${amount_type_id}');`

    connection.query(query, (err,result)=>{
        if(result) callback(JSON.stringify(result))
    })
}

module.exports = createTransaction