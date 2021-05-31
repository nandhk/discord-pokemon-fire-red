const fs = require('fs');
const GameBoyAdvance = require('gbajs');
const Discord = require('discord.js');
const client = new Discord.Client();
const gba = new GameBoyAdvance();
var filePath = './gba1.png';
var biosBuf = fs.readFileSync('./node_modules/gbajs/resources/bios.bin');
gba.setBios(biosBuf);
gba.setCanvasMemory();
const disbut = require('discord-buttons')(client);


let Abutton = new disbut.MessageButton()
    .setStyle('red')
    .setLabel('A')
    .setID('secret_gba_a_id');
let Bbutton = new disbut.MessageButton()
    .setStyle('green')
    .setLabel('B')
    .setID('secret_gba_b_id');
let Up = new disbut.MessageButton()
    .setStyle('gray')
    .setLabel('Up')
    .setID('secret_gba_up_id');
let Down = new disbut.MessageButton()
    .setStyle('gray')
    .setLabel('Down')
    .setID('secret_gba_down_id');
let Right = new disbut.MessageButton()
    .setStyle('gray')
    .setLabel('Right')
    .setID('secret_gba_right_id');
let Left = new disbut.MessageButton()
    .setStyle('gray')
    .setLabel('Left')
    .setID('secret_gba_left_id');
let Select = new disbut.MessageButton()
    .setStyle('blurple')
    .setLabel('Select')
    .setID('secret_gba_select_id');
let Start = new disbut.MessageButton()
    .setStyle('blurple')
    .setLabel('Start')
    .setID('secret_gba_start_id');
let L = new disbut.MessageButton()
    .setStyle('gray')
    .setLabel('L')
    .setID('secret_gba_l_id')
let R = new disbut.MessageButton()
    .setStyle('gray')
    .setLabel('R')
    .setID('secret_gba_r_id');


gba.logLevel = gba.LOG_ERROR;

gba.loadRomFromFile('./game.gba', function(err, result) {
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
// keys - L , R , SELECT , START ,RIGHT , LEFT , DOWN , UP
client.on('clickButton', async (button) => {
  if (button.id === 'secret_gba_a_id') {
     keypad.press(keypad.A)
        await gba.screenshot().pack().pipe(fs.createWriteStream('gba' + idx + '.png'))
         await button.channel.send({files: ['./gba1.png']}).then(msg =>{setTimeout(() => msg.delete(), 800)})
         button.defer()
  }
});

client.on('clickButton', async (button) => {
  if (button.id === 'secret_gba_b_id') {
     keypad.press(keypad.B)
        await gba.screenshot().pack().pipe(fs.createWriteStream('gba' + idx + '.png'))
         await button.channel.send({files: ['./gba1.png']}).then(msg =>{setTimeout(() => msg.delete(), 800)})
         button.defer()
  }
});

client.on('clickButton', async (button) => {
  if (button.id === 'secret_gba_up_id') {
     keypad.press(keypad.UP)
        await gba.screenshot().pack().pipe(fs.createWriteStream('gba' + idx + '.png'))
         await button.channel.send({files: ['./gba1.png']}).then(msg =>{setTimeout(() => msg.delete(), 800)})
         button.defer()
  }
});
client.on('clickButton', async (button) => {
  if (button.id === 'secret_gba_down_id') {
     keypad.press(keypad.DOWN)
        await gba.screenshot().pack().pipe(fs.createWriteStream('gba' + idx + '.png'))
         await button.channel.send({files: ['./gba1.png']}).then(msg =>{setTimeout(() => msg.delete(), 800)})
         button.defer()
  }
});
client.on('clickButton', async (button) => {
  if (button.id === 'secret_gba_left_id') {
     keypad.press(keypad.LEFT)
        await gba.screenshot().pack().pipe(fs.createWriteStream('gba' + idx + '.png'))
         await button.channel.send({files: ['./gba1.png']}).then(msg =>{setTimeout(() => msg.delete(), 800)})
         button.defer()
  }
});
client.on('clickButton', async (button) => {
  if (button.id === 'secret_gba_right_id') {
     keypad.press(keypad.RIGHT)
        await gba.screenshot().pack().pipe(fs.createWriteStream('gba' + idx + '.png'))
         await button.channel.send({files: ['./gba1.png']}).then(msg =>{setTimeout(() => msg.delete(), 800)})
          button.defer()
  }
});
client.on('clickButton', async (button) => {
  if (button.id === 'secret_gba_select_id') {
     keypad.press(keypad.SELECT)
        await gba.screenshot().pack().pipe(fs.createWriteStream('gba' + idx + '.png'))
         await button.channel.send({files: ['./gba1.png']}).then(msg =>{setTimeout(() => msg.delete(), 800)})
         button.defer()
  }
});
client.on('clickButton', async (button) => {
  if (button.id === 'secret_gba_start_id') {
     keypad.press(keypad.START)
        await gba.screenshot().pack().pipe(fs.createWriteStream('gba' + idx + '.png'))
         await button.channel.send({files: ['./gba1.png']}).then(msg =>{setTimeout(() => msg.delete(), 800)})
         button.defer()
  }
});
client.on('clickButton', async (button) => {
  if (button.id === 'secret_gba_l_id') {
     keypad.press(keypad.L)
        await gba.screenshot().pack().pipe(fs.createWriteStream('gba' + idx + '.png'))
         await button.channel.send({files: ['./gba1.png']}).then(msg =>{setTimeout(() => msg.delete(), 800)})
         button.defer()
  }
});
client.on('clickButton', async (button) => {
  if (button.id === 'secret_gba_r_id') {
     keypad.press(keypad.R)
        await gba.screenshot().pack().pipe(fs.createWriteStream('gba' + idx + '.png'))
         await button.channel.send({files: ['./gba1.png']}).then(msg =>{setTimeout(() => msg.delete(), 800)})
          await button.defer()
  }
});

client.login("Your Bot Token")
