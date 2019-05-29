'strict'
function Phone(brand, price, color, CountryOrigin){
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.CountryOrigin = CountryOrigin
}
Phone.prototype.printInfo = function(){
    console.log("The phone brand is " + this.brand + ", color is " + this.color + ", and the price is " + this.price + " PLN. Country of origin is " + this.CountryOrigin);
}
Phone.prototype.InfoShow = function(){
    document.write("The phone brand is " + this.brand + ", color is " + this.color + ", and the price is " + this.price + " PLN. Country of origin is " + this.CountryOrigin +"<br><br>");
}

var iPhone6S = new Phone("Apple", 2250, "silver", "USA");
var GalaxyS6 = new Phone("Samsung", 1800, "black", "South Korea");
var One = new Phone("OnePlus", 1200, "grey", "China");

iPhone6S.printInfo();
GalaxyS6.printInfo();
One.printInfo();

iPhone6S.InfoShow();
GalaxyS6.InfoShow();
One.InfoShow();