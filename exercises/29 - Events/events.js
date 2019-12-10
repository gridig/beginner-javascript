const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');
const buyButtons = document.querySelectorAll('button.buy');

function handleClick() {
  console.log('🐛 IT GOT CLICKED!!!');
}

const hooray = () => console.log('HOORAY!');

butts.addEventListener('click', function() {
  console.log('Im an anon!');
});

coolButton.addEventListener('click', hooray);

butts.removeEventListener('click', handleClick);

function handleBuyButtonClick(e) {
  const button = e.target;
  console.log('You clicked a button');
  // console.log(parseFloat(button.dataset.price));
  console.log(e.target);
  console.log(e.currentTarget);
  console.log(e.target === e.currentTarget);
  // event.stopPropagation();
}

buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener(
  'click',
  function(event) {
    console.log('You clicked a window');
    console.log(event.target);
    console.log(event.type);
    console.log(event.bubble);
    // event.stopPropagation();
  },
  { capture: true }
);

// function buyItem() {
//   console.log('buying item');
// }

// function attachListener(buyButton) {
//   buyButton.addEventListener('click', buyItem);
// }

// buyButtons.forEach(attachListener);

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mouseenter', function(e) {
  console.log(e.currentTarget);
  // console.log(this);
});
