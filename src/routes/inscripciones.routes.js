const router = require('express').Router();

const controller = require('../controllers/inscripcion.controller');

router.get('/',controller.getAll);
router.get('/:id',);

module.exports = router;