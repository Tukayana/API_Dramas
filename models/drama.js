const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const bcrypt = require('bcryptjs');

const Drama = sequelize.define('Drama', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  origem: {
    type: DataTypes.STRING,
    allowNull: false,
  
  },
  genero: {
    type: DataTypes.STRING,
    allowNull: false,
  
  },
  imagem: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  link: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  
});

module.exports = Drama;