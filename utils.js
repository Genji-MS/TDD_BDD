// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return "Hello"
}

const area = (w, h) => {
  // should return the area]
  return w*h
}

const perimeter = (w, h) => {
  // should return the perimeter
  return w*2+h*2
}

const circleArea = r => {
  // should return the area of the circle
  return Math.PI*Math.pow(r,2)
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const shoppingCart = []

const clearCart = () => {
  shoppingCart.length = 0
}

const createItem = (name, price) => {
  return { name, price, quantity: 1 }
}

const getShoppingCart = () => {
  // should return the current state of shopping cart
  var list = "";
  for (x=0; x<shoppingCart.length; x++){
    list += (shoppingCart[x].name) += ' '
  };
  //console.log(list)
  return list
}

const addItemToCart = (item) => {
  // should add item to shopping cart
  shoppingCart.push(item)
  return
}

const getNumItemsInCart = () => {
  // should return the total quantity of items in cart
  return shoppingCart.length
}

const removeItemFromCart = (item) => {
  //console.log(item)
  // should remove item from shopping cart
  var index = shoppingCart.indexOf(item)
  //console.log(index)
  shoppingCart.splice(index)
}

const totalCost = () => {
  var cost = 0;
  for (x=0; x<shoppingCart.length; x++){
    cost += (shoppingCart[x].price * shoppingCart[x].quantity)
  };
  //console.log(list)
  return cost
}

module.exports = {
  sayHello, area, perimeter, circleArea,
  clearCart, createItem, getShoppingCart, addItemToCart,
  getNumItemsInCart, removeItemFromCart, totalCost
}
