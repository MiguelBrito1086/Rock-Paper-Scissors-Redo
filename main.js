const express = require('express')
const mustacheExpress = require('mustache-express')

const app = express()

app.engine('mst', mustacheExpress())
app.set('view engine', 'mst')
app.set('views', './views')

app.use(express.static('public'))

app.get('/', (req, resp) => {
  resp.render('index')
})

app.post('/' (req, resp) => {
  const pick = 
})
















app.listen(3000, () => {
  console.log("Magic is happening on port 3000")
});
