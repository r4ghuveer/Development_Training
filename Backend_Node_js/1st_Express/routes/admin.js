const express = require('express');

const router = express.Router();

router.use('/app-product',(req,res,next)=>{
    res.send("app product page");
})

router.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;