const Trabajador = require('./trabajador');
const SolicitudVacacion = require('./solicitudVacacion');
const VacacionesDisponibles = require('./vacacionesDisponibles');
const Administrador = require('./administrador');

// Relaciones
Trabajador.hasMany(SolicitudVacacion, { 
  foreignKey: 'trabajador_id',
  as: 'solicitudes'
});
SolicitudVacacion.belongsTo(Trabajador, { 
  foreignKey: 'trabajador_id',
  as: 'trabajador'
});

Trabajador.hasMany(VacacionesDisponibles, { 
  foreignKey: 'trabajador_id',
  as: 'vacaciones'
});
VacacionesDisponibles.belongsTo(Trabajador, { 
  foreignKey: 'trabajador_id',
  as: 'trabajador'
});

Administrador.hasMany(SolicitudVacacion, { 
  foreignKey: 'aprobado_por',
  as: 'decisiones'
});
SolicitudVacacion.belongsTo(Administrador, { 
  foreignKey: 'aprobado_por',
  as: 'administrador'
});

module.exports = {
  Trabajador,
  SolicitudVacacion,
  VacacionesDisponibles,
  Administrador
};