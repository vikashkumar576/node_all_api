const express = require("express");
const cors = require("cors")
const app = express();

function genetatePassword(passLength) {
    // pass formate
    const passVal = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";
    let finalPass = "";
     
     // pass generation 
    for (let i = 0; i < passLength; i++) {
        let passKey = Math.floor(Math.random() * passVal.length) 
        finalPass += passVal[passKey];
    }
    return finalPass
}

app.use(cors());
// generate password api
app.get("/generate-password",(req, res) => {

    let {query:{length}} = req;
    const finalPass = genetatePassword(length || 8)

    res.status(200).json({
        password : finalPass,
        status : true
    });
})

app.listen(8080)