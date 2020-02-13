const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

let arr = [{
  username:'admin',
  password : 'admin'
}]
app.post('/login',(req,res,next) => {
 let loginDetails = req.body;
 arr.forEach()
})

app.listen(3000, () => {
  console.log('localhost up and running at port 3000');
})
