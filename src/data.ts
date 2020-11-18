export const data: {code: string, validators: [any, any][]}[] = [
  {
    code: `function doubleInteger(i) {
  
  // i will be an integer. Double it and return it.
  
  return i;
}`,
    validators: [
      [2, 4],
      [4, 8],
      [-10, -20],
      [0, 0],
      [100, 200]
    ]
  },
  {
    code: `function isNumberEven(i) {
  
  // i will be an integer. Return true if it's even, and false if it isn't.
  
  return i;
}`,
    validators: [
      [2, true],
      [3, false],
      [0, true],
      [-2, true],
      [Math.floor(Math.random()*1000000)*2, true]
    ]
  },
  {
    code: `function getFileExtension(i) {
  
  // i will be a string, but it may not have a file extension.
  // return the file extension (with no period) if it has one, otherwise false
  
  return i;
}`,
    validators: [
      ['blatherskite.png', 'png'],
      ['perfectlylegal.torrent', 'torrent'],
      ['spaces are fine in file names.txt', 'txt'],
      ['this does not have one', false],
      ['.htaccess', 'htaccess']
    ]
  }
];
