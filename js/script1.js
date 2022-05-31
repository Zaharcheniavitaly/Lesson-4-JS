'use strict';

/*
1.1 (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео -> 3 примеры наследования -> типы на es5 и es6), конструктор Product, который принимает параметры name и price, сохраните их как свойства объекта. Также объекты типа Product должны иметь метод make25PercentDiscount, который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод make25PercentDiscount не должен быть внутри функции-конструктора, и также не нужно создавать отдельный объект-прототип (как объект transport в уроке).
*/



//es5

function Product(name, price) {
	this.name = name;
	this.price = price;
}
Product.prototype.make25PercentDiscount = function () {
	this.price = this.price - (this.price * 0.25);

};

let product2 = new Product('prod2', prompt('Введите цену товара'));

product2.make25PercentDiscount();

console.log(product2);


//es6
class Prod {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}
	make25PercentDiscount() {
		this.price = this.price - (this.price * 0.25);
	}
}


let product3 = new Prod('prod3', prompt('Введите цену товара'));

product3.make25PercentDiscount();

console.log(product3);
