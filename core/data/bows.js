export const bows = [
  {
    id: crypto.randomUUID(),
    image: "/weapons-galery/assets/weapons/bows/ancient-nord-bow.webp",
    name: "Ancient Nord Bow",
    description:
      "The Ancient Nord Bow is a relic from a bygone era, crafted with the techniques of the ancient Nords. This two-handed bow, known for its rustic appearance and reliable performance, deals moderate damage. It is relatively lightweight and affordable, requiring only a Steel Ingot for enhancements. Perfect for archers who appreciate historical weaponry and effective combat.",
    type: "bow",
    slot: "two hand",
    damage: 8,
    weight: 12,
    cost: 45,
    enhancers: [{ name: "Steel Ingot", count: 1, delimiter: "x" }],
  },
  {
    id: crypto.randomUUID(),
    image: "/weapons-galery/assets/weapons/bows/daedric-bow.webp",
    name: "Daedric Bow",
    description:
      "The Daedric Bow is a powerful and ominous weapon, favored by those who seek immense power in archery. This two-handed bow, forged from Daedric materials, delivers high damage and has a distinctive, dark design. Enhancements require Ebony Ingots and a Daedra Heart, making it a prized possession for archers who desire superior strength and a touch of the sinister.",
    type: "bow",
    slot: "two hand",
    damage: 19,
    weight: 18,
    cost: 2500,
    enhancers: [
      { name: "Ebony Ingot", count: 3, delimiter: "x" },
      { name: "Daedra Heart", count: 1, delimiter: "x" },
    ],
  },
  {
    id: crypto.randomUUID(),
    image: "/weapons-galery/assets/weapons/bows/hunting-bow.webp",
    name: "Hunting Bow",
    description:
      "The Hunting Bow is a practical and efficient weapon, ideal for both novice and experienced archers. This two-handed bow, known for its simplicity and ease of use, deals consistent damage and is lightweight. It requires a Leather Strip for enhancements, making it an accessible and dependable choice for those who enjoy hunting and precision shooting.",
    type: "bow",
    slot: "two hand",
    damage: 8,
    weight: 7,
    cost: 50,
    enhancers: [{ name: "Leather Strip", count: 1, delimiter: "x" }],
  },
];
