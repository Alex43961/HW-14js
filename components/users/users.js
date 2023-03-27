import { ProductsDB } from "../productsDB/usersDB/productsDB";

export class User {

	constructor(login) {
		this.login = login;
	}

}
export class Manager extends User {
	constructor(login, warehouse) {
		super(login);
		this.warehouse = [];
	}
	get contentWarehouse() {

	}
}

export class Customer extends User {
	constructor(login, cart, wallet) {
		super(login)
		this.cart = cart;
		this.wallet = wallet;
	}
}