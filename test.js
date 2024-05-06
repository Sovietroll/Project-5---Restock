const allDIV = {};

for (let letter of ['A', 'B']) {
  for (let num of [1, 2]) {
    const className = `.js-expDIVDate${letter}${num}`;
    const element = document.querySelector(className);

    if (element) {
      const variableName = `DIVexp${letter}${num}`;
      allDIV[variableName] = element;
    } else {
      console.error(`Element not found for class ${className}`);
    }
  }
}
