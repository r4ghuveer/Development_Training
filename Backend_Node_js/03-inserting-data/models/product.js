const mongoConnect = require('../util/database')
class Product{
  constructor(title,price ,description ,imageUrl){
      this.price=price;
      this.imageUrl=imageUrl;
      this.title=title;
      this.description=description;
  }
  save(){

  }
}

// const Product = sequelize.define('product',{
//   id: {
//     type : Sequelize.INTEGER,
//     autoIncrement: true,
//     allowNull : false,
//     primaryKey:  true
//   },
//   title: Sequelize.STRING,
//   price: {
//     type:Sequelize.DOUBLE,
//     allowNull: false
//   },
//   imageUrl:{
//     type: Sequelize.STRING,
//     allowNULL: false 
//   },
//   description:{
//     type:Sequelize.STRING,
//     allowNULL: false
//   }

// });

module.exports = Product ;