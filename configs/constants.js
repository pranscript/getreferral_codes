
//const crypto = require('crypto').randomBytes(256).toString('hex');
//require("dotenv").config();
console.log(process.env.NODE_ENV + " mode");
console.log("in developmennt");
const url=process.env.DATABASE_URL;
const dbname=process.env.DATABASE_NAME;
const port=process.env.PORT;
const errorURL = process.env.errorURL;
const redisURL = process.env.redisURL;
console.log(process.env.PORT);

module.exports = {
    url : url,
    //secret : crypto,
    dbname : dbname,
    port: port,
    redis:redisURL,
    errorURL: errorURL
}

