function validation(string, regex) {
  if(string.search(regex) === -1) {
    return true;
  }
  return false;
}

module.exports = validation