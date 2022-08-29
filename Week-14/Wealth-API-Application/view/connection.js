let mysql = require('mysql');
let connection;
let config = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'wealth'
};
const createConnection = () => {
    if(!connection) {
        connection = mysql.createConnection(config);
        connection.connect((err) => {
            if (err) {
                console.error('error: ' + err.message);
                return undefined;
            }
            else{
                console.log('connected');
            }
            
        });
        
    }
    return connection
}

module.exports = createConnection;