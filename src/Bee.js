var Bee = function() {
	// this.age = 5;
	// this.color = 'yellow';
	Grub.call(this);
};
//tried 

Bee.prototype = Object.create(Grub.prototype)
Bee.prototype.constructor = Bee;//why dod we need this? *** ask HiR 

Bee.prototype.age = 5;
Bee.prototype.color = 'yellow';
Bee.prototype.job = 'keep on growing';

// Bee.prototype.food.call(this, Grub.prototype.food); //plays a row in placement 

