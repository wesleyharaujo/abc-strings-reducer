const readline = require('readline');

async function interfaceCli(){

  const reader = readline.createInterface({
      input: process.stdin,
      output: process.stdout
  });

  return new Promise((resolve) => {
    return (
      reader.question("Informe a string a ser reduzida.\n", async (response) => {
        reader.close();
        return resolve(response);
      })
    );
  });
}

module.exports = interfaceCli