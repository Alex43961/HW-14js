// 1) Create class : User
// 2) Extends Manager and Customer from User
// 3) Add action : Manager has product(s) => Create class Product
// => Product has attributes : price , label
// 4) Add to Customer wallet = ...$
// 6) Add to Managers warehouse products
// 7) Customer may buy product -> customer - money (wallet) ->
// Manager - product (which chose Customer)

import {User, Manager, Customer} from "./components/users/users";
import {Products, Alcohol, Bread, Meet, Cigarettes} from "./components/products/products";
import {ProductsDB} from "./components/productsDB/usersDB/productsDB";
