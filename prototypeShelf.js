let data = [];

  let quantitySupplement_A = 0;  //1
  let quantitySupplement_A2 = 0; //1.1
  let quantitySupplement_B1 = 0;  //2
  let quantitySupplement_B2 = 0; //2.1
  let quantitySupplement_C = 0;
  let quantitySupplement_D = 0;
  let quantitySupplement_E = 0;
  let quantitySupplement_F = 0;
  let quantitySupplement_G = 0;
  let quantitySupplement_H = 0;
  let quantitySupplement_I = 0;
  let quantitySupplement_J = 0;
  let quantitySupplement_K = 0;
  let quantitySupplement_L = 0;

  let toggleEditable;

  let output = document.querySelector('.outputHere');

  let numberPanel = document.querySelector('.js-panelNumber');

  document.querySelector('.quantityDisplay').addEventListener('click', () => {
    numberPanel.style.display ="block";
    console.log('click')
    numberPanel.classList.add("css-panelNumber-active");
  })

  numberPanel.style.display = "block"
  
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


  const inputOneB1 = document.querySelector('.js-one-B1');
  const inputOneB2 = document.querySelector('.js-one-B2');
  const inputOneD = document.querySelector('.js-one-D');


  const inputB1 = document.querySelector('.js-input-B1');
  const inputB2 = document.querySelector('.js-input-B2');
  const inputD = document.querySelector('.js-input-D');


  inputOneB1.addEventListener('click',appearInputOne);
  inputOneB2.addEventListener('click',appearInputOne);
  inputOneD.addEventListener('click',appearInputOne);
  
  inputD.style.display = "none"; 
  inputB1.style.display = "none"; 
  inputB2.style.display = "none"; 
 
 function appearInputOne(){
  if (toggleEditable === 2){
    inputB1.style.display = "block";
    inputB2.style.display = "none"; 
    inputD.style.display = "none"; 
  }
  else if (toggleEditable === 2.1){
    inputB2.style.display = "block"; 
    inputD.style.display = "none"; 
    inputB1.style.display = "none"; 
  }
  else if (toggleEditable === 4){
   inputD.style.display = "block"; 
   inputB1.style.display = "none"; 
   inputB2.style.display = "none"; 
  }
}; 

  const bodyEvent = document.body.addEventListener('keydown',(event) => {
    if(event.key === 'Enter'){
      if (toggleEditable === 2){
      data.push({
            name: inputB1.value,
            quantity: quantitySupplement_B1
      });
    } 
    else if (toggleEditable === 2.1){
      data.push({
        name: inputB2.value,
        quantity: quantitySupplement_B2
       });
    }
    else if (toggleEditable === 4){
      data.push({
        name: inputD.value,
        quantity: quantitySupplement_D
       });
    }
      if (toggleEditable === 2){
        inputB1.style.display = "none"; 
        inputOneB1.innerHTML = inputB1.value;
        inputB1.value = '';
      }
      else if (toggleEditable === 2.1){
        inputB2.style.display = "none";
        inputOneB2.innerHTML = inputB2.value;
        inputB2.value = '';
      }
      else if (toggleEditable === 4){
        inputD.style.display = "none";
        inputOneD.innerHTML = inputD.value;
        inputD.value = '';
      }
      runData();
      console.log(data);
    } 
   }
  );
   
   const shelf = {
    B1: 'B1',
    B2: 'B2',
    D: 'D'
   };

   let toggleState;
   
  const shelf_B1 = document.querySelector('.shelf-B1')
  shelf_B1.addEventListener('click', () => {
    const hightLight_B1 = () => {
      shelf_B1.classList.add("shelf-active");
      shelf_B2.classList.remove("shelf-active");
      shelf_D.classList.remove("shelf-active");
      toggleState = shelf.B1;
      console.log(toggleState);
    };
    hightLight_B1();
  });

  const shelf_B2 = document.querySelector('.shelf-B2')
  shelf_B2.addEventListener('click', () => {
    const hightLight_B2 = () => {
      shelf_B2.classList.add("shelf-active");
      shelf_B1.classList.remove("shelf-active");
      shelf_D.classList.remove("shelf-active");
      toggleState = shelf.B2;
      console.log(toggleState);
    };
    hightLight_B2();
  });

  const shelf_D = document.querySelector('.shelf-D');
  shelf_D.addEventListener('click', () => {
    const hightLight_D = () => {
      shelf_D.classList.add("shelf-active");
      shelf_B1.classList.remove("shelf-active");
      shelf_B2.classList.remove("shelf-active");
      toggleState = shelf.D;
      console.log(toggleState);
    };
    hightLight_D();
  });

  let shelfQuantity_B1 = document.querySelector('.js-quantity-B1');
  let shelfQuantity_B2 = document.querySelector('.js-quantity-B2');
  let shelfQuantity_D = document.querySelector('.js-quantity-D');

  shelfQuantity_B1.value = '';
  shelfQuantity_B2.value = '';
  shelfQuantity_D.value = '';

  shelfQuantity_B1.innerHTML = `0`;
  shelfQuantity_B2.innerHTML = `0`;
  shelfQuantity_D.innerHTML = `0`;


  const buttonAdd = document.querySelectorAll('.js-button-plus-B, .js-button-plus-D, .js-button-plus');

  buttonAdd.forEach(add => {
    add.addEventListener('click',buttonPlus);
  }
  )
  function buttonPlus(){
    if (toggleState === shelf.B1){
    quantitySupplement_B1++;
    shelfQuantity_B1.innerHTML = `${quantitySupplement_B1}`;
    console.log(`quantitySupplement_B1 ${quantitySupplement_B1}`);
    } 
    else if (toggleState === shelf.B2){
    quantitySupplement_B2++;
    shelfQuantity_B2.innerHTML = `${quantitySupplement_B2}`;
    console.log(`quantitySupplement_B2 ${quantitySupplement_B1}`);
    }
    else if (toggleState === shelf.D){
      quantitySupplement_D++;
      shelfQuantity_D.innerHTML = `${quantitySupplement_D}`;
      console.log(quantitySupplement_D);
    }
    else {
      console.log('none select');
    }
  };

  const buttonSubtract = document.querySelectorAll('.js-button-minus-B, .js-button-minus-D');

  buttonSubtract.forEach(minus => {
    minus.addEventListener('click',buttonMinus); 
    })

    function buttonMinus(){
      if (toggleState === shelf.B1 && quantitySupplement_B1 > 0){
        quantitySupplement_B1--;
        shelfQuantity_B1.innerHTML = `${quantitySupplement_B1}`;
        console.log(quantitySupplement_B1);
      } 
      else if (toggleState === shelf.B2 && quantitySupplement_B2 > 0){
        quantitySupplement_B2--;
        shelfQuantity_B2.innerHTML = `${quantitySupplement_B2}`;
        console.log(quantitySupplement_B2);
      }
      else if (toggleState === shelf.D && quantitySupplement_D > 0){
        quantitySupplement_D--;
        shelfQuantity_D.innerHTML = `${quantitySupplement_D}`;
        console.log(quantitySupplement_D);
      }
      else {
        alert('Reach Limit');
    }
  };
