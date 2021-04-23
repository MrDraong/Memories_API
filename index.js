const app = require('./app');

require('dotenv').config();

const localport = process.env.LOCAL_HOST_PORT;

app.listen(localport, () => {
    console.log(`Serveur à l'écoute sur le port ${localport}`);
})