const allFunctions = [
    { id: 'A1', func: HideA1 },
    { id: 'A2', func: HideA2 },
    { id: 'B1', func: HideB1 },
    { id: 'B2', func: HideB2 },
    // Add other functions here
  ];
  
  function callAllFunctions(panelID) {
    allFunctions.forEach(item => {
      if (panelID === item.id) {
        item.func(); // Call the function only if the IDs match
      } else {
        // Hide logic for other panels
        // For example:
        // item.func(); // Call hide function for other panels
      }
    });
  }
  
  // Example usage
  const panelID = 'A1'; // Assuming you have a panel ID
  callAllFunctions(panelID);
  