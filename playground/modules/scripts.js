// import * as everything from './igor.js';
// import first, { last, middle as mid } from './utils.js';
// import { handleButtonClick } from './handlers.js';
// import igor from './igor.js';

// const name = 'igor';

// if (name) {
//   import('./utils.js').then(module => module.returnHi(name));
// }

// console.log(mid, last);
// console.log(igor);
// console.log(first);

const button = document.querySelector('button');

button.addEventListener('click', async () => {
  const { localCurrency, default: currency } = await import('./currencies.js');
  console.log(localCurrency, currency);
});
