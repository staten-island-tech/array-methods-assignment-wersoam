const handtraps = [
  {
    name: "ash blossom and joyous spring",
    category: ["zombie", "discard", "fire", "drawnegate"],
    special: "once per turn",
    level: "3",
  },
  {
    name: "maxx c",
    category: ["insect", "earth", "discard", "cardadvantage"],
    level: "2",
    special: "once per turn",
  },
  {
    name: "ghost ogre and snow rabbit",
    category: ["psychic", "discard", "light", "destroy"],
    special: "once per turn",
    level: "3",
  },
  {
    name: "droll and lock bird",
    category: ["drawnegate", "discard", "wind", "spellcaster"],
    level: "3",
    special: "unlimited",
  },
  {
    name: "nibiru the primal being",
    category: ["token", " tribute", " light", "rock"],
    level: "11",
    special: "once per turn",
  },
  {
    name: "psy-framegear gamma",
    category: ["garnet", "psychic", "light", "monsnegate"],
    special: "unlimited",
    level: "2",
  },
  {
    name: "effect veiler",
    category: ["monsnegate", "discard", "light", "spellcaster"],
    special: "unlimited",
  },
  {
    name: "dimension shifter",
    category: ["banish", "discard", "spellcaster", "dark"],
    special: "unlimited",
    level: "6",
  },
  {
    name: "infinite impermanence",
    category: ["trap", "monsnegate", "lanenegate", "normaltrap"],
    special: "once per turn",
    level: "none",
  },
  {
    name: "kuriboh",
    category: ["dmgnegate", "fiend", "dark", "discard"],
    special: "unlimted",
    level: "1",
  },
];

{
  handtraps.forEach((interuptions) => {
    console.log(interuptions);
  });
}

const type = handtraps.filter((handtrap) => handtrap.level === "3");
console.log(type);
