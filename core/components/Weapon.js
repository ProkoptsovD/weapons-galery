import { capitalize } from "../utils/capitalize.js";

/**
 * Weapon enhancer model
 *
 * @typedef {Object} Enhancer
 * @property {string} name
 * @property {number} count
 * @property {string} delimiter
 */

/**
 * Weapon model
 *
 * @typedef {Object} WeaponConfig
 * @property {string} id
 * @property {string} image
 * @property {string} name
 * @property {string} description
 * @property {string} slot
 * @property {number} damage
 * @property {number} weight
 * @property {number} cost
 * @property {Array.<Enhancer>|null} enhancers
 */

/**
 * Weapon button onclick handler
 *
 * @callback onClick
 * @param {Weapon} Weapon
 * @param {MouseEvent} event
 */

export class Weapon {
  /**
   * @param {WeaponConfig} weapon
   * @param {Object} options
   * @param {onClick | null} [options.onClick]
   */
  constructor(weaponConfig = {}, options = {}) {
    const { onClick } = options;
    const {
      id,
      image,
      name,
      description = "",
      type,
      slot,
      damage,
      weight,
      cost,
      enhancers,
    } = weaponConfig;

    this.id = id;
    this.image = image;
    this.name = name;
    this.description = description;
    this.type = type;
    this.slot = slot;
    this.damage = damage;
    this.weight = weight;
    this.cost = cost;
    this.enhancers = enhancers;
    this.onClick = onClick;
    this.getNameHTML = this.getNameHTML.bind(this);
    this.getTypeHTML = this.getTypeHTML.bind(this);
    this.getSlotHTML = this.getSlotHTML.bind(this);
    this.getImageHTML = this.getImageHTML.bind(this);
    this.getEnhancersHTML = this.getEnhancersHTML.bind(this);
    this.getDescriptionHTML = this.getDescriptionHTML.bind(this);

    this.#init();
  }

  #init() {
    this.nodes = {};
    this.nodes.button = document.createElement("button");
    this.nodes.enhancers = document.createElement("div");
    this.nodes.description = document.createElement("p");
    this.nodes.name = document.createElement("h3");
    this.nodes.type = document.createElement("p");
    this.nodes.slot = document.createElement("p");
    this.nodes.image = document.createElement("div");

    this.#configureName();
    this.#configureSlot();
    this.#configureType();
    this.#configureImage();
    this.#configureEnhancers();
    this.#configureDescription();
    this.#configureButton();
  }

  #configureName() {
    this.nodes.name.textContent = this.name;
  }
  #configureSlot() {
    this.nodes.slot.innerHTML = `
      <span class="color-secondary-100">Slot: </span>
      <span>${capitalize(this.slot)}</span>
    `;
  }
  #configureType() {
    this.nodes.type.innerHTML = `
      <span class="color-secondary-100">Type: </span>
      <span>${capitalize(this.type)}</span>
    `;
  }
  #configureImage() {
    const { image } = this.nodes;
    image.classList.add("weapon-card__image");
    image.style.setProperty("--background", `url('${this.image}')`);
  }

  #configureEnhancers() {
    this.nodes.enhancers.innerHTML = this.enhancers?.length
      ? `
        <p class="color-secondary-100 mb-1">Enhancers: </p>
        <ul class="pl-4">
          ${this.enhancers
            .map(
              (enhancer) =>
                `<li>
                  <span>${enhancer.count}</span>
                  <span>${enhancer.delimiter}</span>
                  <span>${enhancer.name}</span>
                </li>`
            )
            .join("")}
        </ul>
      `
      : "";
  }

  #configureDescription() {
    this.nodes.description.innerHTML = `
      <span>
        ${this.description}
      </span>
    `;
  }
  #configureButton() {
    const { button } = this.nodes;
    button.type = "button";
    button.classList.add("button", "btn-primary");
    button.textContent = "Select";

    button.addEventListener("click", (e) => {
      console.log(e);
      this.onClick(this, e);
    });
  }

  #toHTML(className, node) {
    const el = this.nodes[node];

    if (className.length > 0) {
      el?.classList?.add(...className);
    }

    return el?.outerHTML ?? "";
  }

  getNameHTML(...className) {
    return this.#toHTML(className, "name");
  }
  getSlotHTML(...className) {
    return this.#toHTML(className, "slot");
  }
  getTypeHTML(...className) {
    return this.#toHTML(className, "type");
  }
  getImageHTML(...className) {
    return this.#toHTML(className, "image");
  }
  getEnhancersHTML(...className) {
    return this.#toHTML(className, "enhancers");
  }
  getDescriptionHTML(...className) {
    return this.#toHTML(className, "description");
  }
  getButtonHTML(...className) {
    return this.#toHTML(className, "button");
  }

  render() {
    const html = `
      <article class="weapon-card p-5 flex flex-col rounded carousel-image">
        ${this.getImageHTML()}
        ${this.getNameHTML("weapon-card__name", "text-center", "mb-4")}
      </article>
    `;

    return html;
  }
}
