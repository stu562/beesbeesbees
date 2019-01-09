var Grub = function() {
	this.age = 0;
	this.color = 'pink';
	this.food = 'jelly';
	// this.eat;
	// = function() {
	// 	console.log('nom nom');
	// }
	// grubMethods;

};
// the this keyword is associated with the 'new' keyword 
// var grub = new Grub();
// var grubMethods = Object.create(Grub.prototype)

// Grub.prototype.age = 0;
// Grub.prototype.color = 'pink';
// Grub.prototype.food = 'jelly';
Grub.prototype.eat = function() {
		console.log('nom nom');
	}

	//var grub = nuew Grub();
	// var grub = {
	// 	age: 0,
	// 	color: 'pink',
	// 	food: 'jelly',
	// }