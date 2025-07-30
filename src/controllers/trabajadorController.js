const { Trabajador } = require('../models');

async function obtenerTrabajadores(req, res) {
  try {
    const trabajadores = await Trabajador.findAll();
    res.json(trabajadores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener trabajadores' });
  }
}

module.exports = {
  obtenerTrabajadores,
};
