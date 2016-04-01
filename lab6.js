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
groceries.forEach(function(items){
// 	/*console.log(element.name + ': ' + element.price);*/
//   sum = sum + element.price;
// });
// // console.log('total: ' + sum);
//


var newElement = document.createElement('li');
newElement.innerHTML = items.name + ":" + items.price;
document.getElementById("list").appendChild(newElement);
});
