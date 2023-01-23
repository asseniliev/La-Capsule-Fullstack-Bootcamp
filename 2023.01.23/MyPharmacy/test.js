const myTest = {
  name: 'Codeine',
  description: 'Codeine is an opioid analgesic used to treat moderate to severe pain when the use of an opioid is indicated.',
  type: 'Small Molecule',
  groups: ['Approved', 'Illicit'],
};

console.log(myTest.groups.some(element => element === 'Illicit'));
