const express = require('express');
const router=express.Router();
router.get('/shoes',(req,res,next)=>{
    res.send('<h1>Buy some shoes !</h1>');
})

module.exports=router;