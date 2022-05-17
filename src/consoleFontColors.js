const colors = {
  reset: "\u001b[0m",
  red: "\u001b[31;1m",
  green: "\u001b[32;1m"
};

function fc(string, color) {
  return `${colors[color]}${string}${colors.reset}`;
}

module.exports = fc;