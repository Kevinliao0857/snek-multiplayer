#!/usr/bin/env node
const net = require('net');
process.stdout.write('\x07');

const { Game } = require('./src/Game')
const { UserInterface } = require('./src/UserInterface')
const { RemoteInterface } = require('./src/RemoteInterface')
const game = new Game(new UserInterface(), new RemoteInterface())


const connect = function() {
  const conn = net.createConnection({
    host: '<localhost>',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
}

// console.log('Connecting ...');
// connect();

console.log('you ded cuz you idled');
connect();


game.start()
