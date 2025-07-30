const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Trabajador', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    codigo_interno: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    cedula_identidad: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    nombre_completo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha_ingreso: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    area_trabajo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cargo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'trabajadores',
    timestamps: true,
  });
};
