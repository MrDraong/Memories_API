const db = require('../database.js');

module.exports = class Association {

    async getAllAssociations (req, res, next) {
   
      const queryString = 'SELECT * FROM t_lang l LEFT JOIN t_association a ON l.association = a.id_association WHERE l.lang =' + req.params.id_lang;
   
     try {
       const results = await db.query(queryString);
       if (results == "") {
        res.status(404).json({ message: "No result found" });
       } else {
        res.status(200).json(results);
       }
     } catch(error) {
       next(error)
     }
    };

    async getRandomAssociations (req, res, next) {
      const queryString = 'SELECT * FROM t_lang l LEFT JOIN t_association a ON l.association = a.id_association WHERE l.lang =' + req.params.id_lang + ' ORDER BY RAND()';
     
      try {
        const results = await db.query(queryString);
        if (results == "") {
         res.status(404).json({ message: "No result found" });
        } else {
         res.status(200).json(results);
        }
      } catch(error) {
        next(error)
      }
     };

     async getXRandomAssociations (req, res, next) {
      const queryString = 'SELECT * FROM t_lang l LEFT JOIN t_association a ON l.association = a.id_association WHERE l.lang =' + req.params.id_lang + ' ORDER BY RAND() LIMIT ' + req.params.nb;
     
      try {
        const results = await db.query(queryString);
        if (results == "") {
         res.status(404).json({ message: "No result found" });
        } else {
         res.status(200).json(results);
        }
      } catch(error) {
        next(error)
      }
     };

   }