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

async function execute(){
    try{
        await client.connect()
        await client.query("BEGIN")
        await client.query("insert into visita_restaurante values ('Ves','dsad','2020-01-01',10.5)")
        console.log("Inserted a new row")
        await client.query("COMMIT")
    }
    catch (ex){
        console.log("failed")

    }
    finally{
        await client.end()
        console.log("Cleaned")
    }

}
   
