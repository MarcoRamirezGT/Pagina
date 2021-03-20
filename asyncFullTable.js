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

execute()
//para correrlo npm run async
async function execute(){
    await client.connect()
    console.log("Connected successfully")
    const results = await client.query("select * from visita_restaurante")
    console.table(results.rows)
    await client.end()
    console.log("Client disconnected successfully")
    
}
