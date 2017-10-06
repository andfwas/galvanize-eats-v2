var menuItems = 'https://galvanize-eats-api.herokuapp.com/menu'
var orders = 'https://galvanize-eats-api.herokuapp.com/orders'
var menu = document.getElementById('menu')
var foods = {}
var burgers = document.getElementById('burgers')
var pizza = document.getElementById('pizza')
var items = document.getElementsByClassName('item')
var list = []
var addItem = document.getElementsByClassName('addItem')
var subtotal = document.getElementById('subtotal')
var tax = document.getElementById('tax')
var total = document.getElementById('total')
var addToList = document.getElementById('addToList')
var basket = document.getElementsByClassName('basket')
var itemList = document.getElementById('addToList')
var quantity = document.getElementById('quantity')
var quantities = document.getElementsByClassName('quantity')


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
    var j = x[i]
    makeItem(j)
  }
}

function makeItem(x) {
  var item = document.createElement('div')
  if (items.length == 0) {
    item.setAttribute('class', 'item active')
  } else {
    item.setAttribute('class', 'item inactive')
  }
  var name = document.createElement('div')
  var price = document.createElement('div')
  item.appendChild(name)
  if (x.type == 'burger') {
    burgers.appendChild(item)
  } else {
    pizza.appendChild(item)
  }
  item.appendChild(name)
  item.appendChild(price)
  name.innerHTML = x.name
  price.innerHTML = x.price
  selectItem(item)
}

function selectItem(x) {
  x.addEventListener('click', function() {
    if (items) {
      for (var i = 0; i < items.length; i++) {
        items[i].setAttribute('class', 'item inactive')
      }
    }
    x.setAttribute('class', 'item active')
  })
}

function populateOrder() {
  addItem[0].addEventListener('click', function() {
    for (var i = 0; i < items.length; i++) {
      for (var j = 0; j < quantity.value; j++) {

        var basketItem = document.createElement('div')
        basketItem.setAttribute('class', 'basket')
        var basketItemName = document.createElement('div')
        var basketItemPrice = document.createElement('div')
        if (items[i].className == 'item active') {
          var name = items[i].childNodes[0].innerText
          var price = items[i].childNodes[1].innerText
          var ordered = document.getElementById('addToList')
          basketItemName.innerText = name
          basketItemPrice.innerText = price
          basketItem.append(basketItemName)
          basketItem.append(basketItemPrice)
          itemList.append(basketItem)
          totals(price)
        }
      }
    }
  })
}




function totals(x) {
  var sub = 0
  var taxy = 0
  var tots = 0
  for (var i =  0; i < basket.length; i++) {
    var add = basket[i].childNodes[1].innerText
    sub += Number(add)
    sub = Math.round((sub * 100)) / 100
    taxy = Number(sub * 0.082)
    taxy = Math.round(taxy * 100) / 100
    tots = Math.round((sub + taxy) * 100) / 100
    subtotal.children[1].innerText = sub
    tax.children[1].innerText = taxy
    total.children[1].innerText = tots
  }
}

populateOrder()
