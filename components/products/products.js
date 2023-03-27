export class Products{
	constructor(label, price, amount){
		this.label = label;
		this.price = price;
		this.amount = amount;
	}

}
export class Bread extends Products{
	constructor(label, price, amount){
		super(label, price, amount);
	}
}
export class Meet extends Products {
	constructor(label, price, amount){
		super(label, price, amount);
	}
}
export class Cigarettes extends Products {
	constructor(label, price, amount){
		super(label, price, amount);
	}
}
export class Alcohol extends Products {
	constructor(label, price, amount){
		super(label, price, amount);
	}
}