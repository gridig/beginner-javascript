import wait from 'waait';
import { name } from 'faker';
import { formatDistance, format } from 'date-fns';
import axios from 'axios';
import { intersection, isEqual } from 'lodash';
import to from 'await-to-js';

const fakeNames = Array.from(
  { length: 10 },
  () => `${name.firstName()} ${name.lastName()}`
);

console.log(fakeNames);

async function go() {
  console.log('it is working');
  await wait(200);
  console.log('it works');
}

go();

const diff = formatDistance(new Date(), new Date(2020, 8, 16), {
  addSuffix: true,
}); //= > 'in about 1 hour'

console.log(diff);

const date = new Date();

const formatted = format(date, `LLLL 'the' do y`);

console.log(formatted);

const proxy = `https://cors-anywhere.herokuapp.com/`;

async function getJoke() {
  const { data } = await axios.get(`${proxy}https://icanhasdadjoke.com`, {
    headers: {
      Accept: 'application/json',
    },
  });
  console.log(data);
}

getJoke();

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const b = [3, 5, 8, 3, 7, 453, 34];

const sameValues = intersection(a, b);

console.log(sameValues);

const person1 = { name: 'Iggy' };
const person2 = { name: 'Iggy' };

console.log(isEqual(person1, person2));

function checkIfNameIsCool(firstName) {
  return new Promise(function(resolve, reject) {
    if (firstName === 'Igor') {
      return resolve('Cool name bro');
    }
    reject(new Error('Uncool name bro'));
  });
}

async function checkName() {
  const [err, successValue] = await to(checkIfNameIsCool('Wes'));
  if (err) {
    console.log(err);
  } else {
    console.log(successValue);
  }
}

checkName();
