const express = require('express');
const router = express.Router();
const trabajadorController = require('../controllers/trabajadorController');

router.get('/', trabajadorController.obtenerTrabajadores);

module.exports = router;
