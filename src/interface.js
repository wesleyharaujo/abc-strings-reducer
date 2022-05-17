const readline = require('readline');

async function interfaceCli(){

  const reader = readline.createInterface({
      input: process.stdin,
      output: process.stdout
  });

  return new Promise((resolve) => {
    return (
      reader.question("\nInforme a string a ser reduzida: ", async (response) => {
        reader.close();
        return resolve(response.toLowerCase());
      })
    );
  });
}

module.exports = interfaceCli