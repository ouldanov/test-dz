function rollDice(countDice) {
  const max = Number(countDice.replace('d', ''));
  return Math.floor(Math.random() * max) + 1;
}

console.log(rollDice('d6'));
console.log(rollDice('d20'));