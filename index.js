const fs = require('fs');//import all modules required, if you get an error run npm i <missing module> in the shell
const GameBoyAdvance = require('gbajs');//the module that helped to make this bot
const Discord = require('discord.js');
const client = new Discord.Client();
const gba = new GameBoyAdvance();
var filePath = './gba1.png';
var biosBuf = fs.readFileSync('./node_modules/gbajs/resources/bios.bin');
gba.setBios(biosBuf);
gba.setCanvasMemory();
const disbut = require('discord-buttons')(client);
const [Abutton,Bbutton,R,L,Start,Select,Left,Right,Up,Down] = require('./buttons.js')
const config = require('./config.json')
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
let admin = [config.devID, config.devID2];
client.on('message',message => {
  if (!admin.includes(message.author.id)) return;
  if(message.author.bot) return;
  if(!message.content.startsWith('$gba')) return;
  if(message.content.startsWith('$gba'))
   message.channel.send(`The GBA Developed By **${config.devName}** <a:Black_Fire:819183722573987840>\nControls - 🎮`,{buttons:[Abutton,Bbutton,Start,Select]})
});
client.on('message',message => {
  if (!admin.includes(message.author.id)) return;
  if(message.author.bot) return;
  if(!message.content.startsWith('$gba')) return;
  if(message.content.startsWith('$gba'))
   message.channel.send('`Keys`',{buttons:[Up,Down,Left,Right]})
});
client.on('message',message => {
  if (!admin.includes(message.author.id)) return;
  if(message.author.bot) return;
  if(!message.content.startsWith('$gba')) return;
  if(message.content.startsWith('$gba'))
   message.channel.send('`HELP`',{buttons:[L,R]})
});

var idx = 1;

client.on('clickButton', async (button) => {
  if (button.id === 'secret_gba_a_id') {
     keypad.press(keypad.A)
        await gba.screenshot().pack().pipe(fs.createWriteStream('gba' + idx + '.png'))
         await button.channel.send({files: ['./gba1.png']}).then(msg =>{setTimeout(() => msg.delete(), 800)})
  }
});

client.on('clickButton', async (button) => {
  if (button.id === 'secret_gba_b_id') {
     keypad.press(keypad.B)
        await gba.screenshot().pack().pipe(fs.createWriteStream('gba' + idx + '.png'))
         await button.channel.send({files: ['./gba1.png']}).then(msg =>{setTimeout(() => msg.delete(), 800)})
  }
});

client.on('clickButton', async (button) => {
  if (button.id === 'secret_gba_up_id') {
     keypad.press(keypad.UP)
        await gba.screenshot().pack().pipe(fs.createWriteStream('gba' + idx + '.png'))
         await button.channel.send({files: ['./gba1.png']}).then(msg =>{setTimeout(() => msg.delete(), 800)})
  }
});
client.on('clickButton', async (button) => {
  if (button.id === 'secret_gba_down_id') {
     keypad.press(keypad.DOWN)
        await gba.screenshot().pack().pipe(fs.createWriteStream('gba' + idx + '.png'))
         await button.channel.send({files: ['./gba1.png']}).then(msg =>{setTimeout(() => msg.delete(), 800)})
  }
});
client.on('clickButton', async (button) => {
  if (button.id === 'secret_gba_left_id') {
     keypad.press(keypad.LEFT)
        await gba.screenshot().pack().pipe(fs.createWriteStream('gba' + idx + '.png'))
         await button.channel.send({files: ['./gba1.png']}).then(msg =>{setTimeout(() => msg.delete(), 800)})
  }
});
client.on('clickButton', async (button) => {
  if (button.id === 'secret_gba_right_id') {
     keypad.press(keypad.RIGHT)
        await gba.screenshot().pack().pipe(fs.createWriteStream('gba' + idx + '.png'))
         await button.channel.send({files: ['./gba1.png']}).then(msg =>{setTimeout(() => msg.delete(), 800)})
  }
});
client.on('clickButton', async (button) => {
  if (button.id === 'secret_gba_select_id') {
     keypad.press(keypad.SELECT)
        await gba.screenshot().pack().pipe(fs.createWriteStream('gba' + idx + '.png'))
         await button.channel.send({files: ['./gba1.png']}).then(msg =>{setTimeout(() => msg.delete(), 800)})
  }
});
client.on('clickButton', async (button) => {
  if (button.id === 'secret_gba_start_id') {
     keypad.press(keypad.START)
        await gba.screenshot().pack().pipe(fs.createWriteStream('gba' + idx + '.png')) 
         await button.channel.send({files: ['./gba1.png']}).then(msg =>{setTimeout(() => msg.delete(), 800)})
  }
});
client.on('clickButton', async (button) => {
  if (button.id === 'secret_gba_l_id') {
     keypad.press(keypad.L)
        await gba.screenshot().pack().pipe(fs.createWriteStream('gba' + idx + '.png'))
         await button.channel.send({files: ['./gba1.png']}).then(msg =>{setTimeout(() => msg.delete(), 800)})
  }
});
client.on('clickButton', async (button) => {
  if (button.id === 'secret_gba_r_id') {
     keypad.press(keypad.R)
        await gba.screenshot().pack().pipe(fs.createWriteStream('gba' + idx + '.png'))
         await button.channel.send({files: ['./gba1.png']}).then(msg =>{setTimeout(() => msg.delete(), 800)})
  }
});

client.login(config.Token)
