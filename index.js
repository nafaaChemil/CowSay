const myInfos = require('./information.js');

var cowsay = require("cowsay");

const textMe = myInfos.name + " " + myInfos.forname + " from " + myInfos.campus;

console.log(cowsay.say({
	text : textMe,
	e : "oO",
	T : "U "
}));

