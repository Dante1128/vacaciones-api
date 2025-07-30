const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('SolicitudVacacion', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    trabajador_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fecha_inicio: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    fecha_fin: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    cantidad_dias: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    cantidad_horas: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    tipo_solicitud: {
      type: DataTypes.ENUM('día', 'hora'),
      allowNull: false,
    },
    estado: {
      type: DataTypes.ENUM('pendiente', 'aprobada', 'rechazada'),
      allowNull: false,
      defaultValue: 'pendiente',
    },
    fecha_solicitud: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    observaciones: {
      type: DataTypes.TEXT,
    },
    aprobado_por: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    fecha_decision: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  }, {
    tableName: 'solicitudes_vacacion',
    timestamps: true,
  });
};
