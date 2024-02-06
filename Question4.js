class UberCalculator{
    constructor(distance){
        this.distance=distance;
        this.price=distance*18;
    }
}
var price = new UberCalculator(10);
console.log(price);