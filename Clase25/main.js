import express from 'express'

const app = express()
app.set('view engine', 'ejs')
app.set('views', 'public/views')
app.use(express.static('public'))

// en este caso renderizo una pagina de bienvenida
app.get('/home', (_, response) => {
  return response.render('welcome.ejs')
})

// en este caso renderizo una pagina de error ante una ruta inexistente
app.get('/*', (_, response) => {
  return response.render('error404.ejs')
})

app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000')
})
