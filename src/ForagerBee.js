var ForagerBee = function() {
	Bee.call(this);
	this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Bee.prototype)
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.age = 10;
ForagerBee.prototype.color = 'yellow';
ForagerBee.prototype.job = 'find pollen';
// ForagerBee.prototype.honeyPot = 0;
ForagerBee.prototype.canFly = true;
// ForagerBee.prototype.treasureChest = [];
ForagerBee.prototype.forage = function(value) {
	this.treasureChest.push(value);
}
