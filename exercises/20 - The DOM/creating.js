// console.log('it works');

const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');
// console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/500';
myImage.alt = '500px image';

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);

const heading = document.createElement('h2');
heading.textContent = 'Cool things';

myDiv.insertAdjacentElement('afterbegin', heading);

// check yo self before you wreck yo self - cloneNode is cool
const myUnorderedList = document.createElement('ul');
const myListItem3 = document.createElement('li');
myListItem3.textContent = 'three';
const myListItem1 = document.createElement('li');
myListItem1.textContent = 'one';
const myListItem2 = document.createElement('li');
myListItem2.textContent = 'two';
const myListItem4 = document.createElement('li');
myListItem4.textContent = 'four';
const myListItem5 = document.createElement('li');
myListItem5.textContent = 'five';

myUnorderedList.appendChild(myListItem3);

myUnorderedList.insertAdjacentElement('afterbegin', myListItem2);
myUnorderedList.insertAdjacentElement('afterbegin', myListItem1);
myUnorderedList.insertAdjacentElement('beforeend', myListItem4);
myUnorderedList.insertAdjacentElement('beforeend', myListItem5);

document.body.insertAdjacentElement('afterbegin', myUnorderedList);
