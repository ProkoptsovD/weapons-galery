export class BackgroundNoise {
  /**
   * @param {{ container: HTMLElement }} config
   */
  constructor({ container } = { container: document.body }) {
    this.container = container;
  }

  render() {
    const html = `
      <div class="noise"></div>
    `;
    this.container.classList.add("noise_container");

    this.container.insertAdjacentHTML("beforeend", html);
  }
}
