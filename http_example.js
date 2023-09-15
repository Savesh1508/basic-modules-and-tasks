const http = require('http');

const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3030


const server = http.createServer((req, res) => {
///////////////////////////////////// SERVER SITE RENDERING
// res.writeHead(200, {
//   'Content-type': 'text/html; charset=utf-8'
// })
// res.end('<h1>Server works!</h1>')
/////////////////////////////////////////////////// EXAMPLE
  res.writeHead(200, {
    'Content-Type': 'application/json'
  })

  // res.end(req.url)
  if (req.url === "/users") {
    return res.end(JSON.stringify([
      {
        id: 1,
        name: 'Savlatxon',
        age: 19
      },
      {
        id: 2,
        name: 'Someone',
          age: 25
      }
    ]))
  }

  if (req.url === "/posts") {
    return res.end(JSON.stringify([
      {
        id: 1,
        title: 'SomeTitle',
        text: 'Some long long long text'
      },
      {
        id: 2,
        title: 'SomeTitle 2',
        text: 'Some long long and a little bit longer text'
      }
    ]))
  }

  res.end(req.url)
})


server.listen(PORT, 'localhost', () => {
  console.log(`Server works on ${PORT} - port`);
})

