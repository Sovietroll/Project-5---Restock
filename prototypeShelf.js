let data = [];

  let quantitySupplement_A1 = 0;//1
  let quantitySupplement_A2 = 0;//1.1
  let quantitySupplement_B1 = 0;//2
  let quantitySupplement_B2 = 0;//2.1
  let quantitySupplement_C1 = 0;//3
  let quantitySupplement_C2 = 0;//3.1
  let quantitySupplement_D = 0;//4
  let quantitySupplement_D2 = 0;//4.1
  let quantitySupplement_E = 0;
  let quantitySupplement_F = 0;
  let quantitySupplement_G = 0;
  let quantitySupplement_H = 0;
  let quantitySupplement_I = 0;
  let quantitySupplement_J = 0;
  let quantitySupplement_K = 0;
  let quantitySupplement_L = 0;

  // TOGGLE ARRAY
  const shelf = {
    B1: 'B1',
    B2: 'B2',
    D: 'D',
    D2: 'D2'
    };
  

  let toggleEditable;

  let output = document.querySelector('.outputHere');

  //NUMBERS POP UP
  let numberPanel = document.querySelector('.js-panelNumber');
  let togglePanelOnOff = true;

  const numbersD2 = document.querySelector('.quantityDisplay');

  let enterQuantity = document.querySelector('.js-EnterPanelNumber');
  enterQuantity.addEventListener('click', ()=> {
    enterQuantity.value = quantitySupplement_D2;

    console.log(enterQuantity.value);
    console.log(data);
    numbersD2.innerHTML = `${enterQuantity.value}`;

    data.push({
      name: 'test',
      quantity: enterQuantity.value
    });
    runData();
  });

  numbersD2.addEventListener('click', () => {
      togglePanelOnOff? (
      console.log('on numberPanel'),
      numberPanel.classList.add("css-panelNumber-active"),
      numberPanel.classList.remove("css-panelNumber"),
      togglePanelOnOff = false
      )
      :
      (
      console.log('off numberPanel'),
      numberPanel.classList.add("css-panelNumber"),
      numberPanel.classList.remove("css-panelNumber-active"),
      togglePanelOnOff = true 
      )
  })

  
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

  //STATEMENT ITEM HERE
  const OneB1 = document.querySelector('.js-one-B1');
  const OneB2 = document.querySelector('.js-one-B2');
  const OneD = document.querySelector('.js-one-D');
  const OneD2 = document.querySelector('.js-one-D2');
  
  const inputs = [OneB1, OneB2, OneD, OneD2];
  inputs.forEach(element => {
    element.addEventListener('click',appearInputOne);
  })

  //INPUT HERE
  const inputB1 = document.querySelector('.js-input-B1');
  const inputB2 = document.querySelector('.js-input-B2');
  const inputD = document.querySelector('.js-input-D');
  const inputD2 = document.querySelector('.js-input-D2');
  
  inputD.style.display = "none"; 
  inputD2.style.display = "none";
  inputB1.style.display = "none"; 
  inputB2.style.display = "none"; 
 
 function appearInputOne(){
  if (toggleState === shelf.B1 && toggleEditable === 2){
    inputB1.style.display = "block";
    inputB2.style.display = "none"; 
    inputD.style.display = "none"; 
  }
  else if (toggleState === shelf.B2 && toggleEditable === 2.1){
    inputB2.style.display = "block"; 
    inputD.style.display = "none"; 
    inputB1.style.display = "none"; 
  }
  else if (toggleState === shelf.D && toggleEditable === 4){
   inputD.style.display = "block"; 
   inputB1.style.display = "none"; 
   inputB2.style.display = "none"; 
  }
  else if (toggleState === shelf.D2 && toggleEditable === 4.1){
    inputD2.style.display = "block";
    inputD.style.display = "none"; 
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
   

   let toggleState;
   
  const shelf_B1 = document.querySelector('.shelf-B1')
  shelf_B1.addEventListener('click', () => {
    const hightLight_B1 = () => {
      shelf_B1.classList.add("shelf-active");
      shelf_B2.classList.remove("shelf-active");
      shelf_D.classList.remove("shelf-active");
      shelf_D2.classList.remove("shelf-D2-active");

      toggleEditable = 2;
      toggleState = shelf.B1;
      console.log(toggleState);
      console.log(`toggleEditable ${toggleEditable}`);
    };
    hightLight_B1();
  });

  const shelf_B2 = document.querySelector('.shelf-B2')
  shelf_B2.addEventListener('click', () => {
    const hightLight_B2 = () => {
      shelf_B2.classList.add("shelf-active");
      shelf_B1.classList.remove("shelf-active");
      shelf_D.classList.remove("shelf-active");
      shelf_D2.classList.remove("shelf-D2-active");

      toggleEditable = 2.1;
      toggleState = shelf.B2;
      console.log(toggleState);
      console.log(`toggleEditable ${toggleEditable}`);
    };
    hightLight_B2();
  });

  const shelf_D = document.querySelector('.shelf-D');
  shelf_D.addEventListener('click', () => {
    const hightLight_D = () => {
      shelf_D.classList.add("shelf-active");
      shelf_B1.classList.remove("shelf-active");
      shelf_B2.classList.remove("shelf-active");
      shelf_D2.classList.remove("shelf-D2-active");
      
      toggleEditable = 4;
      toggleState = shelf.D;
      console.log(toggleState);
      console.log(`toggleEditable ${toggleEditable}`);
    };
    hightLight_D();
  });
  
  
  const shelf_D2 = document.querySelector('.shelf-D2');

  numbersD2.addEventListener('click', () => {
    const hightLight_D2 = () => {
      shelf_D2.classList.add("shelf-D2-active");
      shelf_B1.classList.remove("shelf-active");
      shelf_B2.classList.remove("shelf-active");
      shelf_D.classList.remove("shelf-active");

      toggleEditable = 4.1;
      toggleState = shelf.D2;
      console.log(toggleState);
      console.log(`toggleEditable ${toggleEditable}`);
    };
    hightLight_D2();
  });

  let shelfQuantity_B1 = document.querySelector('.js-quantity-B1');
  let shelfQuantity_B2 = document.querySelector('.js-quantity-B2');
  let shelfQuantity_D = document.querySelector('.js-quantity-D');
  let shelfQuantity_D2 = document.querySelector('.panelNumber-Quantity');

  shelfQuantity_B1.value = '';
  shelfQuantity_B2.value = '';
  shelfQuantity_D.value = '';

  shelfQuantity_B1.innerHTML = `0`;
  shelfQuantity_B2.innerHTML = `0`;
  shelfQuantity_D.innerHTML = `0`;
  shelfQuantity_D2.innerHTML = '0';

  //PLUS BUTTON
  const buttonAdd = document.querySelectorAll('.js-button-plus-B, .js-button-plus-D, .js-button-plus-D2');

  buttonAdd.forEach(add => {
    add.addEventListener('click',buttonPlus);
  }
  );
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
    else if (toggleState === shelf.D2){
      quantitySupplement_D2++;
      shelfQuantity_D2.innerHTML = `${quantitySupplement_D2}`;
      console.log(quantitySupplement_D2);

      //
     

    }
    else {
      console.log('none select');
    }
  };

//SUBTRACT BUTTON
  const buttonSubtract = document.querySelectorAll('.js-button-minus-B, .js-button-minus-D,.js-button-minus-D2');

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
      else if (toggleState === shelf.D &&   quantitySupplement_D > 0){
        quantitySupplement_D--;
        shelfQuantity_D.innerHTML = `${quantitySupplement_D}`;
        console.log(quantitySupplement_D);
      }
      else if (toggleState === shelf.D2 &&   quantitySupplement_D2 > 0){
        quantitySupplement_D2--;
        shelfQuantity_D2.innerHTML = `${quantitySupplement_D2}`;
        console.log(quantitySupplement_D2);
      }
      else {
        alert('Reach Limit');
    }
  };
