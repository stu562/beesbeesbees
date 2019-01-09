var ForagerBee = function() {
	Bee.call(this);// call method matters 
	this.age = 10;
	this.job = 'find pollen';
	this.canFly = true;
	this.treasureChest = [];

};

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;

// ForagerBee.prototype.age = 10;
// ForagerBee.prototype.color = 'yellow';
// ForagerBee.prototype.job = 'find pollen';
// ForagerBee.prototype.honeyPot = 0;
// ForagerBee.prototype.canFly = true;
// ForagerBee.prototype.treasureChest = [];
ForagerBee.prototype.forage = function(value) {
	this.treasureChest.push(value);
}


//***********************************in class lecture: ***************************************
// var WarriorBee = function(weapon) {
// 	Bee.call(this);
// 	this.age = 10;
// 	this.kills = 0;
// 	this.weapon = weapon;
// }


// WarriorBee.prototype = Object.create(Bee.prototype);

// 		object.create merely delegates, points at another source 
// WarriorBee.prototype.constructor = WarriorBee;


// WarriorBee.prototype.fight = function() {
// 	this.kills++;
// }

// var warrior = new WarriorBee('sword');
// console.log(warrior);

// var SuperVillianBee = function(weapon) {
// 	WarriorBee.call(this, weapon);//has all prop up the chain , cumalative
// 	//call methods creates the object with the object pointing to WarriorBee


// }
// SuperVillianBee.prototype = Object.create(WarriorBee.prototype);
// SuperVillianBee.prototype.constructor = SuperVillianBee;
// SuperVillianBee.prototype.fight = function(){
// 	WarriorBee.prototype.fight.call(this); //able to refer back up the chain 
// 	this.kills += 2;
// }


// var villain = new SuperVillianBee('deathrays');
// console.log(villain) // 







