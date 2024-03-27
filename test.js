function runData() {
  output.innerHTML = '';
  data.forEach((item, index) => {
    const text = `
      <div class="css-shelf-list">
        <div class="css-shelf-list-NAME">
          <div class="list-NAME">
            ${item.name}
          </div>
        </div>
        <div class="css-shelf-list-QUANTITY">
          <div class="list-QUANTITY">
            x${item.quantity}
          </div>
        </div>
        <button class="js-remove-button">remove</button>
      </div>
    `;
    output.innerHTML += text;
  });

  document.querySelectorAll('.css-shelf-list').forEach((highlight, index) => {
    let tryOnce = false;
    highlight.addEventListener('click', () => {
      tryOnce = !tryOnce;
      highlight.classList.toggle("css-shelf-HIGHLIGHT", tryOnce);
      console.log(tryOnce);
    });
  });
}
