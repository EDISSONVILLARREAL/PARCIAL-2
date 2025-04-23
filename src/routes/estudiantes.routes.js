const router = require('express').Router();

const controller = require('../controllers/estudiantes.controller');

router.get('/',controller.getAll);
router.get('/:id',);

module.exports = router;