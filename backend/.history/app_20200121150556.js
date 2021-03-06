const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
cosnt jwt = require('jsonwebtoken');

app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

let arr = [{
  username:'admin',
  password : 'admin'
},{
  username:'user',
  password : 'user'
}]
app.post('/login',(req,res,next) => {
 let loginDetails = req.body.loginData;
 console.log(loginDetails);
 flag = false;
 arr.forEach(val => {
   if(val.username === loginDetails.email && val.password === loginDetails.password ){
    let payload = {
      id:1,
      'role':val.email,
    }
    const token = jwt.sign(payload,'secret');
    res.cookie('acessToken',token,{
      maxAge:3
    });
    res.status(200).send('logged In Succesfully!')
    // res.status(200).json(JSON.stringify(val));
     flag = true;
   }
 })
 if(!flag)
  res.status(401).send('Authentication failed');
})

app.listen(3000, () => {
  console.log('localhost up and running at port 3000');
})
