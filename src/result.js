function result(string, stringProcessor, rules) {
  
  const result = {
    originalString: string,
    finalString:  '',
    finalStringLength: 0
  }
  
  function repeat(string) {
    const newString = stringProcessor(string, rules);
    
    if(string !== newString) {
      return repeat(newString);
    }

    return newString
  }
  
  const newString = repeat(string);

  result.finalString = newString;
  result.finalStringLength = newString.length

  return result;
}

module.exports = result