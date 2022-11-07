const handtraps = [
  {
    name: "ash blossom and joyous spring",
    category: ["zombie", "discard", "fire", "drawnegate"],
    special: "tuner",
  },
  { name: "maxx c", category: ["insect", "earth", "discard", "cardadvantage"] },
  {
    name: "ghost ogre and snow rabbit",
    category: ["psychic", "discard", "light", "destroy"],
    special: "tuner",
  },
  {
    name: "droll and lock bird",
    category: ["drawnegate", "discard", "wind", "spellcaster"],
  },
  {
    name: "nibiru the primal being",
    category: ["token", " tribute", " light", "rock"],
  },
  {
    name: "psy-framegear gamma",
    category: ["garnet", "psychic", "light", "monsnegate"],
  },
  {
    name: "effect veiler",
    category: ["monsnegate", "discard", "light", "spellcaster"],
    special: "tuner",
  },
  {
    name: "dimension shifter",
    category: ["banish", "discard", "spellcaster", "dark"],
  },
  {
    name: "infinite impermanence",
    category: ["trap", "monsnegate", "lanenegate", "normaltrap"],
  },
  { name: "kuriboh", category: ["dmgnegate", "fiend", "dark", "discard"] },
];

{
  handtraps.forEach((interuptions) => {
    console.log(interuptions);
  });
}

const type = handtraps.filter((handtrap) => {
  handtrap.includes("tuner");
});
console.log(type);
