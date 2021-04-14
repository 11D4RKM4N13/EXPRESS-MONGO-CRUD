var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/animals', function(err, db) {

    let dataBase = db.db('Books')

    if (err) {
        throw err;
    }

    function obtenerDatos() {
        dataBase.collection('Categories').find()
    }

    console.log(
        obtenerDatos()
    );

    dataBase.collection('Categories').insertOne({
        name: "Religioso",
        description: "Religioso"
    }).then(function (resultado) {
        console.log(resultado);
    })

    dataBase.collection('Categories').updateMany( 
        {name: "Religioso"}, 
        {$set: 
            {name: 'Religion', description: 'Cristianismo'}
    }).then( function(actualizado){
        console.log(actualizado);
    })

    dataBase.collection('Categories').deleteMany({
        name: "Religion"
    }).then(function(eliminado){
        console.log(eliminado);
    })

    db.close()

});