const Creature = function (race, name, language) {
  this.race = race;
  this.name = name;
  this.language = language;
};

Creature.prototype.speak = function (phrase) {
  console.log(phrase);
};

const Orc = new Creature('Orc', 'Grom', 'Orcish');
Orc.prototype = Object.create(Creature.prototype);
Orc.weapon = 'axe';
Orc.punch = function () {
  console.log('punch');
}

console.log(Orc);
Orc.speak('Argh!');
Orc.punch();

const Elf = new Creature('Elf', 'Larian', 'Elfish');
Elf.prototype = Object.create(Creature.prototype);
Elf.weapon = 'sword';
Elf.spell = function () {
  console.log('spell');
}

console.log(Elf);
Elf.speak('attack!');
Elf.spell();