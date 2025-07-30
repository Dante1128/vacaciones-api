const { Sequelize } = require('sequelize');
const path = require('path');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, '../../database.sqlite'),
  logging: false,
});

const Trabajador = require('./trabajador')(sequelize);
const Administrador = require('./administrador')(sequelize);
const SolicitudVacacion = require('./solicitudVacacion')(sequelize);

// Relaciones

Trabajador.hasMany(SolicitudVacacion, {
  foreignKey: 'trabajador_id',
  as: 'solicitudes',
});
SolicitudVacacion.belongsTo(Trabajador, {
  foreignKey: 'trabajador_id',
  as: 'trabajador',
});

Administrador.hasMany(SolicitudVacacion, {
  foreignKey: 'aprobado_por',
  as: 'revisiones',
});
SolicitudVacacion.belongsTo(Administrador, {
  foreignKey: 'aprobado_por',
  as: 'administrador',
});

module.exports = {
  sequelize,
  Trabajador,
  Administrador,
  SolicitudVacacion,
};
