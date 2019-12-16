const wes = document.querySelector('.wes');
const signupForm = document.querySelector('[name="signup"]');

wes.addEventListener('click', function(event) {
  const shouldChangePage = window.confirm(
    'this website might be malicious, do you wish to procede?'
  );
  if (!shouldChangePage) {
    event.preventDefault();
  }
});

signupForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = event.currentTarget.name.value;
  const email = event.currentTarget.email.value;
  const agree = event.currentTarget.agree.checked;

  if (name.includes('chad')) {
    alert('sry bro');
    event.preventDefault();
  }
});

function logEvent(event) {
  console.log(event.type);
  console.log(event.currentTarget.value);
}

signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);

const photo = document.querySelector('.photo');

function handlePhotoClick(event) {
  if (event.type === 'click' || event.key === 'Enter') {
    console.log('you clicked a photo');
  }
}

photo.addEventListener('click', handlePhotoClick);
photo.addEventListener('keyup', handlePhotoClick);
