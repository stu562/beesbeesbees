var RetiredForagerBee = function() {
	ForagerBee.call(this);
};
// RetiredForagerBee.prototype = Object.create(Grub.prototype);
RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);

RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.age = 40;
RetiredForagerBee.prototype.color = 'grey';
RetiredForagerBee.prototype.job = 'gamble';
// RetiredForagerBee.prototype.honeyPot = 0;
RetiredForagerBee.prototype.canFly = false;
// RetiredForagerBee.prototype.treasureChest = [];
RetiredForagerBee.prototype.forage = function() {
	return "I am too old, let me play cards instead"
}
// RetiredForagerBee.prototype.gamble = Object.create(ForagerBee.prototype.forage
RetiredForagerBee.prototype.gamble = function() {
// 	this.treasureChest.push('treasure'); 
	this.treasureChest.push('hi');

}