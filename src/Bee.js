var Bee = function() {
	// this.age = 5;
	// this.color = 'yellow';
	Grub.call(this);
	this.age = 5;
	this.color = 'yellow';
	this.job = 'keep on growing';
};
//tried 

Bee.prototype = Object.create(Grub.prototype)
Bee.prototype.constructor = Bee;
//because we rewrote the .prototype be sure to add the constructor back,
// otherwise javascript will look up the chain for the .constructor 

// Bee.prototype.age = 5;
// Bee.prototype.color = 'yellow';
// Bee.prototype.job = 'keep on growing';

// Bee.prototype.food.call(this, Grub.prototype.food); //plays a row in placement 

