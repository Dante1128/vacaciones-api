const express = require('express');
const router = express.Router();
const solicitudController = require('../controllers/solicitudController');

router.post('/', solicitudController.crearSolicitud);
router.patch('/:id/decision', solicitudController.decisionSolicitud);
router.get('/', solicitudController.listarSolicitudes);

module.exports = router;
