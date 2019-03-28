/* global Product, Cart */

'use strict';

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  for (var i in Product.allProducts) {
    var option = document.createElement('option');
    option.textContent = Product.allProducts[i].name;
    selectElement.appendChild(option);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  // TODO: Prevent the page from reloading
  event.preventDefault();

  // Do all the things ...
  addSelectedItemToCart();
  saveCartToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  var selected = document.getElementById('items').value;
  // TODO: get the quantity
  var quantity = document.getElementById('quantity').value;
  // TODO: using those, create a new Cart item instance
  new Cart(selected, quantity);
}

// TODO: Save the contents of the cart to Local Storage
function saveCartToLocalStorage() {
  localStorage.setItem('cartData', JSON.stringify(CartArray));
  console.log(JSON.parse(localStorage.getItem('cartData')));
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  var counter = document.getElementById('itemCount');
  counter.textContent = CartArray.length;
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  var itemName = document.getElementById('items').value;
  var itemQuantity = document.getElementById('quantity').value;
  // TODO: Add a new element to the cartContents div with that information
  var previewItem = document.createElement('p');
  previewItem.textContent = itemName + ': ' + itemQuantity;
  document.getElementById('cartContents').appendChild(previewItem);
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();