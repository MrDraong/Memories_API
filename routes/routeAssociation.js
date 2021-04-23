const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

//const questionCtrl = require('../controllers/question.js');

//ajouter auth après les entrypoints pour utiliser l'authentification
router.get('/', (req, res) =>{
    res.send("Route de base");
});

router.get('/all', (req, res) =>{
    res.send("Route all");
});

router.get('/autre', (req, res) =>{
    res.send("Une autre route");
});

/**
 * router.post('/truc', auth, (req, res) =>{
 * res.send("");
 * });
 */

module.exports = router;