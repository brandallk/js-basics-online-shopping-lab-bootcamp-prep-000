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
    var lastIndex = cart.length - 1;
    for (let itemIndex = 0; itemIndex < cart.length; itemIndex++) {
      var itemName = Object.keys(cart[itemIndex])[0];
      var price = cart[itemIndex][itemName];
      if (itemIndex === lastIndex) {
        tally += `${itemName} at $${price}.`;
      } else if (itemIndex === lastIndex - 1) {
        if (cart.length === 2) {
          tally += `${itemName} at $${price} and `;
        } else {
          tally += `${itemName} at $${price}, and `;
        }
      } else {
        tally += `${itemName} at $${price}, `;
      }
    }
    console.log(tally);
  }
}

function restructuredCart(cart) {
  var restructured = [];
  for (let itemIndex = 0; itemIndex < cart.length; itemIndex++) {
    var itemName = Object.keys(cart[itemIndex])[0];
    var price = cart[itemIndex][itemName];
    restructured.push({
      item: itemName,
      price: price
    });
  }
}

function total() {
  cart.reduce( function(acc, item) {
    return acc; 
  });
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
