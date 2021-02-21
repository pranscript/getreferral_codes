// express
const express = require('express');
const app = express();
// inits
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
// imports
const config = require('./configs/constants');

// mongoose.connect(config.url,{ useNewUrlParser: true, useUnifiedTopology: true , useFindAndModify: false},(err)=>{
//     if(err){
//         alert("Could not connect to the database" + err);
//         console.log("Could not connect to the database" + err);
//     }else{
//         console.log("Connected to database "+ config.dbname);
//     }
//   });

app.use(cors({ origin: 'https://localhost:3000' }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname+'/public'));
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.listen(config.port, () => {
  console.log(`Server started on port `, config.port);
});