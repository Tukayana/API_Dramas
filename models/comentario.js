const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Drama = require('./drama.js');


const Comentario = sequelize.define('Comentario', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  comentario: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
}, {
  
});
Comentario.belongsTo(Drama,{foreignKey:'dramaId'})
Drama.hasMany(Comentario,{foreignKey:'dramaId'})
module.exports = Comentario;