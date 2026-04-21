const startArr = [
  { id: 1, name: 'Вася' },
  { id: 2, name: 'Петя' },
  { id: 1, name: 'Вася' },
];

const idsSet = new Set(startArr.map((item) => item.id));

const endArr = [];
for (const id of idsSet) {
  endArr.push(startArr.find((item) => item.id === id));
};

console.log(endArr);