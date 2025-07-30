const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const VacacionesDisponibles = sequelize.define('VacacionesDisponibles', {
  anio: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  dias_disponibles: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  dias_utilizados: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  trabajador_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'trabajadores',
      key: 'id'
    }
  }
}, {
  tableName: 'vacaciones_disponibles',
  timestamps: true,
});

module.exports = VacacionesDisponibles;