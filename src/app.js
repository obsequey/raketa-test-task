const cards = [
  {
    img: "http://placekitten.com/200/300",
    name: "Эконом",
    sizes: [90, 70, 180],
    square: 0.63,
    furniture: [],
    price: 100
  },
  {
    img: "http://placekitten.com/200/300",
    name: "Эконом плюс",
    sizes: [90, 100, 180],
    square: 0.9,
    furniture: ["bed", "claw"],
    price: 200
  },
  {
    img: "http://placekitten.com/200/300",
    name: "Комфорт",
    sizes: [100, 125, 180],
    square: 1.13,
    furniture: ["bed", "claw", "ball"],
    price: 250
  },
  {
    img: "http://placekitten.com/200/300",
    name: "Сьют",
    sizes: [125, 125, 180],
    square: 1.56,
    furniture: ["bed", "claw", "ball"],
    price: 350
  },
  {
    img: "http://placekitten.com/200/300",
    name: "Люкс",
    sizes: [160, 160, 180],
    square: 2.56,
    furniture: ["bed", "claw", "ball", "house"],
    price: 500
  },
  {
    img: "http://placekitten.com/200/300",
    name: "Супер-Люкс",
    sizes: [180, 160, 180],
    square: 2.88,
    furniture: ["bed", "claw", "ball", "house"],
    price: 600
  }
];

const furnitureKeys = {
  none: "Пустой номер",
  bed: "Лежак",
  claw: "Когтеточка",
  ball: "Игровой-комплекс",
  house: "Домик"
};

// RENDER
function clearOldCards() {
  const optionsNode = document.getElementById("cards-list");
  optionsNode.innerHTML = "";
}

function renderCardsToPage(cards) {
  clearOldCards();

  cards.forEach((card, i) => {
    const optionsNode = document.getElementById("cards-list");
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.id = `card-${i}`;
    newCard.innerHTML = `
      <div class="card__image-container">
        <img src="${card.img}" alt="котик" />
      </div>
      <div class="card__body">
        <h2>${card.name}</h2>
        <ul class="card__body__options">
          <li class="card__body__options__size">
            Размеры (ШхГхВ) - <span>${card.sizes.join("x")} см</span>
          </li>
          <li class="card__body__options__square">
            Площадь - <span>${card.square} м2</span>
          </li>
          <li class="card__body__options__furniture">
            Оснащение номера
            <ul class="card__body__options__furniture__list">
              
            </ul>
          </li>
          <li class="card__body__options__price">
            Цена за сутки: <span>${card.price}₽</span>
          </li>
        </ul>
        <button>
          Забронировать
          <!-- paw -->
          <div class="paw">
            <svg
              width="21"
              height="18"
              viewBox="0 0 21 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.4255 6.66211C13.6257 8.26781 14.1025 12.9548 17.1394 12.9548C18.4492 12.9548 19.5828 11.9701 20.0875 10.7113C21.2531 7.80396 18.8292 5.28303 16.4255 6.66211Z"
                fill="#FF7236"
              />
              <path
                d="M13.5497 7.24252C16.9089 7.24252 17.9147 1.53816 14.7233 0.60034C13.2692 0.173202 11.6158 1.1981 11.0848 3.07162C10.4889 5.17154 11.6612 7.24252 13.5497 7.24252Z"
                fill="#FF7236"
              />
              <path
                d="M12.6853 17.3964C12.2188 17.2674 11.3908 17.1844 10.5242 17.1724C9.60809 17.1589 8.64896 17.2246 8.02839 17.3964C6.35233 17.8633 4.07172 16.7337 4.57211 14.3876C5.03496 12.2187 6.69798 12.3423 7.09124 10.2868C7.48748 8.2095 9.02735 7.20696 10.5242 7.28533C11.9095 7.35805 13.2578 8.35706 13.6252 10.2873C14.0162 12.3442 15.6757 12.2194 16.1379 14.3876C16.6401 16.7356 14.3547 17.8591 12.6853 17.3964Z"
                fill="#FF7236"
              />
              <path
                d="M7.63718 7.24269C8.58737 7.24269 9.40342 6.69082 9.85688 5.84619C11.2049 3.33466 8.99093 -0.142223 6.46334 0.602387C3.26643 1.5428 4.2798 7.24269 7.63718 7.24269Z"
                fill="#FF7236"
              />
              <path
                d="M6.11888 11.0872C7.19749 8.44816 4.64082 5.22449 2.19906 6.2388C-0.74218 7.46044 0.555041 12.7294 3.78905 12.7294C4.82692 12.7294 5.7089 12.0905 6.11888 11.0872Z"
                fill="#FF7236"
              />
              <path
                d="M12.6854 17.3964C12.2189 17.2674 11.3909 17.1843 10.5243 17.1723V7.28528C11.9096 7.358 13.2579 8.35701 13.6253 10.2873C14.0162 12.3441 15.6758 12.2194 16.138 14.3876C16.6402 16.7355 14.3548 17.859 12.6854 17.3964Z"
                fill="#FF7236"
              />
            </svg>
          </div>
        </button>
      </div>
    `;
    optionsNode.appendChild(newCard);
  });
}

function renderCatFurniture(cards) {
  cards.forEach((card, i) => {
    const furnitureList = document.querySelector(
      `#card-${i} .card__body__options__furniture__list`
    );
    if (card.furniture.length > 0) {
      card.furniture.forEach(item => {
        const furnitureItem = document.createElement("li");
        furnitureItem.classList.add(item);
        furnitureList.appendChild(furnitureItem);
      });
    } else {
      const noFurnitureItems = document.createElement("li");
      noFurnitureItems.classList.add("none");
      furnitureList.appendChild(noFurnitureItems);
    }
  });
}

renderCardsToPage(cards);
renderCatFurniture(cards);

function showResetButton() {
  const filterCheckboxes = document.querySelectorAll(
    ".filter input[type='checkbox']"
  );
  const filterCheckboxesArray = Array.from(filterCheckboxes);
  const resetButton = document.querySelector(".filter .reset");

  filterCheckboxes.forEach((checkbox, i) => {
    checkbox.addEventListener("click", () => {
      if (filterCheckboxesArray.some((checkbox, i) => checkbox.checked)) {
        resetButton.classList.add("shown");
      } else {
        resetButton.classList.remove("shown");
      }
    });
  });
}

showResetButton();
