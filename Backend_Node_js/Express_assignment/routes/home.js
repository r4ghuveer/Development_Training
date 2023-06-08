const express = require('express');
const router = express.Router();
const path = require('path');

const products=[];

router.get('/home',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','home.html'));
})

router.post('/home',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/user');
})

// module.exports=router;
exports.routes=router;
exports.products=products;//multiple exports