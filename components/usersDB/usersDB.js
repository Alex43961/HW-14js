import { Customer, Manager } from "../users/users";

export class UsersDB {
	users;
	constructor() {
		this.users = [
			new Manager("John"),
			new Customer("Bob", 0, 499),
		]
	}
}
console.log(Manager("John"));