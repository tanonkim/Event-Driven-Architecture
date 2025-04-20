import { EventEmitter } from 'events';

const emitter = new EventEmitter();

// addListener
emitter.addListener('event1', () => {
  console.log('text');
});

emitter.emit('event1');

// on, once
emitter.on('eventOn', () => {
  console.log('callback of eventOn');
});
emitter.once('eventOnce', () => {
  console.log('callback of eventOnce');
});

emitter.emit('eventOn');
emitter.emit('eventOnce');

// remove
emitter.removeAllListeners('eventOn');
emitter.emit('eventOn');

//// 리스터 카운팅 함수
const listener1 = () => console.log('listener1');
const listener2 = () => console.log('listener2');

const showLs = (e: string) => {
  console.log(emitter.listenerCount(e));
};

emitter.on('eventOn1', listener1);
showLs('eventOn1');
emitter.emit('eventOn1'); // 1

emitter.on('eventOn1', listener2);
showLs('eventOn1');
emitter.emit('eventOn1'); // 2

emitter.removeListener('eventOn1', listener1);
emitter.off('eventOn1', listener2);
emitter.emit('eventOn1'); // X
