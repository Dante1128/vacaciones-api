const { SolicitudVacacion, Trabajador, Administrador } = require('../models');

async function crearSolicitud(req, res) {
  try {
    const {
      trabajador_id,
      fecha_inicio,
      fecha_fin,
      cantidad_dias = 0,
      cantidad_horas = 0,
      tipo_solicitud,
      observaciones = '',
    } = req.body;

    const trabajador = await Trabajador.findByPk(trabajador_id);
    if (!trabajador) return res.status(404).json({ error: 'Trabajador no encontrado' });

    if (!['día', 'hora'].includes(tipo_solicitud)) {
      return res.status(400).json({ error: 'tipo_solicitud inválido' });
    }

    const nuevaSolicitud = await SolicitudVacacion.create({
      trabajador_id,
      fecha_inicio,
      fecha_fin,
      cantidad_dias,
      cantidad_horas,
      tipo_solicitud,
      estado: 'pendiente',
      fecha_solicitud: new Date(),
      observaciones,
    });

    return res.status(201).json(nuevaSolicitud);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

async function decisionSolicitud(req, res) {
  try {
    const id = req.params.id;
    const { estado, aprobado_por } = req.body;

    if (!['aprobada', 'rechazada'].includes(estado)) {
      return res.status(400).json({ error: 'Estado inválido' });
    }

    const solicitud = await SolicitudVacacion.findByPk(id);
    if (!solicitud) return res.status(404).json({ error: 'Solicitud no encontrada' });

    const admin = await Administrador.findByPk(aprobado_por);
    if (!admin) return res.status(404).json({ error: 'Administrador no encontrado' });

    solicitud.estado = estado;
    solicitud.aprobado_por = aprobado_por;
    solicitud.fecha_decision = new Date();

    await solicitud.save();

    return res.json(solicitud);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

async function listarSolicitudes(req, res) {
  try {
    const solicitudes = await SolicitudVacacion.findAll();
    return res.json(solicitudes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener solicitudes' });
  }
}

module.exports = {
  crearSolicitud,
  decisionSolicitud,
  listarSolicitudes,
};
