// function stickNavOnScroll() {
//   window.addEventListener("scroll", e => {
//     if (window.scrollY > 78) {
//       document.getElementsByTagName("nav")[0].classList.add("fixed");
//     }
//   });
// }

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
