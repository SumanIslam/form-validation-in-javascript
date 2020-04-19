// form validation
const inputs = document.querySelectorAll('input');

const patterns = {
  username: /^\w{5,12}$/,
  telephone: /^\d{11}$/,
  password: /^[\w@-]{8,20}$/,
  email: /^([a-z\d\.]+)@([a-z]+)\.([a-z]{2,3})([\.a-z]{2,3})?$/
}

// validation function
function validation(field, regex) {
  // console.log(regex.test(field.value));
  if (regex.test(field.value)) {
    field.className = 'valid';
  } else {
    field.className = 'unvalid';
  }
}
inputs.forEach(input => {
  input.addEventListener('keyup', (e) => {
    validation(e.target, patterns[e.target.attributes.name.value]);
  });
});