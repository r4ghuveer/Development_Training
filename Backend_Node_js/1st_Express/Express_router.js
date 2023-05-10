// using the routes folder(admin.js & shop.js)
const express=require('express'); 
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
app.use(adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).send("<h3> Page not found </h3>");
});


app.listen(3000);

