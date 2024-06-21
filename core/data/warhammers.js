export const warhammers = [
  {
    id: crypto.randomUUID(),
    image: "/weapons-galery/assets/weapons/warhammers/daedric-warhammer.webp",
    name: "Daedric Warhammer",
    description:
      "The Daedric Warhammer is a fearsome two-handed weapon known for its immense power and dark, demonic origins. Crafted with Daedric materials and imbued with a sinister aura, this warhammer deals devastating damage. It requires Ebony Ingots, Leather Strips, and the rare Daedra Heart for enhancements, making it a prized possession for those seeking unmatched strength in battle.",
    type: "warhammer",
    slot: "two hand",
    damage: 27,
    weight: 31,
    cost: 4000,
    enhancers: [
      { name: "Ebony Ingot", count: 5, delimiter: "x" },
      { name: "Leather Strip", count: 3, delimiter: "x" },
      { name: "Daedra Heart", count: 1, delimiter: "x" },
    ],
  },
  {
    id: crypto.randomUUID(),
    image:
      "/weapons-galery/assets/weapons/warhammers/dragonbone-warhammer.webp",
    name: "Dragonbone Warhammer",
    description:
      "The Dragonbone Warhammer is a formidable two-handed weapon, renowned for its superior damage and durability. Forged from the bones of dragons, it boasts incredible strength and resilience. This warhammer requires Dragon Bones, Ebony Ingots, and Leather Strips for enhancements, making it a sought-after weapon for those who desire legendary power in combat.",
    type: "warhammer",
    slot: "two hand",
    damage: 28,
    weight: 33,
    cost: 4275,
    enhancers: [
      { name: "Dragon Bone", count: 3, delimiter: "x" },
      { name: "Ebony Ingot", count: 2, delimiter: "x" },
      { name: "Leather Strip", count: 3, delimiter: "x" },
    ],
  },
  {
    id: crypto.randomUUID(),
    image: "/weapons-galery/assets/weapons/warhammers/dwarven-warhammer.webp",
    name: "Dwarven Warhammer",
    description:
      "The Dwarven Warhammer is a robust two-handed weapon, crafted with Dwarven metal and designed for heavy-hitting blows. Known for its reliability and sturdiness, this warhammer is a favorite among warriors. It requires Steel Ingots, Iron Ingots, Leather Strips, and Dwarven Metal Ingots for enhancements, making it a valuable tool for those who value strength and durability.",
    type: "warhammer",
    slot: "two hand",
    damage: 22,
    weight: 27,
    cost: 325,
    enhancers: [
      { name: "Steel Ingot", count: 2, delimiter: "x" },
      { name: "Iron Ingot", count: 1, delimiter: "x" },
      { name: "Leather Strip", count: 3, delimiter: "x" },
      { name: "Dwarven Metal Ingot", count: 3, delimiter: "x" },
    ],
  },
  {
    id: crypto.randomUUID(),
    image: "/weapons-galery/assets/weapons/warhammers/elven-warhammer.webp",
    name: "Elven Warhammer",
    description:
      "The Elven Warhammer is a beautifully crafted two-handed weapon, known for its elegance and effectiveness in battle. Made with refined materials, it delivers powerful strikes with a graceful design. This warhammer requires Iron Ingots, Quicksilver Ingots, Leather Strips, and Refined Moonstone for enhancements, making it a preferred choice for those who seek both style and substance in combat.",
    type: "warhammer",
    slot: "two hand",
    damage: 26,
    weight: 28,
    cost: 565,
    enhancers: [
      { name: "Iron Ingot", count: 2, delimiter: "x" },
      { name: "Quicksilver Ingot", count: 1, delimiter: "x" },
      { name: "Leather Strip", count: 3, delimiter: "x" },
      { name: "Refined Moonstone", count: 3, delimiter: "x" },
    ],
  },
  {
    id: crypto.randomUUID(),
    image: "/weapons-galery/assets/weapons/warhammers/stalhrim-warhammer.webp",
    name: "Stalhrim Warhammer",
    description:
      "The Stalhrim Warhammer is a powerful two-handed weapon, imbued with the magical properties of Stalhrim. Known for its unique appearance and formidable damage, it is a prized weapon among warriors. This warhammer requires Stalhrim and Leather Strips for enhancements, making it a rare and valuable asset for those who seek to wield a weapon of great power and mystical heritage.",
    type: "warhammer",
    slot: "two hand",
    damage: 26,
    weight: 29,
    cost: 2850,
    enhancers: [
      { name: "Stalhrim", count: 2, delimiter: "x" },
      { name: "Leather Strip", count: 3, delimiter: "x" },
    ],
  },
];
