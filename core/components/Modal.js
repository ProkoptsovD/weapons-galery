export class Modal {
  /**
   * @param {Object} config
   * @param {string} config.className
   */
  constructor({ className } = {}) {
    this.className = className;
    this.components = {};
    this.visibilityClass = "visible";

    this.toggle = this.toggle.bind(this);
    this.show = this.show.bind(this);
    this.close = this.close.bind(this);
    this.add = this.add.bind(this);

    this.nodes = {};

    this.#init();
  }

  #init() {
    this.nodes.header = document.createElement("header");
    this.nodes.footer = document.createElement("footer");
    this.nodes.content = document.createElement("div");
    this.nodes.headerCloseButton = document.createElement("button");
    this.nodes.actionButton = document.createElement("button");
    this.nodes.headerContent = document.createElement("div");
    this.nodes.backdrop = document.createElement("div");

    this.#configureHeaderCloseButton();
    this.#configureHeader();
    this.#configureContent();
    this.#configureActionButton();
    this.#configureFooter();
    this.#configureBackdrop();
  }

  #configureHeader() {
    const { headerContent, header, headerCloseButton } = this.nodes;

    header.classList.add("modal__header", "text-center", "pb-2");
    header.append(headerContent, headerCloseButton);
  }
  #configureHeaderCloseButton() {
    const { headerCloseButton } = this.nodes;

    headerCloseButton.type = "button";
    headerCloseButton.textContent = "X";
    headerCloseButton.classList.add("modal__header-close");
  }
  #configureFooter() {
    const { footer, actionButton } = this.nodes;

    footer.classList.add("modal__footer", "mt-auto", "pt-2", "pb-2");
    footer.append(actionButton);
  }
  #configureContent() {
    const { content } = this.nodes;

    content.classList.add("modal__content", "flex", "flex-col", "pt-2", "pb-2");
  }
  #configureActionButton() {
    const { actionButton } = this.nodes;

    actionButton.type = "button";
    actionButton.textContent = "Ok";
    actionButton.classList.add("button", "btn-primary", "modal__action-button");
  }
  #configureBackdrop() {
    const { backdrop } = this.nodes;

    backdrop.classList.add("modal__backdrop");
    backdrop.addEventListener("click", (e) => this.#onClick(e));
  }
  #onClick(event) {
    const { backdrop, headerCloseButton, actionButton } = this.nodes;

    const { target } = event;
    const needClose =
      target === headerCloseButton ||
      target === actionButton ||
      target === backdrop;

    if (needClose) {
      this.close();
    }
  }

  /**
   * @param {'header' | 'footer' | 'content' | 'headerContent'} componentName
   */
  add(componentName) {
    const component = this.nodes[componentName];
    const hasAddedComponent = this.components[componentName];

    if (component && !hasAddedComponent) {
      this.components[componentName] = component;
    }

    return this;
  }

  /**
   * @param {'header' | 'footer' | 'content' | 'actionButton' } componentName
   * @param {string} html
   */
  set(componentName, html) {
    const component = this.nodes[componentName];

    if (component) {
      component.innerHTML = html;
    }

    return this;
  }

  show() {
    const { backdrop } = this.nodes;

    if (backdrop) {
      backdrop.classList.add(this.visibilityClass);
    }
  }
  close() {
    const { backdrop } = this.nodes;

    if (backdrop) {
      backdrop.classList.remove(this.visibilityClass);
    }
  }
  toggle() {
    const { backdrop } = this.nodes;

    if (backdrop) {
      backdrop.classList.toggle(this.visibilityClass);
    }
  }

  render() {
    const { backdrop } = this.nodes;
    const wrapper = document.createElement("div");
    const modalComponents = Object.values(this.components);

    wrapper.classList.add("modal", "rounded-md", "p-4", "flex", "flex-col");
    wrapper.append(...modalComponents);
    backdrop.append(wrapper);

    return backdrop;
  }
}
