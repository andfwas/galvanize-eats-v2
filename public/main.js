var menuItems = 'https://galvanize-eats-api.herokuapp.com/menu'
var orders = 'https://galvanize-eats-api.herokuapp.com/orders'
var menu = document.getElementById('menu')
var foods = {}
var burgers = document.getElementById('burgers')
var pizza = document.getElementById('pizza')
var items = document.getElementsByClassName('item')
var select
var myList = document.getElementById('orders')
var list = []


fetch(menuItems)
.then(function(result) {
  return result.json()
})
.then(function(food) {
  foods = food.menu
  makeMenu(foods)
})

function makeMenu(x) {
  for (var i = 0; i < x.length; i++) {
    var item = document.createElement('div')
    var name = document.createElement('div')
    var price = document.createElement('div')
    if (x[i].type == 'burger') {
      item.setAttribute('class', 'item inactive')
      burgers.appendChild(item)
      name.innerHTML = x[i].name
      price.innerHTML = x[i].price
      item.appendChild(name)
      item.appendChild(price)
      item.addEventListener('click', function() {
        //START HERE
        console.log(this)
        list.push(this.innerHTML)
        console.log(list);
        myList.innerHTML = list

        for (var y = 0; y < items.length; y++) {
          items[y].setAttribute('class', 'item inactive')
        }
        this.setAttribute('class', 'item active')
      })
    } else {
      item.setAttribute('class', 'item inactive')
      pizza.appendChild(item)
      name.innerHTML = x[i].name
      price.innerHTML = x[i].price
      item.appendChild(name)
      item.appendChild(price)
      item.addEventListener('click', function() {
        //START HERE
        console.log(this)
        list.push(this.innerHTML)
        console.log(list);
        myList.innerHTML = list

        for (var y = 0; y < items.length; y++) {
          items[y].setAttribute('class', 'item inactive')
        }
        this.setAttribute('class', 'item active')
      })
    }
  }
}

function makeList(arr) {

}

makeList(list)
