var cart = [];

// Modify the cart's item objects to make them easier to work with
function modifyCart(cart) {
  var modified = [];
  for (let i = 0; i < cart.length; i++) {
    var item = Object.keys(cart[i])[0];
    var price = cart[i][item];
    modified.push(
      { item: item,
        price: price }
    );
  }
  return modified;
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
 var itemObj = { [item]: price };
 cart.push(itemObj);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    var tally = "In your cart, you have ";
    var lastIndex = cart.length - 1;
    var modCart = modifyCart(cart);
    for (let i = 0; i < cart.length; i++) {
      var item = modCart[i].item;
      var price = modCart[i].price;
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
  return modifyCart(cart).reduce( function(acc, item) {
    return acc + item.price; 
  }, 0);
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
