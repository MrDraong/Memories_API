const app = require('./app.js');

require('dotenv').config();

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Serveur à l'écoute sur le port ${port}`);
})