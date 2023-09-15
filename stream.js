/*
  1. Streams - The size of 1 chunk of stream weighs -> 64kb

  2. There are 4 types of streams on NodeJS
    - Readable -> For reading
    - Writable -> For writing
    - Duplex -> Readable + Writable / For reading and writing
    - Transform -> Same as Duplex but can make changes as you read

  3. Streams work with EventEmitters

*/

const fs = require('fs');
const path = require('path');
const http = require('http');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3030

//////////////////////////////////////////////// WITH OUT STREAM
// fs.readFile(path.resolve(__dirname, 'stream_test.txt'), (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data);
// })

//////////////////////////////////////////////// STREAMS

////////// Readable Stream
const readStream = fs.createReadStream(path.resolve(__dirname, 'stream_test.txt'), {encoding: 'utf-8'})
readStream.on('open', () => console.log('Stream opened!'))
readStream.on('end', () => console.log('The end!'))
readStream.on('error', (err) => console.log(err)) // IMPORTANT
readStream.on('data', (chunk) => {
  // Every chunk weighs -> 65486 bytes
  console.log(chunk);
})

////////// Writable Stream
const writeStream = fs.createWriteStream(path.resolve(__dirname, 'stream_test.txt'))
for (let i = 0; i < 30; i++) {
  writeStream.write(i + '\n');
}
writeStream.end()
// writeStream.close()
// writeStream.destroy()


////////// HTTP
const myServer = http.createServer((req, res) => {
  // req -> READABLE STREAM
  // res -> WRITABLE STREAM
  res.writeHead(200, { 'Content-Type': 'text/plain'})

  const stream = fs.createReadStream(path.resolve(__dirname, 'stream_test.txt'))

  // stream will finish reading before we write -> ERROR
  // stream.on('data', chunk => res.write(chunk))

  stream.pipe(res) // -> GOOD!
  stream.on('end', () => res.end('Done!'))
})

myServer.listen(PORT, 'localhost', () => {
  console.log(`Server works on ${PORT} - port`);
});