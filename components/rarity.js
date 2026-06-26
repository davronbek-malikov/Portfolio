// Maps a rarity tier to its two accent colors + glow, injected as CSS vars.
export const RARITY = {
  mythic: { ra: "#ff5d73", rb: "#ffd27a", glow: "rgba(255,93,115,0.45)", label: "Mythic" },
  legendary: { ra: "#ffcf5c", rb: "#6ea8ff", glow: "rgba(255,207,92,0.40)", label: "Legendary" },
  epic: { ra: "#c47bff", rb: "#ff7ad9", glow: "rgba(196,123,255,0.42)", label: "Epic" },
  rare: { ra: "#51e2ff", rb: "#5b8cff", glow: "rgba(81,226,255,0.42)", label: "Rare" },
  common: { ra: "#9aa3b2", rb: "#c7cdd9", glow: "rgba(154,163,178,0.35)", label: "Common" },
};

export function rarityVars(rarity) {
  const r = RARITY[rarity] || RARITY.common;
  return { "--ra": r.ra, "--rb": r.rb, "--glow": r.glow };
}
