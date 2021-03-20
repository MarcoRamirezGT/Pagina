//Conectarse a la base de datos
const {Client} = require('pg')
const client = new Client({
    //Nombre de usuario
    user:"postgres",
    //Contraseña de la base de datos
    password:"marco123",
    //el host, en este caso local
    host:"localhost",
    //puerto de la base de datos
    port:5432,
    //nombre de la base de datos
    database:"lab01"
})
//establecer coneccion
client.connect()
.then(() => console.log("Connect success"))
.then(() => client.query("select * from visita_restaurante"))
.then(results => console.table(results.rows))
.catch(e => console.log(e))
.finally(()=> client.end())
//para correr usar npm test, o dependiendo de tu configuracion de node.js o solo debugear y ver en debug console

