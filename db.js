const pgp = require('pg-promise')();
const db = pgp('postgres://selenahawamdeh:@localhost:5432/nodejs');


db.connect()
    .then(obj => {
        console.log('Connected to database');
        obj.done();
    })
    .catch(error => {
        console.error('ERROR connecting to database:', error.message || error);
    });

module.exports = db;
