function check(array, searchElement) {
  return array.includes(searchElement);
}
const tier = ["Cat", "Dog", "Sheep"];

document.write(check(tier, "Cat"));
document.write("<br>");
document.write(check(tier, "Laptop"));
document.write("<br>");
document.write(check(tier, "Sheep"));
