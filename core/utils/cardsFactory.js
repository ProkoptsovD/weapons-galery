import { cardPopup } from "../components/card-popup.js";

export function cardsFactory(data) {
  const cardList = data.map((item) => {
    const listItem = document.createElement("li");
    const html = cardPopup("gallery-popup", item);

    listItem.insertAdjacentHTML("beforeend", item.render());
    listItem.appendChild(html);

    return listItem;
  });

  return cardList;
}
