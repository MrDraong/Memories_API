const express = require('express');
const router = express.Router();

const Associations = require('../controller/controller.js');
const auth = require('../middleware/auth');

const association = new Associations();

router.get('/api/v1/:id_lang/all', association.getAllAssociations);

router.get('/api/v1/:id_lang/rand', association.getRandomAssociations);

router.get('/api/v1/:id_lang/rand/:nb', association.getXRandomAssociations);

router.get('/api/v1/:id_lang/:theme/all', association.getAllAssociationsByTheme);

router.get('/api/v1/:id_lang/:theme/rand', association.getRandomAssociationsByTheme);

router.get('/api/v1/:id_lang/:theme/rand/:nb', association.getXRandomAssociationsByTheme);

/** Middleware d'authentification : ajouter auth après les entrypoints pour utiliser l'authentification
 * router.post('/truc', auth, (req, res) =>{
 * res.send("");
 * });
 */

module.exports = router;
