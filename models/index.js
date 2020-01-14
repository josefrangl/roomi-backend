'use strict';


const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const db = {};

const sequelize = new Sequelize(process.env.DATABASE_URL, {
dialect:  'postgres',
protocol: 'postgres',
logging:  (msg) => console.log('postgres: ', msg)
});

sequelize.authenticate()
  .then(() => {
    console.log('🐘: Connection to postgres  has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;


// BEGIN MODEL DEFINITIONS

// // USER MODEL
// const Model = Sequelize.Model;
// class User extends Model {}
// User.init({
//   email: {
//     type: Sequelize.STRING,
//     allowNull: true
//   },
//   password: {
//     type: Sequelize.STRING,
//     allowNull: true
//   },
//   country: {
//     type: Sequelize.STRING,
//     allowNull: true
//   },
//   city: {
//     type: Sequelize.STRING,
//     allowNull: true
//   },
//   phone_number: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   fb_id: {
//     type: Sequelize.STRING,
//     allowNull: true
//   },
//   shadow_user: {
//     type: Sequelize.BOOLEAN,
//     allowNull: false,
//     defaultValue: false
//   },
//   profile_pic: {
//     type: Sequelize.STRING,
//     allowNull: true,
//   }
// }, {
//   sequelize,
//   modelName: 'user'
// });



// sequelize.sync();

/*
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;*/

