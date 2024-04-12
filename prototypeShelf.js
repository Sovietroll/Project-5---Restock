let data = JSON.parse(localStorage.getItem('savedObjects')) || [];

let output = document.querySelector('.outputHere');
runData();

const savedOutput = JSON.parse(localStorage.getItem('itemName')) || [
  {itemNameA1:'', quantityA1: ''}, 
  {itemNameA2:'', quantityA2: ''}, 
  {itemNameB1:'', quantityB1: ''}, 
  {itemNameB2:'', quantityB2: ''},
  {itemNameC1:'', quantityC1: ''}, 
  {itemNameC2:'', quantityC2: ''}, 
  {itemNameD1:'', quantityD1: ''}, 
  {itemNameD2:'', quantityD2: ''} 
];

  console.log(savedOutput);
window.addEventListener('DOMContentLoaded',  () => {
      itemNameHTMLB1.innerHTML = savedOutput[2].itemNameB1;
      shelfQuantity_B1.innerHTML = 'x' + savedOutput[2].quantityB1;

      itemNameHTMLB2.innerHTML = savedOutput[3].itemNameB2;
      shelfQuantity_B2.innerHTML = 'x' + savedOutput[3].quantityB2;

      itemNameHTMLD1.innerHTML = savedOutput[6].itemNameD1;
      shelfQuantity_D1.innerHTML =  'x' + savedOutput[6].quantityD1;

      itemNameHTMLD2.innerHTML = savedOutput[7].itemNameD2;
      shelfQuantity_D2.innerHTML =  'x' + savedOutput[7].quantityD2;      
  }
);

//PLACE C SECTION AND OTHERS

  let quantitySupplement_A1 = 0;//1
  let quantitySupplement_A2 = 0;//1.1
  let quantitySupplement_B1 = 0;//2
  let quantitySupplement_B2 = 0;//2.1
  let quantitySupplement_C1 = 0;//3
  let quantitySupplement_C2 = 0;//3.1
  let quantitySupplement_D1 = 0;//4
  let quantitySupplement_D2 = 0;//4.1
  let quantitySupplement_E1 = 0;//5
  let quantitySupplement_E2 = 0;//5.1
  let quantitySupplement_F1 = 0;//6
  let quantitySupplement_F2 = 0;//6.1
  let quantitySupplement_G1 = 0;//7
  let quantitySupplement_G2 = 0;//7.1
  let quantitySupplement_H1 = 0;//8
  let quantitySupplement_H2 = 0;//8.1
  let quantitySupplement_I1 = 0;//9
  let quantitySupplement_I2 = 0;//9.1
  let quantitySupplement_J1 = 0;//10
  let quantitySupplement_J2 = 0;//10.1
  let quantitySupplement_K1 = 0;//11
  let quantitySupplement_K2 = 0;//11.1
  let quantitySupplement_L1 = 0;//12
  let quantitySupplement_L2 = 0;//12.1


  // TOGGLE ARRAY
  const shelf = {
    B1: 'B1',
    B2: 'B2',
    D1: 'D1',
    D2: 'D2',
    E1: 'E1',
    E2: 'E2',
    F1: 'F1',
    F2: 'F2',
    G1: 'G1',
    G2: 'G2',
    H1: 'H1',
    H2: 'H2',
    I1: 'I1',
    I2: 'I2',
    J1: 'J1',
    J2: 'J2',
    K1: 'K1',
    K2: 'K2',
    L1: 'L1',
    L2: 'L2'
    };
  

  let toggleEditable;
  let toggleState;

  let togglePanelOnOff = false;
  let upDown = 0;
  
//**************//ADD HERE//************//
  //Panel Number Div for Plus and Minus
  let numberPanelB1 = document.querySelector('.js-panelNumberB1');
  let numberPanelB2 = document.querySelector('.js-panelNumberB2');

  let numberPanelD2 = document.querySelector('.js-panelNumberD2');
  let numberPanelD1 = document.querySelector('.js-panelNumberD1');

   //ENTER PANEL QUANTITY NUMBER
//**************//ADD HERE//************//
  let enterQuantityB1 = document.querySelector('.js-EnterPanelNumberB1');
  let enterQuantityB2 = document.querySelector('.js-EnterPanelNumberB2');

  let enterQuantityD2 = document.querySelector('.js-EnterPanelNumberD2');
  let enterQuantityD1 = document.querySelector('.js-EnterPanelNumberD1');

//**************//ADD HERE//************//
  const mainShelfB1 = document.querySelector('.shelf-B1');
  const mainShelfB2 = document.querySelector('.shelf-B2');
  
  const mainShelfD1 = document.querySelector('.shelf-D1');
  const mainShelfD2 = document.querySelector('.shelf-D2');

////////ENTER BUTTON PANEL NUMBER ADDEVENTLISTENER
//**************//ADD HERE//************//

  enterQuantityB1.addEventListener('click', ()=> {
    enterQuantityB1.value = quantitySupplement_B1;

    console.log(data);

    data.push({
      name: inputB1.value,
      quantity: quantitySupplement_B1,
      loc: shelf.B1
    });

    mainShelfB1.classList.remove("shelf-active");
    typingState;
    itemNameHTMLB1.innerHTML = inputB1.value;
    HideB1();
    runData();
  });

  enterQuantityB2.addEventListener('click', ()=> {
    enterQuantityB2.value = quantitySupplement_B2;

    console.log(data);

    data.push({
      name: inputB2.value,
      quantity: quantitySupplement_B2,
      loc: shelf.B2
    });

    mainShelfB2.classList.remove("shelf-active");
    typingState;
    itemNameHTMLB2.innerHTML = inputB2.value;
    HideB2();
    runData();
  });

  enterQuantityD1.addEventListener('click', ()=> {
    enterQuantityD1.value = quantitySupplement_D1;

    console.log(data);

    data.push({
      name: inputD1.value,
      quantity: quantitySupplement_D1,
      loc: shelf.D1
    });
    mainShelfD1.classList.remove("shelf-active");
    typingState; //back to default
    itemNameHTMLD1.innerHTML = inputD1.value;
    HideD1();
    runData();
  });

  enterQuantityD2.addEventListener('click', ()=> {
    enterQuantityD2.value = quantitySupplement_D2;

    console.log(data);

    data.push({
      name: inputD2.value,
      quantity: quantitySupplement_D2,
      loc: shelf.D2
    });
    mainShelfD2.classList.remove("shelf-active");
    typingState; //back to default
    itemNameHTMLD2.innerHTML = inputD2.value;
    HideD2();
    runData();
  });
/////////////////////////////////////////////

//**************//ADD HERE//************//
    //SHELF QUANTITY
  let shelfQuantity_B1 = document.querySelector('.panelNumber-QuantityB1');
  let shelfQuantity_B2 = document.querySelector('.panelNumber-QuantityB2');

  let shelfQuantity_D2 = document.querySelector('.panelNumber-QuantityD2');
  let shelfQuantity_D1 = document.querySelector('.panelNumber-QuantityD1');

  shelfQuantity_B1.value = '';
  shelfQuantity_B2.value = '';

  shelfQuantity_D1.value = '';
  shelfQuantity_D2.value = '';
  
  shelfQuantity_B1.innerHTML = '0';
  shelfQuantity_B2.innerHTML = '0';

  shelfQuantity_D1.innerHTML = '0';
  shelfQuantity_D2.innerHTML = '0';

//**************//ADD HERE//************//
  //INPUT HERE
  const inputB1 = document.querySelector('.js-input-B1');
  const inputB2 = document.querySelector('.js-input-B2');

  const inputD1 = document.querySelector('.js-input-D1');
  const inputD2 = document.querySelector('.js-input-D2');

   // Click the input directly
 const inputPopUp = document.querySelectorAll('.js-input-B1,.js-input-B2,.js-input-D1 ,.js-input-D2');

  //INPUT DISPLAY
  const allPanels = [numberPanelB1,numberPanelB2,numberPanelD1, numberPanelD2];
  
  allPanels.forEach(clickPanels => {
    clickPanels.addEventListener('click', () => {
     togglePanelOnOff = true;
    })
  }); 

    //FOR ADD MINUS BUTTON SELECTED FOR THE RIGHT SHELF

    //QUANTITY NUMBER PANEL CLICK TO HIGHLIGHT COLOR


//**************//ADD HERE//************//

  shelfQuantity_D1.addEventListener('click', () => {

      if (togglePanelOnOff === false || upDown === 2){
        numberPanelD1.classList.add("css-panelNumber-active");
        numberPanelD1.classList.remove("css-panelNumber");
        enterQuantityD1.classList.add('css-EnterPanelNumber-active');
        enterQuantityD1.classList.remove('css-EnterPanelNumber');
        inputD1.classList.add("css-input");
        toggleState = shelf.D1;
        HideB1();
        HideD2();
        clickShelfD1()
        upDown = 1;
        togglePanelOnOff = true;
      }
      else if (upDown === 1) {
        numberPanelD1.classList.add("css-panelNumber");
        numberPanelD1.classList.remove("css-panelNumber-active");
        enterQuantityD1.classList.remove('css-EnterPanelNumber-active');
        enterQuantityD1.classList.add('css-EnterPanelNumber');
        inputD1.classList.add("css-input");
        togglePanelOnOff = false;
        unclickShelfD1()
      }
    });
  shelfQuantity_D2.addEventListener('click', () => {

      if (togglePanelOnOff === false || upDown === 1){
        numberPanelD2.classList.add("css-panelNumber-active");
        enterQuantityD2.classList.add('css-EnterPanelNumber-active');
        numberPanelD2.classList.remove("css-panelNumber");
        enterQuantityD2.classList.remove('css-EnterPanelNumber');
        inputD2.classList.add("css-input");
        HideB1();
        HideD1();
        clickShelfD2()
        toggleState = shelf.D2;
        upDown = 2;
        togglePanelOnOff = true;
      }
      else if (upDown === 2){
        numberPanelD2.classList.add("css-panelNumber");
        numberPanelD2.classList.remove("css-panelNumber-active");
        enterQuantityD2.classList.remove('css-EnterPanelNumber-active');
        enterQuantityD2.classList.add('css-EnterPanelNumber');
        inputD2.classList.add("css-input");
        togglePanelOnOff = false;
        unclickShelfD2()
      }
    });

  shelfQuantity_B1.addEventListener('click', () => {

      if (togglePanelOnOff === false || upDown === 1){
        numberPanelB1.classList.add("css-panelNumber-activeB");
        numberPanelB1.classList.remove("css-panelNumberB");
        enterQuantityB1.classList.add('css-EnterPanelNumber-active');
        enterQuantityB1.classList.remove('css-EnterPanelNumber');
        inputB1.classList.add("css-input");
        HideD1();
        HideD2();
        HideB2();
        clickShelfB1()
        toggleState = shelf.B1;
        upDown = 2;
        togglePanelOnOff = true;
      }
      else if (upDown === 2){
        numberPanelB1.classList.add("css-panelNumberB");
        numberPanelB1.classList.remove("css-panelNumber-activeB");
        enterQuantityB1.classList.remove('css-EnterPanelNumber-active');
        enterQuantityB1.classList.add('css-EnterPanelNumber');
        inputB1.classList.add("css-input");
        togglePanelOnOff = false;
        unclickShelfB1();
      }
    });
    shelfQuantity_B2.addEventListener('click', () => {

      if (togglePanelOnOff === false || upDown === 1){
        numberPanelB2.classList.add("css-panelNumber-activeB");
        numberPanelB2.classList.remove("css-panelNumberB");
        enterQuantityB2.classList.add('css-EnterPanelNumber-active');
        enterQuantityB2.classList.remove('css-EnterPanelNumber');
        inputB2.classList.add("css-input");
        HideD1();
        HideD2();
        HideB1();
        clickShelfB2()
        toggleState = shelf.B2;
        upDown = 2;
        togglePanelOnOff = true;
      }
      else if (upDown === 2){
        numberPanelB2.classList.add("css-panelNumberB");
        numberPanelB2.classList.remove("css-panelNumber-activeB");
        enterQuantityB2.classList.remove('css-EnterPanelNumber-active');
        enterQuantityB2.classList.add('css-EnterPanelNumber');
        inputB2.classList.add("css-input");
        togglePanelOnOff = false;
        unclickShelfB2();
      }
    });

//**************//ADD HERE//************//

    function HideB2(){
      numberPanelB2.classList.add("css-panelNumberB");
      numberPanelB2.classList.remove("css-panelNumber-activeB");
      enterQuantityB2.classList.remove('css-EnterPanelNumber-active');
      enterQuantityB2.classList.add('css-EnterPanelNumber');
    };
    function HideB1(){
      numberPanelB1.classList.add("css-panelNumberB");
      numberPanelB1.classList.remove("css-panelNumber-activeB");
      enterQuantityB1.classList.remove('css-EnterPanelNumber-active');
      enterQuantityB1.classList.add('css-EnterPanelNumber');
    };
    function HideD1(){
      numberPanelD1.classList.add("css-panelNumber");
      numberPanelD1.classList.remove("css-panelNumber-active");
      enterQuantityD1.classList.remove('css-EnterPanelNumber-active');
      enterQuantityD1.classList.add('css-EnterPanelNumber');
    };
    function HideD2(){
      numberPanelD2.classList.add("css-panelNumber");
      numberPanelD2.classList.remove("css-panelNumber-active");
      enterQuantityD2.classList.remove('css-EnterPanelNumber-active');
      enterQuantityD2.classList.add('css-EnterPanelNumber');
    };

//FUNCTIONS FOR CLICKABLE SHELF ///////////////////////////////////////////////////////////
//**************//ADD HERE//************//
  function clickShelfB1(){
    ToggleShelfActive('B1');
    inputB1.classList.toggle("css-input-2",false);
    toggleHighlight = Hili.on;
    toggleState = shelf.B1;
  };
  function unclickShelfB1(){
    toggleHighlight = Hili.off;
    mainShelfB1.classList.remove("shelf-active");
  };

  function clickShelfB2(){
    ToggleShelfActive('B2');
    inputB2.classList.toggle("css-input-2",false); 
    toggleHighlight = Hili.on;
    toggleState = shelf.B2;
  };
  function unclickShelfB2(){
    toggleHighlight = Hili.off;
    mainShelfB2.classList.remove("shelf-active");
  };

  function clickShelfD1(){
    ToggleShelfActive('D1');
    inputD1.classList.toggle("css-input-2",false);
    toggleHighlight = Hili.on;
    toggleState = shelf.D1;
  };
  function unclickShelfD1(){
    mainShelfD1.classList.remove("shelf-active");
    toggleHighlight = Hili.off;
  };
  
  function clickShelfD2(){
    ToggleShelfActive('D2');
    inputD2.classList.toggle("css-input-2",false);
    toggleHighlight = Hili.on;
    toggleState = shelf.D2;
  };
  function unclickShelfD2(){
    mainShelfD2.classList.remove("shelf-active");
    toggleHighlight = Hili.off;
  };

  ////////////////////////////////////////////////////////////////////////////////////////////
  let tryOnce = true;

  function savedData(){
    localStorage.setItem('savedObjects',JSON.stringify(data));
  };
  function savedHTML(){
    localStorage.setItem('itemName', JSON.stringify(savedOutput));
  }

//////////////////////RUNDATA//////////////////////////////////////

  function runData(){
  output.innerHTML = '';

  data.forEach((item,index) => {

  const text = `
  <div class="js-remove-button">
  <button class="REMOVE-button">X</button>
 </div>
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
      <div class="css-shelf-list-LOC">
      ${item.loc}
      </div>
  </div>
  `;
    output.innerHTML += text;
    localStorage.setItem('output',JSON.stringify(output.innerHTML));
    savedData()
  });

    
    document.querySelectorAll('.css-shelf-list:not(.js-remove-button)').forEach((highlight,index) => {
      highlight.addEventListener('click', () => { 
        highlight.classList.toggle("css-shelf-HIGHLIGHT");

        const loc = highlight.querySelector('.css-shelf-list-LOC').textContent.trim();

// toggle the highlight between body and list
        if(loc === 'D1'){
        mainShelfD1.classList.toggle("shelf-active"); 
        }
        else if(loc === 'D2'){
          mainShelfD2.classList.toggle("shelf-active");
        }
        else if(loc === 'B1'){
          mainShelfB1.classList.toggle("shelf-active");
        }
        else if(loc === 'B2'){
          mainShelfB2.classList.toggle("shelf-active");
        }

      })
    });
  

////////////////////////////////////////////////////////////////////////////////////////////

//REMOVE BUTTON/////////////////////////////////////////////////////////////////////////////////////////
  document.querySelectorAll('.js-remove-button').forEach((removeButton,index) => {
  removeButton.addEventListener('click', () => {;
    data.splice(index,1);
    runData();
    })
    },savedData()
    );
  };
////////////////////////////////////////////////////////////////////////////////////////////

const Hili = { //Hightlight
  on: 'turn ON',
  off: 'turn OFF',
  null: 'LIGHT NULL'
};

let toggleHighlight = Hili.null;

//INPUT NAME ITEM HERE//////////////////////////////
inputD1.classList.toggle("css-input-2", false);

// typingState is typing to disable dom.body.click
let typingState;

 //WHEN TYPING INPUT 1st STATE//When typing
  inputPopUp.forEach(element => {
    element.addEventListener('keypress', () => {
      typingState = true;
    });
  });

 //WHEN TYPING INPUT 2nd STATE//When blinking
  inputPopUp.forEach(element => {
    element.addEventListener('click', () => {
      console.log('inputPopUp 2nd STATE');
      typingState = true;
    })
  });


//**************//ADD HERE//************//
/////////////////////////////////////////////////////
let itemNameHTMLB1 = document.querySelector('.js-one-B1');
let itemNameHTMLB2 = document.querySelector('.js-one-B2');
let itemNameHTMLD1 = document.querySelector('.js-one-D1');
let itemNameHTMLD2 = document.querySelector('.js-one-D2');

const jsOneforAll = [itemNameHTMLB1,itemNameHTMLB2,itemNameHTMLD1,itemNameHTMLD2];

jsOneforAll.forEach((click) => {
  click.addEventListener('click',() => {
  switch(click){
    case itemNameHTMLB1:
      inputB1.classList.toggle("css-input-2",true);
      inputB2.classList.toggle("css-input-2",false);
      inputD2.classList.toggle("css-input-2",false);
      inputD1.classList.toggle("css-input-2",false);
      toggleState = shelf.B1;
      typingState = true;
      break;

    case itemNameHTMLB2:
      inputB2.classList.toggle("css-input-2",true);
      inputB1.classList.toggle("css-input-2",false);
      inputD2.classList.toggle("css-input-2",false);
      inputD1.classList.toggle("css-input-2",false);
      toggleState = shelf.B2;
      typingState = true;
      break;
    
    case itemNameHTMLD1:
      inputD1.classList.toggle("css-input-2", true);
      inputD2.classList.toggle("css-input-2",false);
      inputB1.classList.toggle("css-input-2",false);
      inputB2.classList.toggle("css-input-2",false);
      toggleState = shelf.D1;
      typingState = true;
      break;

    case itemNameHTMLD2:
      inputD2.classList.toggle("css-input-2",true);
      inputD1.classList.toggle("css-input-2",false);
      inputB1.classList.toggle("css-input-2",false);
      inputB2.classList.toggle("css-input-2",false);
      toggleState = shelf.D2;
      typingState = true;
      break;
  }
  })
})

//ENTER PHYSICAL BUTTON ----------------------------------------------------------
//**************//ADD HERE//************//
  // const bodyEvent =
   document.body.addEventListener('keydown',(event) => {

////////////////////////////////////////
    if(event.key === 'Enter'){
      if (toggleState === shelf.D1){
      data.push({
        name: inputD1.value,
        quantity: quantitySupplement_D1,
        loc: shelf.D1
       });
       savedData();
       inputD1.classList.remove("css-input-2");
       inputD1.classList.add("css-input");
       typingState; 
       itemNameHTMLD1.innerHTML = inputD1.value;
       savedOutput[6].itemNameD1 = inputD1.value;
       savedOutput[6].quantityD1 = quantitySupplement_D1;
       console.log(savedOutput);
       savedHTML();
    }
    else if (toggleState === shelf.D2){
      data.push({
        name: inputD2.value,
        quantity: quantitySupplement_D2,
        loc: shelf.D2
       });
       savedData();
       inputD2.classList.remove("css-input-2");
       inputD2.classList.add("css-input");
       typingState; 
       itemNameHTMLD2.innerHTML = inputD2.value;
       savedOutput[7].itemNameD2 = inputD2.value;
       savedOutput[7].quantityD2 = quantitySupplement_D2;
       console.log(savedOutput);
       savedHTML();
    }
    else if (toggleState === shelf.B1){
      data.push({
        name: inputB1.value,
        quantity: quantitySupplement_B1,
        loc: shelf.B1
       });
       savedData();
       inputB1.classList.remove("css-input-2");
       inputB1.classList.add("css-input");
       typingState; 
       itemNameHTMLB1.innerHTML = inputB1.value;
       savedOutput[2].itemNameB1 = inputB1.value;
       savedOutput[2].quantityB1 = quantitySupplement_B1;
       console.log(savedOutput);
       savedHTML();
    }
    else if (toggleState === shelf.B2){
      data.push({
        name: inputB2.value,
        quantity: quantitySupplement_B2,
        loc: shelf.B2
       });
       savedData();
       inputB2.classList.remove("css-input-2");
       inputB2.classList.add("css-input");
       typingState; 
       itemNameHTMLB2.innerHTML = inputB2.value;
       savedOutput[3].itemNameB2 = inputB2.value;
       savedOutput[3].quantityB2 = quantitySupplement_B2;
       console.log(savedOutput);
       savedHTML();
    }

    runData();
    console.log(data);
    
    } 
   }
  );
   
  
//**************//ADD HERE//************//
  //PLUS BUTTON
  const buttonAdd = document.querySelectorAll('.js-button-plus-B1,.js-button-plus-B2, .js-button-plus-D1, .js-button-plus-D2');

  buttonAdd.forEach(add => {
    add.addEventListener('click',buttonPlus);
  }
  );
  function buttonPlus(){
    if (toggleState === shelf.B1){
    quantitySupplement_B1++;
    shelfQuantity_B1.innerHTML = `x${quantitySupplement_B1}`;
    } 
    else if (toggleState === shelf.B2){
      quantitySupplement_B2++;
      shelfQuantity_B2.innerHTML = `x${quantitySupplement_B2}`;
      } 
    else if (toggleState === shelf.D1){
    quantitySupplement_D1++;
    shelfQuantity_D1.innerHTML = `x${quantitySupplement_D1}`;
    }
    else if (toggleState === shelf.D2){
      quantitySupplement_D2++;
      shelfQuantity_D2.innerHTML = `x${quantitySupplement_D2}`;
    }
  };

//**************//ADD HERE//************//
//SUBTRACT BUTTON
  const buttonSubtract = document.querySelectorAll('.js-button-minus-D1,.js-button-minus-D2,.js-button-minus-B1,.js-button-minus-B2');

  buttonSubtract.forEach(minus => {
    minus.addEventListener('click',buttonMinus); 
    })

    function buttonMinus(){
      if (toggleState === shelf.B1 && quantitySupplement_B1 > 0){
        quantitySupplement_B1--;
        shelfQuantity_B1.innerHTML = `x${quantitySupplement_B1}`;
      } 
      else if (toggleState === shelf.B2 && quantitySupplement_B2 > 0){
        quantitySupplement_B2--;
        shelfQuantity_B2.innerHTML = `x${quantitySupplement_B2}`;
      } 
      else if (toggleState === shelf.D1 && quantitySupplement_D1 > 0){
        quantitySupplement_D1--;
        shelfQuantity_D1.innerHTML = `x${quantitySupplement_D1}`;
      }
      else if (toggleState === shelf.D2 &&   quantitySupplement_D2 > 0){
        quantitySupplement_D2--;
        shelfQuantity_D2.innerHTML = `x${quantitySupplement_D2}`;
      }
      else {
        alert('Reach Limit');
    }
  };


  function ToggleShelfActive(shelfID){


    if(shelfID === 'B1'){
      mainShelfB1.classList.add("shelf-active");
      mainShelfB2.classList.remove("shelf-active");
      mainShelfD1.classList.remove("shelf-active");
      mainShelfD2.classList.remove("shelf-active");
    }
    else if(shelfID === 'B2'){
      mainShelfB2.classList.add("shelf-active");
      mainShelfB1.classList.remove("shelf-active");
      mainShelfD1.classList.remove("shelf-active");
      mainShelfD2.classList.remove("shelf-active");
    }
    else if(shelfID === 'D1'){
      mainShelfD1.classList.add("shelf-active");
      mainShelfD2.classList.remove("shelf-active");
      mainShelfB1.classList.remove("shelf-active");
      mainShelfB2.classList.remove("shelf-active");
    }
    else if(shelfID === 'D2'){
      mainShelfD2.classList.add("shelf-active");
      mainShelfD1.classList.remove("shelf-active");
      mainShelfB1.classList.remove("shelf-active");
      mainShelfB2.classList.remove("shelf-active");
    }
  };

  function inputToggles(){

  }