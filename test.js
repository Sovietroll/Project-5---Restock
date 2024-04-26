const shelves = {
  'A1': mainShelfA1,
  'A2': mainShelfA2,
  'B1': mainShelfB1,
  'B2': mainShelfB2
};

if (shelves[loc]) {
  shelves[loc].classList.toggle("shelf-active");
}
