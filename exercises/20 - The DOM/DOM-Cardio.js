// Make a div
// add a class of wrapper to it
// put it into the body

const div = document.createElement('div');
div.classList.add('wrapper');
document.body.appendChild(div);

// make an unordered list
// add three list items with the words "one, two three" in them
// put that list into the above wrapper

const ul = document.createElement('ul');
const liOne = document.createElement('li');
liOne.innerText = 'one';
ul.appendChild(liOne);
const liTwo = document.createElement('li');
liTwo.innerText = 'two';
ul.appendChild(liTwo);
const liThree = document.createElement('li');
liThree.innerText = 'three';
ul.appendChild(liThree);
div.appendChild(ul);

// create an image
// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper

const img = document.createElement('img');
img.src = 'https://picsum.photos/500';
img.width = 250;
img.classList.add('cute');
img.alt = 'cute puppy';
div.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
// add a class to the second paragraph called warning
// remove the first paragraph

const divTwo = document.createElement('div'); // misread the requirement, went with it, sorry Wes
const divString = `
    <p>paragraph one</p>
    <p>paragraph two</p>
`;
divTwo.innerHTML = divString;
div.insertAdjacentElement('afterbegin', divTwo);
const paragraphTwo = divTwo.querySelector('p').nextElementSibling; // bad solution, but works here
paragraphTwo.classList.add('warning');
divTwo.querySelector('p').remove(); // bad solution, but works here (I'm a hack)

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

function generatePlayerCard(name, age, height) {
  const imperial = height / 2.54;
  const heightFeet = Math.floor(imperial / 12);
  const heightInches = Math.round(Math.abs((imperial / 12) % 1) * 12).toFixed(
    1
  );
  return `
    <div class="playerCard">
        <h2>${name} — ${age}</h2>
        <p>They are ${height} cm tall (${heightFeet} feet and ${heightInches} inches) and ${age} years old. In Dog years this person would be ${age *
    7}. That would be a tall dog!</p>
        <button type="button" onclick="this.parentElement.remove()">Delete</button>
    </div>
`;
}

// make a new div with a class of cards
// Have that function make 4 cards
// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

const divThree = document.createElement('div');
divThree.classList.add('cards');
let cards = generatePlayerCard('wes', 50, 180);
cards += generatePlayerCard('bobo', 40, 170);
cards += generatePlayerCard('mimi', 30, 160);
cards += generatePlayerCard('cici', 20, 150);
divThree.innerHTML = cards;
div.insertAdjacentElement('beforebegin', divThree);

// ignored the proper way to do things (list below), just added an onclick function, no sweat Wes
// select all the buttons!
// make out delete function
// loop over them and attach a listener
