'use strict';

/*
1.2 (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео -> 3 примеры наследования -> механика наследования),
а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству highlighted значение true.
*/

// es5

function Post(author, text, date) {
	this.author = author;
	this.text = text;
	this.date = date;
}
Post.prototype.edit = function (text) {
	this.text = text;
};

function AttachedPost(author, text, date) {
	Post.call(this, author, text, date);
	this.highlighted = false;
}
AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
	this.highlighted = true;
};

let attachedPost_2 = new AttachedPost('author2', 'text2', 'date2');
console.log(attachedPost_2);
attachedPost_2.makeTextHighlighted();
attachedPost_2.edit('новое значение');
console.log(attachedPost_2);



// es6

class Post3 {
	constructor(author, text, date) {
		this.author = author;
		this.text = text;
		this.date = date;
	}
	edit(text) {
		this.text = text;
	};
}
class AttachedPost3 extends Post3 {
	constructor(author, text, date) {
		super(author, text, date);
		this.highlighted = false;
	}
	makeTextHighlighted() {
		this.highlighted = true;
	}
}



let attachedPost_3 = new AttachedPost('author2', 'text2', 'date2');
console.log(attachedPost_3);
attachedPost_3.makeTextHighlighted();
attachedPost_3.edit('новый текст');
console.log(attachedPost_3);



