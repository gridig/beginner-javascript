function wait(ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomBetween(min = 20, max = 150) {
  return Math.floor(Math.random() * (max - min) + min);
}

// async function drawLetter(el) {
//   const text = el.textContent;
//   let soFar = '';
//   for (const letter of text) {
//     soFar += letter;
//     el.textContent = soFar;
//     const { typeMin, typeMax } = el.dataset;
//     const amoutOfTimeToWait = getRandomBetween(typeMin, typeMax);
//     await wait(amoutOfTimeToWait);
//   }
// }

function drawLetter(el) {
  let index = 1;
  const text = el.textContent;
  const { typeMin, typeMax } = el.dataset;
  async function drawLetter() {
    el.textContent = text.slice(0, index);
    index += 1;
    const amoutOfTimeToWait = getRandomBetween(typeMin, typeMax);
    await wait(amoutOfTimeToWait);
    if (index <= text.length) {
      drawLetter();
    }
  }
  drawLetter();
}

document.querySelectorAll('[data-type]').forEach(drawLetter);
