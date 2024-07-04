const express = require("express")
const cors = require("cors")
const multer = require("multer")
const mysql = require("mysql2")

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Jelias05',
    database: 'easybank',
});

// db.connect((error, exitosa) =>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log(exitosa)
//     }
// })


const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded())


const upload = multer({storage: multer.memoryStorage()});


app.post("/CreateUser", upload.fields([
    {
        name: 'FotoDoc',
        maxCount: 1,
    },
    {
        name: 'FotoUser',
        maxCount: 1,
    }
]), 
    (req, res) =>{
    const nombre = req.body.Nombre;
    const nacimiento = req.body.Nacimiento;
    const genero = req.body.Genero;
    const nacionalidad = req.body.Nacionalidad;
    const correoElectronico = req.body.CorreoElectronico;
    const telefono = req.body.Telefono;
    const residencia = req.body.Residencia;
    const identificacion = req.body.Cedula;
    const correoEasyBank = req.body.CorreoEasyBank;
    const contraseñaEasyBank = req.body.Password;
    const RepetirContraseña = req.body.RepetirPassword;

    const image1 = req.files['FotoDoc'][0];
    const image2= req.files['FotoUser'][0];

    if(contraseñaEasyBank == RepetirContraseña){
        db.query("INSERT INTO usuario (Nombre, Fnacimiento, Genero, Nacionalidad, CorreoElectronico, NumTelefono, Residencia, Identificacion, FotoIdentificacion, FotoUsuario, CorreoEasybank, ContraseñaEasybank) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)", [nombre, nacimiento, genero, nacionalidad, correoElectronico, telefono, residencia, identificacion, image1.buffer, image2.buffer, correoEasyBank, contraseñaEasyBank], (error, result) =>{

            if(error){
                console.log(error)
        
            }else{
                res.status(200).redirect("http://localhost:5173/#Login");
            }
        })
    }
})

app.post("/Login", (req, res) =>{

    const correo = req.body.correo;
    const contraseña = req.body.contraseña
    
    db.query("SELECT * FROM usuario WHERE (CorreoEasybank = ? AND ContraseñaEasybank = ?)", [correo, contraseña], (error, result) =>{
        if(error){
            throw error
            
        }else{
            
            console.log(result)
            if(result.length == 0){
                res.send({data: result, estado: 'Correo y contraseña incorrectos'})
            }else{
                res.send({data: result, estado: 'exitoso'})
            }
        }
    })
})

const PUERTO = 3001;
app.listen(PUERTO, () =>{
    console.log(`EASY BANK SE ESTA ESCUCHANDO EN EL PUERTO ${PUERTO}`)
})