if (keys.includes('itemD1')) {
  itemNameHTMLD1.innerHTML = savedOutput.itemD1;
  shelfQuantity_D1.innerHTML = `x${savedOutput.quantityD1}`;
  console.log('run line 1');
  console.log(keys.includes('itemD1'));
} else if (Object.keys(savedOutput).length === 0) { // Check if object is empty
  itemNameHTMLD2.innerHTML = 'empty';
  console.log('Object is empty');
}
