var cart = [];

// Modify the cart's item objects to make them easier to work with
function restructureCart(cart) {
  var restructured = [];
  for (let itemIndex = 0; itemIndex < cart.length; itemIndex++) {
    var itemName = Object.keys(cart[itemIndex])[0];
    var price = cart[itemIndex][itemName];
    restructured.push({
      item: itemName,
      price: price
    });
  }
  return restructured;
}

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
    var resCart = restructureCart(cart);
    for (let i = 0; i < cart.length; i++) {
      var item = resCart[i].item;
      var price = resCart[i].price;
      if (i === lastIndex) {
        tally += `${item} at $${price}.`;
      } else if (i === lastIndex - 1) {
        if (cart.length === 2) {
          tally += `${item} at $${price} and `;
        } else {
          tally += `${item} at $${price}, and `;
        }
      } else {
        tally += `${item} at $${price}, `;
      }
    }
    console.log(tally);
  }
}

function total() {
  return restructureCart(cart).reduce( function(acc, item) {
    return acc + item.price; 
  }, 0);
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
