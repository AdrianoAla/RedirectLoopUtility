const express = require('express');
const ngrok = require('ngrok');

const commandLineArgs = require('command-line-args')

const optionDefinitions = [
  { name: 'time', alias: 't', type: Number, defaultValue: 1 },
  { name: 'first', alias: 'o', type: String, defaultValue: '/' },
  { name: 'second ', alias: 's', type: String, defaultValue: '/redirect' },
  { name: 'auth', alias: 'a', type: String, defaultValue: '' },
  { name: 'port', alias: 'p', type: Number, defaultValue: 3000 },
]

const options = commandLineArgs(optionDefinitions)

const app = express();

app.get(options['one'], (req, res) => {
  res.send(`<!DOCTYPE html><html><head><meta http-equiv="refresh" content="${options['time']}; ${options['two']}"/></head><body><h1>Currently on URL 1</h1></body></html>`)
});

app.get(options['two'], (req, res) => {
  res.send(`<!DOCTYPE html><html><head><meta http-equiv="refresh" content="${options['time']}; ${options['one']}"/></head><body><h1>Currently on URL 2</h1></body></html>`)
});

app.listen(options['port'], () => {
  console.log(`Local HTTP Server Started on Port ${options['port']}`);
});

(async function() {
  if (options['token'] != '') {
    console.log('Connecting to NGROK')
    const url = await ngrok.connect({
      addr: options['port'],
      authtoken: options['token']
    });
    console.log('NGROK Connection Successful || %s', url)
  } else {
    console.log("Warning || You failed to specify an NGROK authtoken, your redirect URL will only work on your local network")
  }
})();