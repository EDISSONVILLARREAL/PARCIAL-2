const router = require('express').Router();

const controller = require('../controllers/curso.controller');

router.get('/',controller.getAll);
router.get('/:id',);

module.exports = router;