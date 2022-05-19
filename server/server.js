const http = require('node:http')
// import { createServer } from 'node:http'

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title></title>
</head>
<body>
  <h1>
    hello,BinJhaha
  </h1>
</body>
</html>`
// const html = 'hello,BinJ haha'

const server = http.createServer((req,res)=> {
  console.log(req);
  res.end(html)
})

server.listen(3000, ()=>{
  console.log('Listening 3000');
})