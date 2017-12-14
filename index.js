var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * 100);
 var itemObject = { [item]: price };
 cart.push(itemObject);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    var tally = "In your cart, you have ";
    var items = Object.keys(cart);
    var lastIndex = cart.length - 1;
    
    for (let itemIndex = 0; itemIndex < cart.length; itemIndex++) {
      tally += `${items[itemIndex]} at $${cart[items[itemIndex]]}`;
      if (itemIndex === lastIndex) {
        tally += ".";
      } else {
        tally += ", ";
      }
    }
    
    console.log(tally);
  }
}

addToCart('apple');
viewCart();

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
