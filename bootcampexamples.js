var banana = {
  name: "banana",
  price: 4
}

var pear = {
  name: "pear",
  price: 1
}

var grapes = {
  name: "grapes",
  price: 2
}

var grocery = [banana, pear, grapes];
var sum = 0;
grocery.forEach(function(element){
	console.log(element.name + ': ' + element.price);
  sum = sum + element.price;
});
console.log('total: ' + sum);
