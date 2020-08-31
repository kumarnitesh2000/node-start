const express = require('express');
const app = express();

console.log('Server Setup Done !');

let log = (req,res,next) =>{
    let newDate = new Date(Date.now());
    console.log(`Path ${req.originalUrl} , method ${req.method} ------${newDate.toDateString()}`);
    //can be access by next function the baseUrl
    req.requestTime = Date.now();
    next();
}

app.use(log);

//hello world
app.get('/hello',(req,res)=>{
    res.send('Heloo World !')
})

app.listen(5000);