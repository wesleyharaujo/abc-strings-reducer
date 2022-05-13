const exemplesFragmented = require('./examples.js').exemplesFragmented;
const reducer = require('../reducer.js');
const rules = require('../rules')

test.each([
  ...exemplesFragmented
])(`%# %s`, ({string, expected}) => {
  const res = reducer(string, rules);
  expect(res).toBe(expected);
});
