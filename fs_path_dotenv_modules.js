const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config()

// console.log('START');

fs.mkdir(path.resolve(__dirname, 'dir1'), (err) => {
  if (err) {
    return err;
  }
  console.log('Folder created!');
})

console.log('END');

////////// Call-back hell
fs.rmdir(path.resolve(__dirname, 'dir1'), (err) => {
  if (err) {
    throw err
  }

  console.log('Folder deleted!');
})

fs.writeFile(path.resolve(__dirname, 'test1.txt'), 'qwerty qwerty', (err) => {
  if (err) {
    throw err
  }

  console.log('Writed new text!');

  fs.appendFile(path.resolve(__dirname, 'test1.txt'), '\nADDED TO THE END!', (err) => {
    if (err) {
      throw err
    }
    console.log('Appended!');
  })
})

/////////////////////////////////////////////////
const writeFileAsync = async (path, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err) => {
      if (err) {
        return reject(err.message)
      }
      resolve()
    })
  })
}

const appendFileAsync = async (path, data) => {
  return new Promise((resolve, reject) => {
    fs.appendFile(path, data, (err) => {
      if (err) {
        return reject(err.message)
      }
      resolve()
    })
  })
}

const readFileAsync = async (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
      if (err) {
        return reject(err.message)
      }
      resolve(data)
    })
  })
}

const removeFileAsync = async (path) => {
  return new Promise((resolve, reject) => {
    fs.rm(path, (err) => {
      if (err) {
        return reject(err.message)
      }
      resolve()
    })
  })
}

writeFileAsync(path.resolve(__dirname, 'text.txt'), 'Hi from promised writeFileAsync')
  .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'), '\nHi from promised appendFileAsync'))
  .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'), '\nHi from promised appendFileAsync'))
  .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'), '\nHi from promised appendFileAsync'))
  .then(() => appendFileAsync(path.resolve(__dirname, 'text.txt'), '\nHi from promised appendFileAsync'))
  .then(() => readFileAsync(path.resolve(__dirname, 'text.txt')))
  .then((data) => console.log(data))
  .then(() => removeFileAsync(path.resolve(__dirname, 'text.txt')))
  .catch((err) => console.log(err))

console.log('\n\n');

const txt = process.env.TEXT

writeFileAsync(path.resolve(__dirname, 'test.txt'), txt)
  .then(() => readFileAsync(path.resolve(__dirname, 'test.txt')))
  .then(data => data.split(' ').length)
  .then(count => writeFileAsync(path.resolve(__dirname, 'count.txt'), `${count}`))
  .then(() => removeFileAsync(path.resolve(__dirname, 'test.txt')))
  .catch((err) => console.log(err))