//Http post request W/express and body parcer module
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use('/public',express.static(path.join(__dirname,'static')));
app.use(bodyParser.urlencoded({extended: false}));

 app.get('/',(req,res)=>{
res.sendFile(path.join(__dirname,'static','index.html'));

});

app.post('/',(req,res)=>{
    console.log(req.body);
    res.send('successfully posted');
});

// app.get('/example',(req,res)=>{
//     res.send('hitting example route');
// });


// app.get('/example/:name/:age',(req,res)=>{
//     console.log(req.params)
//     console.log(req.query);
//     res.send(req.params.name + " : " + req.params.age);
// });

app.listen(3000);