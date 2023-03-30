// 1) Create class : User
// 2) Extends Manager and Customer from User
// 3) Add action : Manager has product(s) => Create class Product
// => Product has attributes : price , label
// 4) Add to Customer wallet = ...$
// 6) Add to Managers warehouse products
// 7) Customer may buy product -> customer - money (wallet) ->
// Manager - product (which chose Customer)

class User {

	constructor(login) {
		this.login = login;
	}

}
class Manager extends User {
	warehouse;
	constructor(login) {
		super(login);
		this.warehouse = [];
	}
	contentWarehouse(arr) {

		this.warehouse = Array.from(arr);
		return this.warehouse;
	}
}

class Customer extends User {
	constructor(login, wallet) {
		super(login)
		this.cart = [];
		this.wallet = wallet;
	}
	buy(price) {
		if (this.wallet >= price) {
			this.wallet -= price;
		} else {
			console.log("No enough money");
		}
	}
}




class Products {
	constructor(label, price) {
		this.label = label;
		this.price = price;
	}

}


class ProductsDB {
	products;
	constructor() {
		this.products = [
			new Products("Beef", 20),
			new Products("ice cream", 5),
			new Products("cola", 7),
			new Products("Mars", 4),
		]
	}
}
const productsList = new ProductsDB();

const manager1 = new Manager("John");
const customer1 = new Customer("Bob", 400);
manager1.contentWarehouse(productsList.products);
console.log("[manager1]", manager1);
console.log("[customer1] ", customer1);


class Run {
	static run() {
		let isRunning = true;

		while (isRunning) {
			const userChoose = prompt("a)Show products q) quit");
			switch (userChoose.toLowerCase()) {
				case "a":
					const updateProducts = manager1.warehouse.map(({ label, price }) => `${label} : ${price}`);
					console.log(updateProducts);
					const buyProduct = prompt("a)Enter product to buy q) quit ");
					for (let i = 0; i < manager1.warehouse.length; i++) {

						if (buyProduct === "q") {
							continue;
						} else if (buyProduct.toLowerCase() === manager1.warehouse[i].label.toLowerCase()) {
							console.log("[wallet BEFORE]", customer1.wallet);
							customer1.cart.push(manager1.warehouse[i].label);
							customer1.buy(manager1.warehouse[i].price);
							manager1.warehouse.splice(manager1.warehouse[i], 1);
							console.log("[warehouse]", manager1.warehouse);
							console.log("[cart]", customer1.cart);
							console.log("[ wallet AFTER]", customer1.wallet);
						}
					}
					break;

				case "q":
					isRunning = false;
					break;
				default:
					alert("Something went wrong. Try again.")
			}
		}
	}
}
Run.run();
