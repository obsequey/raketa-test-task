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

// stickNavOnScroll();

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
