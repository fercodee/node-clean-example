const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Address = require('../models/Address');
const Tech = require('../models/Tech');


const connection = new Sequelize(dbConfig);

// ! All models should be in here, remember: you can use consign package
User.init(connection);
Address.init(connection);
Tech.init(connection);


// ! You can pass model one by one or all models
User.associate(connection.models);
Address.associate(connection.models);
Tech.associate(connection.models);


module.exports = connection;