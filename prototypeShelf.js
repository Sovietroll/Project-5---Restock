let data = [];

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
  

  let output = document.querySelector('.outputHere');

  //Panel Number Div for Plus and Minus
  let numberPanelD2 = document.querySelector('.js-panelNumberD2');
  let numberPanelD1 = document.querySelector('.js-panelNumberD1');

   //ENTER PANEL QUANTITY NUMBER
  let enterQuantityD2 = document.querySelector('.js-EnterPanelNumberD2');
  let enterQuantityD1 = document.querySelector('.js-EnterPanelNumberD1');


  const mainShelfD1 = document.querySelector('.shelf-D1');
  const mainShelfD2 = document.querySelector('.shelf-D2');

////////ENTER BUTTON PANEL NUMBER ADDEVENTLISTENER
  enterQuantityD1.addEventListener('click', ()=> {
    enterQuantityD2.value = quantitySupplement_D1;

    console.log(data);

    data.push({
      name: inputD1.value,
      quantity: quantitySupplement_D1,
      loc: shelf.D1
    });
    mainShelfD1.classList.remove("shelf-active");
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
    runData();
  });
////////////////////////////////////////

    //SHELF QUANTITY
  let shelfQuantity_D2 = document.querySelector('.panelNumber-QuantityD2');
  let shelfQuantity_D1 = document.querySelector('.panelNumber-QuantityD1');

  
  shelfQuantity_D1.value = '';
  shelfQuantity_D2.value = '';
  shelfQuantity_D1.innerHTML = '0';
  shelfQuantity_D2.innerHTML = '0';

  //INPUT HERE
  const inputD1 = document.querySelector('.js-input-D1');
  const inputD2 = document.querySelector('.js-input-D2');

   // Click the input directly
 const inputPopUp = document.querySelectorAll('.js-input-D1 ,.js-input-D2');

  //INPUT DISPLAY
  const allPanels = [numberPanelD1, numberPanelD2];
  
  allPanels.forEach(clickPanels => {
    clickPanels.addEventListener('click', () => {
     togglePanelOnOff = true;
    })
  }); //FOR ADD MINUS BUTTON SELECTED FOR THE RIGHT SHELF
//QUANTITY NUMBER PANEL CLICK TO HIGHLIGHT COLOR
//COMMENT - GONNA POP MY FUCKING HEAD OFF THINKING OFF THE TOGGLE
  shelfQuantity_D1.addEventListener('click', () => {
      if (togglePanelOnOff === false || upDown === 2){
        numberPanelD1.classList.add("css-panelNumber-activeD1");
        numberPanelD1.classList.remove("css-panelNumberD1");

    
        enterQuantityD1.classList.add('css-EnterPanelNumber-activeD1');
        enterQuantityD1.classList.remove('css-EnterPanelNumberD1');

        // inputD1.style.display = "none";
        inputD1.classList.add("css-input");
        toggleState = shelf.D1;
        HideD2();
        clickShelfD1()

        upDown = 1;
        togglePanelOnOff = true;

      }
      else if (upDown === 1) {

        numberPanelD1.classList.add("css-panelNumberD1");
        numberPanelD1.classList.remove("css-panelNumber-activeD1");
    
        enterQuantityD1.classList.remove('css-EnterPanelNumber-activeD1');
        enterQuantityD1.classList.add('css-EnterPanelNumberD1');

        // inputD1.style.display = "none";
        inputD1.classList.add("css-input");


        togglePanelOnOff = false;
        unclickShelfD1()
      }
    });




  shelfQuantity_D2.addEventListener('click', () => {
      if (togglePanelOnOff === false || upDown === 1){
        numberPanelD2.classList.add("css-panelNumber-active");
        numberPanelD2.classList.remove("css-panelNumber");

        enterQuantityD2.classList.add('css-EnterPanelNumber-active');
        enterQuantityD2.classList.remove('css-EnterPanelNumber');
        // inputD2.style.display = "none";
        inputD2.classList.add("css-input");

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
        // inputD2.style.display = "none";
        inputD2.classList.add("css-input");


        togglePanelOnOff = false;

        
        unclickShelfD2()
      }
    })

    function HideD1(){
      numberPanelD1.classList.add("css-panelNumberD1");
      numberPanelD1.classList.remove("css-panelNumber-activeD1");
      enterQuantityD1.classList.remove('css-EnterPanelNumber-activeD1');
      enterQuantityD1.classList.add('css-EnterPanelNumberD1');
    };

    function HideD2(){
      numberPanelD2.classList.add("css-panelNumber");
      numberPanelD2.classList.remove("css-panelNumber-active");
      enterQuantityD2.classList.remove('css-EnterPanelNumber-active');
      enterQuantityD2.classList.add('css-EnterPanelNumber');
    }

//FUNCTIONS FOR CLICKABLE SHELF ///////////////////////////////////////////////////////////
  function clickShelfD1(){
    mainShelfD1.classList.add("shelf-active");
    mainShelfD2.classList.remove("shelf-active");
    toggleHighlight = Hili.on;
    console.log(toggleHighlight);

    inputD1.classList.toggle("css-input-2",false); //Turn off input
    toggleState = shelf.D1;
  }

  function unclickShelfD1(){
    mainShelfD1.classList.remove("shelf-active");
    toggleHighlight = Hili.off;

  }
  
  function clickShelfD2(){
    mainShelfD2.classList.add("shelf-active"),
    mainShelfD1.classList.remove("shelf-active");

    inputD2.classList.toggle("css-input-2",false);
    toggleState = shelf.D2;
  };

  function unclickShelfD2(){
    mainShelfD2.classList.remove("shelf-active");
  }
  ////////////////////////////////////////////////////////////////////////////////////////////
  let tryOnce = true;

//RUN DATA FOR SHELF LIST//////////////////////////////////////////////////////////////
  function runData(){
  output.innerHTML = '';

  data.forEach((item,index) => {

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
      <div class="css-shelf-list-LOC">
      ${item.loc}
      </div>
      <div class="js-remove-button">
       <button class="REMOVE-button">X</button>
      </div>
  </div>
  `;
    output.innerHTML += text;
  });

    
    document.querySelectorAll('.css-shelf-list').forEach((highlight,index) => {
      highlight.addEventListener('click', () => { 
     
        highlight.classList.toggle("css-shelf-HIGHLIGHT");

        const loc = highlight.querySelector('.css-shelf-list-LOC').textContent.trim();

// toggle the highlight between body and list
        if(loc === 'D1'){
        mainShelfD1.classList.toggle("shelf-active"); 
        console.log('run')
        }
        
        
        else if(loc === 'D2'){
          mainShelfD2.classList.toggle("shelf-active");
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
      },console.log(`deleted`,data)
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

//Click Panel One not Input
document.querySelector('.js-one-D1').addEventListener('click', () => {
  // inputD1.classList.toggle("css-inputAPPEAR");
  
  inputD1.classList.toggle("css-input-2", true);
  inputD2.classList.toggle("css-input-2",false);
  toggleState = shelf.D1;
  
  typingState = true;


  // toggle on and off typingState
  // typingState = !typingState;
})

 document.querySelector('.js-one-D2').addEventListener('click', () => {
  
    // inputD2.style.display = "block";
    // inputD1.style.display = "block"; 

    inputD2.classList.toggle("css-input-2",true);
    inputD1.classList.toggle("css-input-2",false);
    toggleState = shelf.D2;

 });

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

/*  
// OFF POP UP //click for input pop up///
 const domBody = document.body.addEventListener('click', (event) => {
  typingState = !typingState;

  if (!event.target.closest('.js-one-D1') && !event.target.closest('.js-one-D2') && typingState === false) {

    inputD1.classList.remove("css-input-2");
    inputD2.classList.remove("css-input-2");
    console.log('trigger OFF INPUT');
    triggeredInputPopUp = true;
  };
});
*/

/////////////////////////////////////////////////////
  
 


//ENTER PHYSICAL BUTTON ----------------------------------------------------------
  // const bodyEvent =
   document.body.addEventListener('keydown',(event) => {

    let itemNameHTMLD1 = document.querySelector('.js-one-D1');
    let itemNameHTMLD2 = document.querySelector('.js-one-D2');
    
    if(event.key === 'Enter'){
      if (toggleState === shelf.D1){
      data.push({
        name: inputD1.value,
        quantity: quantitySupplement_D1,
        loc: shelf.D1
       });
      //  inputD1.style.display = "none";

      // Input to remove css after enter

       inputD1.classList.remove("css-input-2");
       inputD1.classList.add("css-input");

       typingState; //back to default
       
      //////////////////////////

       itemNameHTMLD1.innerHTML = inputD1.value;
    }
    else if (toggleState === shelf.D2){
      data.push({
        name: inputD2.value,
        quantity: quantitySupplement_D2,
        loc: shelf.D2
       });

       inputD2.classList.remove("css-input-2");
       inputD2.classList.add("css-input");

       typingState; //back to default

       itemNameHTMLD2.innerHTML = inputD2.value;
    }
      runData();
      console.log(data);
    } 
   }
  );
   
  

  //PLUS BUTTON
  const buttonAdd = document.querySelectorAll('.js-button-plus-B, .js-button-plus-D1, .js-button-plus-D2');

  buttonAdd.forEach(add => {
    add.addEventListener('click',buttonPlus);
  }
  );
  function buttonPlus(){
    if (toggleState === shelf.B1){
    quantitySupplement_B1++;
    shelfQuantity_B1.innerHTML = `x${quantitySupplement_B1}`;

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

//SUBTRACT BUTTON
  const buttonSubtract = document.querySelectorAll('.js-button-minus-D1,.js-button-minus-D2');

  buttonSubtract.forEach(minus => {
    minus.addEventListener('click',buttonMinus); 
    })

    function buttonMinus(){
      if (toggleState === shelf.B1 && quantitySupplement_B1 > 0){
        quantitySupplement_B1--;
        shelfQuantity_B1.innerHTML = `${quantitySupplement_B1}`;
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
