const interface = require('./interface.js');
const result = require('./result.js');
const rules = require('./rules.js');
const reducer = require('./reducer.js');
const validation = require('./validation.js');

async function start() {
  const string = await interface();

  const regex = /[^a-c]/;
  const validated = validation(string, regex);

  if(validated){
    console.log("String: ", string);

    const res = result(string, reducer, rules)
    const message = `\nString original: ${res.originalString}, \nString final: ${res.finalString},\nTamanho da string final: ${res.finalStringLength}\n`;
      
    console.log(message);
  } else {
    const message = `\nApenas strings com as letras a, b e c são permitidas.\n`;
    console.log(message);
  }

  start();
}

start();


// const interfaceCli = require('./interfaceCli.js');
// const response = require('./response.js');
// const rules = require('./rules.js');
// const reducer = require('./reducer.js');

// interfaceCli(response, reducer, rules);