const mocha = require("mocha")
const chai = require("chai")
const utils = require("../utils")
const expect = chai.expect

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
  const hello = utils.sayHello()
  expect(hello).to.be.a("string")
  expect(hello).to.equal("Hello")
  expect(hello).with.lengthOf(5)
})

// ========================================================
// Level 1 Challenges
// 1. Write the pending tests check that they are pending, like this:
//    it("should do something that you want done")
// 2. Next, write the test and see that it fails.
// 3. Write the code in the utils.js file to make the test pass.
// 4. Finally see if you would like to refactor your code at all.
// This is called "Red-Green-Refactor"
// ========================================================

it("should return the area", function () {
  const area = utils.area(5,5)
  expect(area).to.be.a("number")
  expect(area).to.equal(25)
})

it("should return the perimeter", function() {
  const perim = utils.perimeter(5,5)
  expect(perim).to.be.a("number")
  expect(perim).to.equal(20)
})

it("should return the area given r", function() {
  const r2 = utils.circleArea(5)
  expect(r2).to.be.a("number")
  expect(r2).to.equal(78.539816339744831)
})

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

beforeEach((done) => {
  utils.clearCart()
  done()
})

it("Should create a new (object) Item with name and price", function() {
  const item = utils.createItem("apple", 0.99)
  expect(item).to.be.a("object")
  expect(item).to.have.property("name", "apple")
  expect(item).to.have.property("price", 0.99)
  expect(item).to.have.property("quantity", 1)
})

it("Should return an array containing all items in cart", function() {
  const cart_len = utils.getNumItemsInCart()
  expect(cart_len).to.equal(0)
  const item = utils.createItem("apple", 0.99)
  const n_item = utils.addItemToCart(item)
  const cart = utils.getShoppingCart()
  expect(cart).to.be.a("string")
  expect(cart).to.equal('apple ')
})

it("Should add a new item to the shopping cart", function() {
  const item = utils.createItem("apple", 0.99)
  const n_item = utils.addItemToCart(item)
  const cart_len = utils.getNumItemsInCart()
  expect(cart_len).to.equal(1)
})

it("Should return the number of items in the cart", function(){
  const item = utils.createItem("apple", 0.99)
  const n_item = utils.addItemToCart(item)
  const cart_len = utils.getNumItemsInCart()
  expect(cart_len).to.equal(1)
})

it("Should remove items from cart", function() {
  const item = utils.createItem("apple", 0.99)
  const n_item = utils.addItemToCart(item)
  const u_item = utils.removeItemFromCart(item)
  const cart_len = utils.getNumItemsInCart()
  expect(cart_len).to.equal(0)
})

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart", function() {
  const item = utils.createItem("apple", 0.99)
  const n_item = utils.addItemToCart(item)
  var cart_len = utils.getNumItemsInCart()
  expect(cart_len).to.equal(1)
  const u_item = utils.removeItemFromCart(item)
  cart_len = utils.getNumItemsInCart()
  expect(cart_len).to.equal(0)
})

it("Should validate that an empty cart has 0 items", function() {
  const item = utils.createItem("apple", 0.99)
  const n_item = utils.addItemToCart(item)
  var cart_len = utils.getNumItemsInCart()
  expect(cart_len).to.equal(1)
  const u_item = utils.removeItemFromCart(item)
  cart_len = utils.getNumItemsInCart()
  expect(cart_len).to.equal(0)
  const cart = utils.getShoppingCart()
  expect(cart).to.equal("")
})

it("Should return the total cost of all items in the cart", function() {
  var item = utils.createItem("apple", 0.99)
  var n_item = utils.addItemToCart(item)
  item = utils.createItem("peach", 0.59)
  n_item = utils.addItemToCart(item)
  var cart_len = utils.getNumItemsInCart()
  expect(cart_len).to.equal(2)
  const cart_cost = utils.totalCost()
  expect(cart_cost).to.be.a('number')
  expect(cart_cost).to.equal(1.58)
})
