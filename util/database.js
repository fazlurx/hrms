const Sequelize = require('sequelize');

// console.log('DB host ' + process.env.DB_HOST);
const sequelize = new Sequelize('9ythrms', 'root','9ytHRMS@123', {
    dialect: 'mysql',
    host: 'localhost'
});



module.exports = sequelize;