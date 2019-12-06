const item = document.querySelector('.item');

const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = `cute pup <img onload="alert('HACKED - NICE')" src="https://picsum.photos/50" />`
const myHTML = `
    <div class="wrapper">
        <h2>${desc}</h2>
        <img src="${src}" alt="${desc}">
    </div>
`;

// console.log(typeof myHTML);
// console.log(item.innerHTML);

// item.innerHTML = myHTML;

// const itemImage = document.querySelector('.wrapper img');

// itemImage.classList.add('round');

// console.log(itemImage);

const myFragment = document.createRange().createContextualFragment(myHTML);

document.body.appendChild(myFragment);