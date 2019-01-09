var HoneyMakerBee = function() {
	Bee.call(this);
	this.age = 10;
	this.color = 'yellow';
	this.job = 'make honey';
	this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Grub.prototype)
// HoneyMakerBee.constructor = HoneyMakerBee;
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

// HoneyMakerBee.prototype.age = 10;
// HoneyMakerBee.prototype.color = 'yellow';
// HoneyMakerBee.prototype.job = 'make honey';
// HoneyMakerBee.prototype.honeyPot = 0;
HoneyMakerBee.prototype.makeHoney = function() {
	return this.honeyPot ++;
}
HoneyMakerBee.prototype.giveHoney = function() {
	if (this.honeyPot > 0) {
		return this.honeyPot --;
	}
}
