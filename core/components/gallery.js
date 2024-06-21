import { BREAKPOINTS } from "../utils/breakpoints.js";

/**
 * @param {Object} props
 * @param {Array.<HTMLElement>} props.children
 * @returns
 */
export function gallery({ children }) {
  const gallery = document.createElement("div");

  function render(template = [1, 1, 1, 1, 1]) {
    const CHUNK_SIZE = template.length;

    const templates = Array.from(
      { length: Math.ceil(children.length / CHUNK_SIZE) },
      () => [...template]
    );

    const lists = Array.from(
      { length: Math.ceil(children.length / CHUNK_SIZE) },
      (_, index) => {
        const start = index * CHUNK_SIZE;
        const end = start + CHUNK_SIZE;

        const chunk = children.slice(start, end);
        const listEl = document.createElement("ul");
        listEl.dataset.order = index % 2 > 0 ? "odd" : "even";
        listEl.classList.add("gallery", "column-gap-6");
        listEl.style.setProperty("--template", template.join("fr ") + "fr");
        listEl.append(...chunk);

        return listEl;
      }
    );

    lists.forEach((listEl, index) => {
      Array.from(listEl.children).forEach((child, childIndex) => {
        child.addEventListener("mouseenter", (e) => {
          templates[index][childIndex] = 1.5;
          const gridTemplateColumns = templates[index].join("fr ") + "fr";
          gallery.classList.add("disabled");
          e.target.classList.add("active");

          listEl.style.setProperty("--template", gridTemplateColumns);
        });
        child.addEventListener("mouseleave", (e) => {
          templates[index][childIndex] = 1;

          const gridTemplateColumns = templates[index].join("fr ") + "fr";
          gallery.classList.remove("disabled");
          e.target.classList.remove("active");

          listEl.style.setProperty("--template", gridTemplateColumns);
        });
      });
    });

    gallery.classList.add(
      "gallery__container",
      "flex",
      "flex-col",
      "row-gap-10",
      "p-4",
      "pb-6",
      "pt-8"
    );
    gallery.append(...lists);

    return gallery;
  }

  window.addEventListener("resize", () => {
    const template = getTemplate();
    gallery.innerHTML = "";
    render(template);
  });

  const template = getTemplate();
  return render(template);
}

function getTemplate() {
  const width = window.innerWidth;
  const template = [1, 1, 1, 1, 1];

  if (width < BREAKPOINTS.mobile) {
    template.length = 1;
  } else if (width >= BREAKPOINTS.mobile && width < BREAKPOINTS.mobileMd) {
    template.length = 2;
  } else if (width >= BREAKPOINTS.mobileMd && width < BREAKPOINTS.tablet) {
    template.length = 3;
  } else if (width >= BREAKPOINTS.tablet && width < BREAKPOINTS.laptop) {
    template.length = 4;
  }

  return template;
}
