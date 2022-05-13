function reducer(string, rules) {
  const results = rules.map( (rule) => {
    const regex = new RegExp(rule.regex);
    return (
      {
        input: string,
        matchIndex: string.search(regex),
        value: string.replace(regex, rule.value)        
      }
    );
  })

  const result = results.reduce( (first, result) => {

    if(first.matchIndex === -1) {
      return result;
    }
    
    if(result.matchIndex === -1) {
      return first;
    }

    if (first.matchIndex > result.matchIndex) {
      return result;
    }

    if (first.matchIndex < result.matchIndex) {
      return first;
    }
  })

  return result.value;
}

module.exports = reducer