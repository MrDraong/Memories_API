const express = require('express');
const router = express.Router();

const Associations = require('../controller/controller.js');
const auth = require('../middleware/auth');

const association = new Associations();
//const questionCtrl = require('../controllers/question.js');

//ajouter auth après les entrypoints pour utiliser l'authentification
router.get('/:id_lang/all', association.getAllAssociations);

router.get('/:id_lang/rand', association.getRandomAssociations);

router.get('/:id_lang/rand/:nb', association.getXRandomAssociations);

/**
 * router.post('/truc', auth, (req, res) =>{
 * res.send("");
 * });
 */

module.exports = router;