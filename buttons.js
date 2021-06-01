const {MessageButton} = require('discord-buttons')
let Abutton = new MessageButton()
    .setStyle('red')
    .setLabel('A')
    .setID('secret_gba_a_id');
let Bbutton = new MessageButton()
    .setStyle('green')
    .setLabel('B')
    .setID('secret_gba_b_id');
let Up = new MessageButton()
    .setStyle('gray')
    .setLabel('Up')
    .setID('secret_gba_up_id');
let Down = new MessageButton()
    .setStyle('gray')
    .setLabel('Down')
    .setID('secret_gba_down_id');
let Right = new MessageButton()
    .setStyle('gray')
    .setLabel('Right')
    .setID('secret_gba_right_id');
let Left = new MessageButton()
    .setStyle('gray')
    .setLabel('Left')
    .setID('secret_gba_left_id');
let Select = new MessageButton()
    .setStyle('blurple')
    .setLabel('Select')
    .setID('secret_gba_select_id');
let Start = new MessageButton()
    .setStyle('blurple')
    .setLabel('Start')
    .setID('secret_gba_start_id');
let L = new MessageButton()
    .setStyle('gray')
    .setLabel('L')
    .setID('secret_gba_l_id')
let R = new MessageButton()
    .setStyle('gray')
    .setLabel('R')
    .setID('secret_gba_r_id');
module.exports = [Abutton,Bbutton,R,L,Start,Select,Left,Right,Up,Down]
