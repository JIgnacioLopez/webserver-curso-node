const express = require('express')
const hbs = require('hbs')
require('dotenv').config();


const app = express()

// el servicio de hosting establecera automaticamente el puerto como variable de entorno
const PORT = process.env.PORT;

// Implementacion de Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(`${__dirname}/views/partials`, e => {
    console.log(e);
})


// Servir contenido estatico
// (midleware)
app.use( express.static('public') )

app.get('/', (req,res) => {
    res.render('home', {
        nombre: 'Juan Lopez',
        titulo: 'Curso Node.js'
    })
})

app.get('/generic', (req,res) => {
    res.render('generic', {
        nombre: 'Juan Lopez',
        titulo: 'Curso Node.js'
    })})

app.get('/elements', (req,res) => {    
    res.render('elements', {
        nombre: 'Juan Lopez',
        titulo: 'Curso Node.js'
    })
})


// // usando el midleware esto no se ejecuta
// app.get('/', (req,res)=> {
//     res.send('Main')
// })

// app.get('/hola-mundo',(req,res)=> {
//     // req: consulta html hecha por el cliente
//     // res: respuesta del servidor. Lo que le devuelvo al cliente.
//     res.send('Hola mundo en su ruta')
// })

app.get('*',(req,res)=>{
    res.sendFile(__dirname + '/public/404.html')
})
app.listen( PORT,()=> {
    console.log(`Escuchando puerto:  + localhost:${PORT}`)
} )
