// components
import { BackgroundNoise } from "./core/components/BackgroundNoise.js";
import { TabsPanel } from "./core/components/TabsPanel.js";
import { Weapon } from "./core/components/Weapon.js";
import { Modal } from "./core/components/Modal.js";
import { gallery } from "./core/components/gallery.js";

// data
import { bows as bowsData } from "./core/data/bows.js";
import { swords as swordsData } from "./core/data/swords.js";
import { warhammers as warhammersData } from "./core/data/warhammers.js";

// utils
import { cardsFactory } from "./core/utils/cardsFactory.js";
import { createWeaponModal } from "./core/components/weapon-modal.js";

const source = [
  { name: "Swords", data: swordsData },
  { name: "Warhammers", data: warhammersData },
  { name: "Bows", data: bowsData },
];

export function initApp() {
  const backgroundNoise = new BackgroundNoise({ container: document.body });
  backgroundNoise.render();

  const modal = new Modal();
  const tabsPanel = new TabsPanel({ className: "container" });

  source.forEach((entity) => {
    const { name, data } = entity;
    const weapons = data.map(
      (weaponData) =>
        new Weapon(weaponData, {
          onClick: (weapon) => createWeaponModal(weapon, modal),
        })
    );
    const weaponCards = cardsFactory(weapons);
    const galleryEl = gallery({ children: weaponCards });

    tabsPanel.add(name, galleryEl);
  });

  modal.add("header").add("content").add("footer");
  const modalEl = modal.render();
  const tabsEl = tabsPanel.render();

  document.body.append(tabsEl, modalEl);
}
