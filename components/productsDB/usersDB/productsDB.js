import { Alcohol, Bread, Cigarettes, Meet } from "../../products/products";


export class ProductsDB {
	products;
	constructor() {
		this.products = [
			new Alcohol("Vodka", 29, 30),
			new Meet("Beef", 10, 40),
			new Cigarettes("Marlboro", 8, 70),
			new Bread("Croassan", 3, 20),
		]
	}
}