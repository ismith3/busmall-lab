'use strict';

var Cart = [];
// Create an event listener so that when the delete link is clicked, the removeItemFromCart 
//method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

function loadCart() {
  Cart = JSON.parse(localStorage.getItem('cartData')) || [];
  console.log(Cart);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  for(var i = 0; i < Cart.length; i++)
    var destroy = document.getElementsByTagName('tbody')[0].innerHTML='';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  var tableBody = document.getElementsByTagName('tbody')[0];
  for(var i = 0; i < Cart.length; i++){
    var tableRow = document.createElement('tr');
    var tableX = document.createElement('td');
    var tableItem = document.createElement('td');
    var tableQuantity = document.createElement('td');
    
    tableX.addEventListener('click', removeItemFromCart);
    tableX.setAttribute('id', Cart[i].item);

    tableX.textContent = 'X';
    tableItem.textContent = Cart[i].item;
    tableQuantity.textContent = Cart[i].quantity;

    tableBody.appendChild(tableRow);
    
    tableRow.appendChild(tableX);
    tableRow.appendChild(tableQuantity);
    tableRow.appendChild(tableItem);

    console.log('hello');
  }
  //
  //tableData.textContent = Cart[i].quantity;


  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}


function removeItemFromCart(event) {
  Cart = Cart.filter(product => product.item !== event.target.id);
  localStorage.setItem('cartData', JSON.stringify(Cart))
  renderCart();
  // TODO: When a delete link is clicked, rebuild the Cart array without that item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();