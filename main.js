var menuItems = 'https://galvanize-eats-api.herokuapp.com/menu'
var orders = 'https://galvanize-eats-api.herokuapp.com/orders'
var menu = document.getElementById('menu')
var foods = {}
var burgers = document.getElementById('burgers')
var pizza = document.getElementById('pizza')

fetch(menuItems)
.then(function(result) {
  return result.json()
})
.then(function(food) {
  // console.log(food)
  foods = food.menu
  // console.log(foods.length)
  makeMenu(foods)
})

function makeMenu(x) {
  for (var i = 0; i < foods.length; i++) {
    var item = document.createElement('h4')
    if (x[i].type == 'burger') {
      item.setAttribute('id', i)
      item.innerHTML = x[i].name + ' ' + x[i].price
      burgers.appendChild(item)

    } else {
      item.setAttribute('id', i)
      item.innerHTML = x[i].name + ' ' + x[i].price
      pizza.appendChild(item)
    }
  }
}
