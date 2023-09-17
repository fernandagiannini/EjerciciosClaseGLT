import express from 'express'
import dotenv from 'dotenv'
import { bookRoutes } from './routes/bookRouter.js' 
import { BOOKS } from './data.js'
dotenv.config()

// no me toma la palabra "process" de la linea siguiente (not defined)
//const SERVER_PORT = process.env.PORT || 3000
// usaré provisoriamente lo siguiente:
const SERVER_PORT = 3000

const app = express()                   //aca estoy indicando que uso express
app.use (express.json())

app.use('/api', bookRoutes(BOOKS))   //indico que usare la funcion bookRoutes(BOOKS) definida en Routes

app.listen(SERVER_PORT, () => {         //esto va siempre al final
    console.log('Servidor escuchando en http://localhost:3000')
})