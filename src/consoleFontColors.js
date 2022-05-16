const colors = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  blue: "\x1b[34m",
  green: "\x1b[32m"
};

function fc(string, color) {
  return `${colors[color]}${string}${colors.reset}`;
}

module.exports = fc;