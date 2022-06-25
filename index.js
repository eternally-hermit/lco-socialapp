const express = require('express');
const format = require('date-format');
const app = express();

const PORT = process.env.PORT || 4000;

app.get('/',(req,res) => {
    res.status(200).send('<h3 >Hello From Express...!</h3>');
})

app.get('/api/v1/instagram',(req,res) => {
    const instaSocial = {
        username: "hermitsocial_instagram",
        followers: 40,
        follows:10,
        date: format.asString("dd:MM - hh:mm:ss",new Date())
    };
    res.status(200).json(instaSocial);
})

app.get('/api/v1/facebook',(req,res) => {
    const instaSocial = {
        username: "hermitsocial_fb",
        followers: 45,
        follows:112,
        date: format.asString("dd:MM - hh:mm:ss",new Date())
    };
    res.status(200).json(instaSocial);
})

app.get('/api/v1/linkedin',(req,res) => {
    const instaSocial = {
        username: "hermitsocial_linkedin",
        followers: 445,
        follows:121,
        date: format.asString("dd:MM - hh:mm:ss",new Date())
    };
    res.status(200).json(instaSocial);
})

app.get('/api/v1/:token',(req,res) => {
    console.log(req.params.token);
    res.status(200).json({param:req.params.token})
})

app.listen(PORT,() => {
    console.log(`Server is running on ${PORT}`);
})