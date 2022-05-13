const examples = require('./examples.js').examples;
const result = require('../result.js');
const reducer = require('../reducer.js');
const rules = require('../rules')

test.each([
  ...examples
])(`%# %s`, ({string, expected}) => {
  const res = result(string, reducer, rules);
  expect(res).toMatchObject(expected);
});
