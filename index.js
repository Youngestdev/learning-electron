const { remote } = require('electron');
const keytar = remote.require('keytar');

const getBtn = document.querySelector('#getPasswordBtn');
const setBtn = document.querySelector('#setPasswordBtn');
const secretValEl = document.querySelector('#secretValue');
const output = document.querySelector('#output');


getPasswordBtn.addEventListener('click', () => {
  // Params are: service name, account name. Both are arbitrary
  const secret = keytar.findPassword('KeytarTest');
  output.innerText = secret || 'Nothing set';
  console.log(secret)
});

setPasswordBtn.addEventListener('click', () => {
  const secret = secretValEl.value;
  keytar.setPassword('KeytarTest', 'AccountName', secret);
});