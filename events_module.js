const dotenv = require('dotenv');
dotenv.config();
const EventEmitter = require('events');
const emitter = new EventEmitter();

const callbackForDelete = (data, second, third) => {
  console.log(`Your message: ` + data);
  console.log(`Second argument: ` + second);
  console.log(`Third argument: ` + third);
}

emitter.on('message', (data, second, third) => {
  console.log(`Your message: ` + data);
  console.log(`Second argument: ` + second);
  console.log(`Third argument: ` + third);
})

emitter.once('messanger', callbackForDelete)

const message = process.env.MESSAGE;

if (message) {
  emitter.emit('message', message, 'I\'m second', 'I\'m third')
} else {
  emitter.emit('message', 'You didn\'t send anything', 'I\'m second', 'I\'m third')
}

console.log('\n\n');

emitter.emit('messanger', message, 'I\'m from messanger - 1', 'I\'m from messanger - 1')
emitter.emit('messanger', message, 'I\'m from messanger - 2', 'I\'m from messanger - 2')


emitter.removeListener('messanger', callbackForDelete)
console.log(emitter.getMaxListeners())
emitter.removeAllListeners()

