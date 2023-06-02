const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/user',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','user.html'));
})

module.exports=router;