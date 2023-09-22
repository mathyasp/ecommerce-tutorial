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
