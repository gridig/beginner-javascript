const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

people.forEach((person, index) => {
  // debugger;
  // console.log(person.name);
  // console.groupCollapsed(`${person.name}`);
  // console.log(person.country);
  // console.log(person.cool);
  // console.log('DONE!');
  // console.groupEnd(`${person.name}`);
});

// console.table(people);

// Console Methods

// Callstack

// Grabbing Elements

// Breakpoints

// Scope

// Network Requests

// Break On Attribute

// Some Setup Code

function doLottaStuff() {
  console.group('Doing stuff');
  console.log('Why am I first');
  console.warn('Will this show in ff console?');
  console.log('Update: Ofc it will my dumbass turned off errors');
  console.error('This will for sure!');
  console.groupEnd('Doing stuff');
}

function doctorize(name) {
  console.count(`running Doctorize for ${name}`);
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist();
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
