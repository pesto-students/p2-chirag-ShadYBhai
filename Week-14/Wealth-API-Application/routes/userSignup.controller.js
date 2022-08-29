
const createConnection = require('./connection')

const userSignUp = (userInformation,callback) => {
    const {  email, first_name,last_name, password } = userInformation;
    const connection = createConnection()

    const query = `INSERT INTO user_table(first_name,last_name, email, password)
                   VALUES('${first_name}', '${last_name}', '${email}', '${password}')`
    
    connection.query(query,(err,result)=>{
        console.log(err)
        if(result){
            
            callback({ isSignUpSuccess: true });
        }
        else{
            callback({isSignUpSuccess:false})
        }
    })
}

module.exports = userSignUp