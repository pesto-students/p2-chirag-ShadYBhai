const express = require('express')
const createNewTransaction  = require('./routes/createTransaction.controller')
const deleteTransaction = require('./routes/delete.controller')
const getTransactionByUser  = require('./routes/getAllTransaction.controller')
const app = express()
const userLogin = require('./routes/userLogin.controller')
const userSignUp = require('./routes/userSignUp.controller')

app.use(express.json())

app.get('/login',(req,res)=>{
    const {email,password} = req.query
    if(!email || !password){
        res.send({'userLoginSucess': false})
        return
    }
    userLogin({email,password}, result => res.send(result))
})
app.post('/signup',(req,res)=>{
    const {first_name,email,password} = req.query
    if(!email||!first_name||!password){
        res.send({'userSignUpSucess': false})
        return
    }
    userSignUp(req.query, result => res.send(result))
})

app.get('/userTransactions', (req,res)=>{
    const {user_id , amount, assetName, amountTypeId} = req.query

    getTransactionByUser(req.query , result=> res.send(result))
})

app.post('/createTransaction',(req,res)=>{
    const {user_id,amount_type_id,amount,asset_id,created} = req.query
    
    createNewTransaction(req.query ,result => res.send(result))
})

app.get('/getTransactionByDate,(req,res)=>{
      
     const {user_id,created} = req.query
    
     getTransactionByDate(req.query, result=>res.send(result))
            
        })

app.delete('/deleteTransaction',(req,res)=>{
    const {userId} = req.query

    deleteTransaction(req.query, result => res.send(result))
})

app.listen(5000,()=>{
    console.log(`up and running`)
})
