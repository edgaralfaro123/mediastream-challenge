'use strict';

console.log(`
2.
---

Take a look at the 'requester' function.

- What it does?
  Realiza una peticion a una api
- How it's used? Add different use-case examples that covers every functionality.

- How it is called this design pattern or technique?
  Patron es factory o fabrica porque da una clase o método de acuerdo a los argumentos.

HINT: Use https://api.github.com/users/mediastream
`);

// Add fetch polyfill for Node.js
require('isomorphic-fetch'); // See: https://github.com/matthew-andrews/isomorphic-fetch
const path = ['users','mediastream'];
const base ='https://api.github.com';

function requester(method, base, headers = { Accept: '*/*' }) {
  return  (path = []) => {
    fetch((base ? [base, ...path] : path).join('/'), { method, headers })
    .then(r => {
      r.json()})
  }
}

const method='GET';

const result = requester(method,base)
console.log('result',result)




