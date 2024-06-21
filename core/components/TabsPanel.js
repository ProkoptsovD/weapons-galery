export class TabsPanel {
  /**
   * @param {Object} config
   * @param {string} config.className
   */
  constructor({ className = "" } = {}) {
    this.panes = new Map();
    this.nodes = {};
    this.activePaneClassName = "active-content";
    this.activeTabClassName = "active-tab";
    this.className = className;

    this.#init();
  }

  #init() {
    this.nodes.tabsPanel = document.createElement("div");

    this.#configureTabsPanel();
  }
  #configureTabsPanel() {
    this.nodes.tabsPanel.classList.add(this.className);
  }
  #initTabsPanel({ tabs, panels }) {
    const { tabsPanel } = this.nodes;

    tabsPanel.addEventListener("click", (event) => {
      const { target: targetTab } = event;

      if (this.panes.has(targetTab)) {
        const targetPanel = this.panes.get(targetTab);

        tabs.forEach((tab) => tab.classList.remove(this.activeTabClassName));
        panels.forEach((panel) =>
          panel.classList.remove(this.activePaneClassName)
        );

        targetTab.classList.add(this.activeTabClassName);
        targetPanel.classList.add(this.activePaneClassName);
      }
    });
  }
  /**
   * @param {string} tab
   * @param {HTMLElement | string} panel
   */
  add(tabName, panelContent) {
    const tab = document.createElement("div");
    const panel = document.createElement("div");

    if (typeof panelContent === "string") {
      panel.innerHTML = panelContent;
    } else {
      panel.append(panelContent);
    }

    this.panes.set(tab, panel);

    tab.classList.add("tab");
    tab.textContent = tabName;
    panel.classList.add("tab-content");

    if (this.panes.size === 1) {
      tab.classList.add(this.activeTabClassName);
      panel.classList.add(this.activePaneClassName);
    }

    return this;
  }

  render() {
    const { tabsPanel } = this.nodes;
    const panels = Array.from(this.panes.values());
    const tabs = Array.from(this.panes.keys());

    const tabContainer = document.createElement("div");
    tabContainer.classList.add("tab-container");

    tabContainer.append(...tabs);
    tabsPanel.append(tabContainer, ...panels);

    this.#initTabsPanel({ tabs, panels });

    return tabsPanel;
  }
}
