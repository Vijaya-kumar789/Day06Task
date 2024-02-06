class circle {
    constructor(radius,color){
        this.radius = radius;
        this.color = color;
        }
    getRadius(){
        var area = Math.PI*this.radius**2;
        return area;
        }
    getCircumference(){
            var Circumference = 2*Math.PI*this.radius
            return Circumference;
 }
}
    var new_circle =  new circle(30,"green");
    console.log(new_circle);
    console.log(`The area of given circle is ${new_circle.getRadius().toFixed(2)}`);
    console.log(`The Circumference of given circle is ${new_circle.getCircumference().toFixed(2)}`);
    