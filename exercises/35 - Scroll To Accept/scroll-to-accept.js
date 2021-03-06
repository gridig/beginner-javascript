// function scrollToAccept() {
//   const terms = document.querySelector('.terms-and-conditions');
//   if (!terms) {
//     return;
//   }

//   terms.addEventListener('scroll', function(e) {
//     console.log(e);
//   });
// }

// scrollToAccept();

const terms = document.querySelector('.terms-and-conditions');
// const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');

const ob = new IntersectionObserver(obCallback, {
  root: terms,
  threshold: 1,
});

function obCallback(payload) {
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    ob.unobserve(terms.lastElementChild);
  }
}

ob.observe(terms.lastElementChild);

// terms.addEventListener('scroll', function(e) {
//   console.log(e);
// });
