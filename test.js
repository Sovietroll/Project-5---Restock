if (loc === 'D1') {
  if (toggleHighlight === Hili.on) {
    // If toggleHighlight is 'Hili.on', remove the "shelf-active" class
    mainShelfD1.classList.remove("shelf-active");
    console.log(toggleHighlight);
    toggleHighlight = Hili.off; // Update toggleHighlight to 'Hili.off'
  } else if (toggleHighlight === Hili.off) {
    // If toggleHighlight is 'Hili.off', add the "shelf-active" class
    mainShelfD1.classList.add("shelf-active");
    console.log(toggleHighlight);
    toggleHighlight = Hili.null; // Update toggleHighlight to 'Hili.null'
  }
}
