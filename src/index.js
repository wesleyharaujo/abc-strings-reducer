const interface = require('./interface.js');
const result = require('./result.js');
const rules = require('./rules.js');
const reducer = require('./reducer.js');
const validation = require('./validation.js');
const fc = require('./consoleFontColors.js');

async function start() {
  const string = await interface();

  const validationRegex = /[^a-c]/;
  const isValid = validation(string, validationRegex);

  if(isValid){
    const res = result(string, reducer, rules);

    const message = `
      \nString original: ${fc(res.originalString, 'green')},
      \nString final: ${fc(res.finalString, 'green')},
      \nTamanho da string final: ${fc(res.finalStringLength, 'green')}
    `;
    
    console.log(message);
  } else {
    const message = `\nApenas strings com as letras a, b e c são permitidas.`;
    console.log(fc(message, 'red'));
  }
  console.log("\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n")
  start();
}

start();

// var red, blue, reset;
// red = '\u001b[31m';
// blue = '\u001b[34m';
// reset = '\u001b[0m';

// console.log(red +"Aqui esta o texto em vermelho. "+ blue +"Aqui esta o texto em vermelho. "+ reset +"Aqui estamos dando reset nas cores do bash.")