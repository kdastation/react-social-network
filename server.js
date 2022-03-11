const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('/db.json')
const middlewares = jsonServer.defaults({ noCors: true })

server.use(middlewares, router)
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3001')
    res.header('Access-Control-Allow-Headers', '*')
    next()
  })

server.listen(3001, () => {
  console.log('Mock api server listening at localhost:3001')
})
