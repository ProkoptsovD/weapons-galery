/**
 * @param {string} className
 * @param {Object} entity
 * @param {(...classes: Array.<string>) => string} entity.getDescriptionHTML
 * @param {(...classes: Array.<string>) => string} entity.getButtonHTML
 */
export function cardPopup(className, entity) {
  const containerEl = document.createElement("div");
  containerEl.classList.add(className);
  containerEl.insertAdjacentHTML("beforeend", entity.getDescriptionHTML());
  containerEl.appendChild(entity.nodes.button);

  return containerEl;
}
