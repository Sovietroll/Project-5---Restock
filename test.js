const allFunctions = [
  { id: 'A1', func: HideA1 },
  { id: 'A2', func: HideA2 },
  { id: 'B1', func: HideB1 },
  { id: 'B2', func: HideB2 },
  { id: 'C1', func: HideC1 },
  { id: 'C2', func: HideC2 },
];

function hideOtherPanel(panelID) {
  allFunctions.forEach(item => {
    if (panelID === item.id) {
      // Do nothing or add specific logic for this panel
    } else {
      item.func(); // Call the hide function for other panels
    }
  });
}

shelfQuantity_A1.addEventListener('click', () => {
  if (upDownStates.A1 === 0 && flipButtons === Switch.NEUTRAL) {
    clickShelfA1();
    hideOtherPanel('A1');
    upDownStates.A1 = 1;
  } else if (upDownStates.A1 === 1) {
    unclickShelfA1();
    upDownStates.A1 = 0;
  }
});
