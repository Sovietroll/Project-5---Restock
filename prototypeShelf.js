let data = [];

  let quantitySupplement = 0;

  let toggleEditable = true;

  let output = document.querySelector('.outputHere');
  
  function runData(){
  output.innerHTML = '';

  data.forEach((item,index) => {
    const text = `<div class="css-shelf-list">
    <button class="js-remove-button">remove</button>
    ${item.name} x${item.quantity}
    </div>`;
    output.innerHTML += text;
  })

   //REMOVE BUTTON
    document.querySelectorAll('.js-remove-button').forEach((removeButton,index) => {
    removeButton.addEventListener('click', () => {;
      data.splice(index,1);
      runData();
      })
      },console.log(`deleted`,data)
      );
 };


  let inputOne = document.querySelector(".js-one-D");

  const input = document.querySelector('.js-input-D');
  input.style.display = "none"; 

  inputOne.addEventListener('click', appearInputOne);

  function appearInputOne(){
  input.style.display = "block"; 
  toggleEditable = false;
  inputOne.innerHTML = '';
  }; 
  
  const bodyEvent = document.body.addEventListener('keydown',(event) => {
    if(event.key === 'Enter'){
      data.push({
        name: input.value,
        quantity: quantitySupplement //quantity here permanent numbers 
      });
      inputOne.innerHTML += input.value; //inputOne innerHTML

      input.value = '';
      quantitySupplement = 0;
      input.style.display = "none";
      runData();
      console.log(data);
    } 
    
    });
   

  let shelfQuantity_B = document.querySelector('.js-quantity-B');

  let shelfQuantity_D = document.querySelector('.js-quantity-D');


  shelfQuantity_D.value = '';
  shelfQuantity_B.value = '';

  shelfQuantity_D.innerHTML = `0`;
  shelfQuantity_B.innerHTML = `0`;


  const buttonAdd = document.querySelectorAll('.js-button-plus-B, .js-button-plus-D');

  buttonAdd.forEach(add => {
    add.addEventListener('click',buttonPlus);
  }
  )
  function buttonPlus(){
    quantitySupplement++;
    shelfQuantity_B.innerHTML = `${quantitySupplement}`;
    console.log('plus');
    console.log(quantitySupplement);

  };

  const buttonSubtract = document.querySelectorAll('.js-button-minus-B, .js-button-minus-D');

  buttonSubtract.forEach(minus => {
    minus.addEventListener('click',buttonMinus); 
    })

    function buttonMinus(){
      quantitySupplement > 0?
      (quantitySupplement--,
      shelfQuantity_D.innerHTML = `${quantitySupplement}`,
      console.log('minus'),
     console.log(quantitySupplement)
      )
      : 
      alert('Reach Limit');
    }

