import { Modal } from "./Modal.js";
import { Weapon } from "./Weapon.js";

/**
 *
 * @param {Weapon} weaponEntity
 * @param {Modal} modal
 */
export function createWeaponModal(weaponEntity, modal) {
  const weaponDetails = `
    ${weaponEntity.getImageHTML("mx-auto", "no-shrink")}
    ${weaponEntity.getDescriptionHTML("mb-2")}  
    ${weaponEntity.getTypeHTML("mb-1")}  
    ${weaponEntity.getSlotHTML("mb-1")}  
    ${weaponEntity.getEnhancersHTML()} 
  `;

  modal.set("headerContent", weaponEntity.getNameHTML("fs-2"));
  modal.set("content", weaponDetails);
  modal.toggle();
}
