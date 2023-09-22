import data from "./data.js";

const itemsContainer = document.querySelector('#items');

// the length of our data determines how many times this loop goes around
for (let i = 0; i < data.length; i += 1) {

	// create a new div element and give it a class name
	const newDiv = document.createElement('div');
	newDiv.className = 'item';

	// create an image element
	const img = document.createElement('img');

	// this will change each time we go through the loop. Can you explain why?
	img.src = data[i].image;
	img.width = 300;
	img.height = 300;

	// Add the image to the div
	newDiv.appendChild(img);

	// put new div inside items container
	itemsContainer.appendChild(newDiv);

	// create a paragraph element for the description
	const description = document.createElement('p');

	// add the text description
	description.innerHTML = data[i].desc;

	// append to the div
	newDiv.appendChild(description);

	// create a paragraph element for the price
	const price = document.createElement('p');

	// add the price
	price.innerHTML = data[i].price;

	// append to the div
	newDiv.appendChild(price);

	// Make a button
	const button = document.createElement('button');

	// Add an id name to the button
	button.id = data[i].name;

	// Create a custom attribute called data-price
	button.dataset.price = data[i].price;
	button.innerHTML = 'Add to Cart';
	newDiv.appendChild(button);
};

// Initialize the shopping cart
const cart = [];

// Function to add an item to the shopping cart
function addItem(name, price) {
	for (let i = 0; i < cart.length; i += 1) {
		if (cart[i].name === name) {
			cart[i].qty += 1;
			return;
		}
	};
	const item = {name, price, qty: 1};
	cart.push(item);
};

// Function to show items in the shopping cart
function showItems() {
	const qty = getQty();
	console.log(`You have ${qty} items in your cart`);

	for (let i = 0; i < cart.length; i += 1) {
		console.log(`${cart[i].name} ${cart[i].price} x ${cart[i].qty}`);
	};
	
	console.log(`Total in cart: $${getTotal()}`);
};

// Function to get the quantity of items in the shopping cart
function getQty() {
	let qty = 0;
	for (let i = 0; i < cart.length; i += 1) {
		qty += cart[i].qty;
	};
	return qty;
};

// Function to get the total price of the shopping cart
function getTotal() {
	let total = 0;
	for (let i = 0; i < cart.length; i += 1) {
		total += cart[i].price * cart[i].qty;
	};
	return total.toFixed(2);
};

// Function to remove item from the shopping cart
function removeItem(name, qty = 0) {
	for (let i = 0; i < cart.length; i += 1) {
		if (cart[i].name === name) {
			if (qty > 0) {
				cart[i].qty -= qty;
			};
			if (cart[i].qty < 1 || qty === 0) {
				cart.splice(i, 1);
			};
			return;
		};
	};
};