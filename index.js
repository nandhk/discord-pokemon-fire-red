const fs = require('fs');
const GameBoyAdvance = require('gbajs');
const Discord = require('discord.js');
const client = new Discord.Client();
const gba = new GameBoyAdvance();
var filePath = './gba1.png';
var biosBuf = fs.readFileSync('./node_modules/gbajs/resources/bios.bin');
gba.setBios(biosBuf);
gba.setCanvasMemory();



gba.logLevel = gba.LOG_ERROR;

gba.loadRomFromFile('./path/to/game.gba', function(err, result) {
  if (err) {
    console.error('loadRom failed:', err);
    process.exit(1);
  }
  gba.runStable();
});

const Game = gba.screenshot();
const keypad = gba.keypad;

client.on('ready', ready => {
  console.log('ready')
})


var idx = 1;


client.on('message', message => {
  if (!message.content.startsWith('$a')) return;
  if (message.content.startsWith('$a'))
    keypad.press(keypad.A);
     gba.screenshot().pack().pipe(fs.createWriteStream('gba' + idx + '.png'))
       message.channel.send({files: ['./gba1.png']})
});

client.on('message', message => {
  if (!message.content.startsWith('$b')) return;
  if (message.content.startsWith('$b'))
    keypad.press(keypad.B);
     gba.screenshot().pack().pipe(fs.createWriteStream('gba' + idx + '.png'))
       message.channel.send({files: ['./gba1.png']})
});

client.on('message', message => {
  if (!message.content.startsWith('$up')) return;
  if (message.content.startsWith('$up'))
    keypad.press(keypad.UP);
     gba.screenshot().pack().pipe(fs.createWriteStream('gba' + idx + '.png'))
      message.channel.send({files: ['./gba1.png']})
})

client.on('message', message => {
  if (!message.content.startsWith('$down')) return;
  if (message.content.startsWith('$down'))
    keypad.press(keypad.DOWN);
     gba.screenshot().pack().pipe(fs.createWriteStream('gba' + idx + '.png'))
      message.channel.send({files: ['./gba1.png']})
})

client.on('message', message => {
  if (!message.content.startsWith('$left')) return;
  if (message.content.startsWith('$left'))
    keypad.press(keypad.LEFT);
     gba.screenshot().pack().pipe(fs.createWriteStream('gba' + idx + '.png'))
      message.channel.send({files: ['./gba1.png']})
})

client.on('message', message => {
  if (!message.content.startsWith('$right')) return;
  if (message.content.startsWith('$right'))
    keypad.press(keypad.RIGHT);
     console.log('Right')
     console.log('just to stop bugs')
      gba.screenshot().pack().pipe(fs.createWriteStream('gba' + idx + '.png'))
         message.channel.send({files: ['./gba1.png']})
})

client.on('message', message => {
  if (!message.content.startsWith('$select')) return;
  if (message.content.startsWith('$select'))
    keypad.press(keypad.SELECT);
     console.log('Right')
     console.log('just to stop bugs')
      gba.screenshot().pack().pipe(fs.createWriteStream('gba' + idx + '.png'))
         message.channel.send({files: ['./gba1.png']})
})
client.on('message', message => {
  if (!message.content.startsWith('$start')) return;
  if (message.content.startsWith('$start'))
    keypad.press(keypad.START);
     console.log('Right')
     console.log('just to stop bugs')
      gba.screenshot().pack().pipe(fs.createWriteStream('gba' + idx + '.png'))
         message.channel.send({files: ['./gba1.png']})
})
client.on('message', message => {
  if (!message.content.startsWith('$R')) return;
  if (message.content.startsWith('$R'))
    keypad.press(keypad.R);
     console.log('Right')
     console.log('just to stop bugs')
      gba.screenshot().pack().pipe(fs.createWriteStream('gba' + idx + '.png'))
         message.channel.send({files: ['./gba1.png']})
})
client.on('message', message => {
  if (!message.content.startsWith('$L')) return;
  if (message.content.startsWith('$L'))
    keypad.press(keypad.L);
     console.log('Right')
     console.log('just to stop bugs')
      gba.screenshot().pack().pipe(fs.createWriteStream('gba' + idx + '.png'))
         message.channel.send({files: ['./gba1.png']})
})
client.login('TOKEN')
