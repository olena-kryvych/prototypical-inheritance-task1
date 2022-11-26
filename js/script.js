"use strict"

function Figure(x, y) {
    this.__x = 0;
    this.__y = 0;
    this.x(x);
    this.y(y);
}

Figure.prototype.x = function (x) {
    if(x === undefined) return this.__x;
    if(typeof x === "number") this.__x = x;
}

Figure.prototype.y = function (y) {
    if(y === undefined) return this.__y;
    if(typeof y === "number") this.__y = y;
}

function Rectangle(x, y, diagonal) {
    Figure.call(this, x, y);
    this.__diagonal = diagonal;
}
Rectangle.prototype = Object.create(Figure.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.info = function () {
  console.log("center: " + this.__x + " " + this.__y + "|diagonal: " + this.__diagonal);
};

function Circle(x, y, radius) {
    Figure.call(this, x, y);
    this.__radius = radius;
}
Circle.prototype = Object.create(Figure.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.info = function () {
    console.log("center: " + this.__x + " " + this.__y + "|radius: " + this.__radius);
};

var figure = new Figure(0, 0);
console.log("figure: " + figure.x() + " " + figure.y());

var rectangle = new Rectangle(10, 10, 20);
rectangle.info();

var circle = new Circle(6,6,10);
circle.info();