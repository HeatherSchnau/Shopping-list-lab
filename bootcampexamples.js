var groceries = [
 {
  name: "banana",
  price: 4
},
{
  name: "pear",
  price: 1
},
{
  name: "grapes",
  price: 2
}];

var sum = 0;
grocery.forEach(function(element){
	console.log(element.name + ': ' + element.price);
  sum = sum + element.price;
});
console.log('total: ' + sum);
