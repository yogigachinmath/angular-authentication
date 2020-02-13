const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

app.use(cors({
  origin: 'http://localhost:4200',
  credentials:true
}));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser());

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
    const token = jwt.sign(JSON.stringify(payload),'secret');
    res.cookie('acessToken',token,{
      maxAge:365 * 24 * 60 * 60 * 1000,
      expires:false,
    });
    res.status(200).json('looged In');
    // res.status(200).json(JSON.stringify(val));
     flag = true;
   }
 })
 if(!flag)
  res.status(401).send('Authentication failed');
})
app.get('/check',(req,res) => {
  try {
    var decoded = jwt.verify(req.cookies, 'secret');
    res.status(200).ensd
  } catch(err) {
    console.log(err);
    res.status(403).json('token failed');
  }
})
app.listen(3000, () => {
  console.log('localhost up and running at port 3000');
})
