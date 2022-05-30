'use strict';

/*
1.1 (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео -> 3 примеры наследования -> типы на es5 и es6), конструктор Product, который принимает параметры name и price, сохраните их как свойства объекта. Также объекты типа Product должны иметь метод make25PercentDiscount, который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод make25PercentDiscount не должен быть внутри функции-конструктора, и также не нужно создавать отдельный объект-прототип (как объект transport в уроке).
*/

function Product(name, price) {
	this.name = name;
	this.price = price;
}
Product.prototype.make25PercentDiscount = function () {
	console.log(this.name);
	console.log(this.price);
};

let obj1 = new Product(newname);
let obj2 = new Product(price - (price * 0.25));

obj1.make25PercentDiscount();
obj2.make25PercentDiscount();
