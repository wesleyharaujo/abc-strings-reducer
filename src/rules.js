const rules = [
  {
    description: 'a',
    regex: '(bc)|(cb)',
    value: 'a',
  },
  {
    description: 'b',
    regex: '(ca)|(ac)',
    value: 'b',
  },
  {
    description: 'c',
    regex: '(ab)|(ba)',
    value: 'c',
  },
];

module.exports = rules