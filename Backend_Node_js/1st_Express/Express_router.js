// using the routes folder(admin.js & shop.js)
const express=require('express'); 
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
app.use(adminRoutes);
app.use(shopRoutes);

app.get("/shops",(req,res,next)=>{
    res.send("<p> this is the shop </p>");
})

app.use((req,res,next)=>{
    res.status(404).send("<h3> Page not found </h3>");
});

app.listen(3000);

