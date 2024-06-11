/*Define a base class Shape with a method draw. Create two subclasses Circle and Rectangle that override
the draw method. Demonstrate polymorphism using instances of these classes. */


class Shape {
    draw() {
        console.log('Drawing a shape');
    }
}

class Circle extends Shape {
    draw() {
        console.log('Drawing a circle');
    }
}
class Rectangle extends Shape {
    draw() {
        console.log('Drawing a rectangle');
    }
}

function drawShape(shape) {
    shape.draw();
}

const myCircle = new Circle();
const myRectangle = new Rectangle();

drawShape(myCircle); 
drawShape(myRectangle); 
