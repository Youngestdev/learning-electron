const { remote } = require('electron');
const keytar = remote.require('keytar');

const getBtn = document.querySelector('#getPasswordBtn');
const setBtn = document.querySelector('#setPasswordBtn');
const secretValEl = document.querySelector('#secretValue');
const output = document.querySelector('#output');


const secret2 = new Promise((resolve, reject) => {
  const secret = keytar.findPassword('KeytarTest');
  // cons
  if (secret){
    let test = secret || 'Nothing set';
    resolve(test)
  } else {
    reject(Error("Ah..!"))
  }
})

getPasswordBtn.addEventListener('click', () => {
  // Params are: service name, account name. Both are arbitrary
  // console.log(secret)
  secret2.then((fulfilled) => {
    // console.log(fulfilled);
    output.innerText = fulfilled;
  })
  .catch((error) => {
    console.log(error.message);
  })
});

setPasswordBtn.addEventListener('click', () => {
  const secret = secretValEl.value;
  keytar.setPassword('KeytarTest', 'AccountName', secret);
});