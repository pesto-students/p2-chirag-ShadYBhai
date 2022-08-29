const createConnection = require('./connection')

const getTransactionByDate = (params,callback) => {
    const {created} = params

    const connection = createConnection()

    const query = `select asset_id, amount, amount_type_id from transaction where created='${created}';`

    connection.query(query, (err, result)=>{
        if(result){
            callback({FoundOnGivenDate: true})
        }
        else if(err){
            callback({FoundOnGivenDate : false})
        }
    })
}

module.exports = getTransactionByDate
