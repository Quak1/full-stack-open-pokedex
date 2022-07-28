const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', (_, res) => {
  res.send('ok')
})

app.get('/version', (_, res) => {
  res.send('test 1') // change this string to ensure a new version deployed
})

app.get('/hello', (_, res) => {
  res.send('Hello, World!')
})

app.listen(PORT, () => {
  console.log('server started on port 5000')
})
