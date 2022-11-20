const mongo = require('mongoose');
const URI = 'mongodb://u7l6ribndfngpobjsgkc:jPpk8GZQHqyfF4nONodi@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/b3otdoktzadqknz?replicaSet=rs0';

mongo.connect(URI).then(db => console.log('Conexión a la base de datos exitosa'))
    .catch(err => console.error(err));


module.exports = mongo;