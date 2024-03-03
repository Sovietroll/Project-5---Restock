let data = [{
    name: "",
    quantity: 0
  }];

  console.log(data[0]);


  let quantitySupplement = 0;

  let toggleEditable = true;

  let output = document.querySelector('.outputHere');
  
  function runData(){
  output.innerHTML = '';

  data.forEach((item,index) => {
    const text = `<p>
    ${item.name} ${item.quantity}
    <button class="js-remove-button">remove</button>
    </p>`;
    output.innerHTML += text;
  })

   //REMOVE BUTTON
    document.querySelectorAll('.js-remove-button').forEach((removeButton,index) => {
    removeButton.addEventListener('click', () => {;

    data.splice(index,1);
    runData();
    })
    } 
    );
    console.log(`deleted`,data);
 };

  let nameLineOne = document.querySelector('.js-lineOne');

  let inputOne = document.querySelector(".js-one");

  const input = document.querySelector('.js-input');




  inputOne.addEventListener('click', appearInputOne);

  function appearInputOne(){
  input.style.display = "block"; 
  toggleEditable = false;
  }; 
  
  const bodyEvent = document.body.addEventListener('keydown',(event) => {
    if(event.key === 'Enter'){
      data.push({
        name: input.value,
        quantity: quantitySupplement //quantity here permanent numbers 
      });
      input.value = '';
      quantitySupplement = 0;
      input.style.display = "none";
      runData();
      console.log(data);
      console.log('runs ONE event key');
    } 
    
    });
   

  let shelfQuantity = document.querySelector('.js-quantity');

  shelfQuantity.value = '';

  shelfQuantity.innerHTML = `0`;
  
  shelfQuantity.textContent = data.quantity;

  document.querySelector('.js-button-plus').addEventListener('click',buttonPlus);

  document.querySelector('.js-button-minus').addEventListener('click',buttonMinus);

  function buttonPlus(){
    quantitySupplement++;
    shelfQuantity.innerHTML = `${quantitySupplement}`;
    console.log(shelfQuantity);
  };

  function buttonMinus(){
    quantity > 0?
    (quantitySupplement--,
    shelfQuantity.innerHTML = `${quantitySupplement}`,
    console.log(shelfQuantity.value))
    : 
    alert('Reach Limit'); 
  };