let data = JSON.parse(localStorage.getItem('savedObjects')) || [];

let output = document.querySelector('.output');
let output2 = document.querySelector('.output2'); //two side 

runData();


const savedOutput = JSON.parse(localStorage.getItem('itemName')) || [
    {itemNameA1:'', quantityA1: ''}, //0
    {itemNameA2:'', quantityA2: ''}, //1
    {itemNameB1:'', quantityB1: ''}, //2
    {itemNameB2:'', quantityB2: ''}, //3
    {itemNameC1:'', quantityC1: ''}, //4
    {itemNameC2:'', quantityC2: ''}, //5
    {itemNameD1:'', quantityD1: ''}, //6
    {itemNameD2:'', quantityD2: ''}, //7
    {itemNameE1:'', quantityE1: ''}, //8
    {itemNameE2:'', quantityE2: ''}, //9
    {itemNameF1:'', quantityF1: ''}, //10
    {itemNameF2:'', quantityF2: ''}, //11
    {itemNameG1:'', quantityG1: ''}, //12
    {itemNameG2:'', quantityG2: ''}, //13
    {itemNameH1:'', quantityH1: ''}, //14
    {itemNameH2:'', quantityH2: ''}, //15
    {itemNameI1:'', quantityI1: ''}, //16
    {itemNameI2:'', quantityI2: ''}, //17
    {itemNameJ1:'', quantityJ1: ''}, //18
    {itemNameJ2:'', quantityJ2: ''}, //19
    {itemNameK1:'', quantityK1: ''}, //20
    {itemNameK2:'', quantityK2: ''}, //21
    {itemNameL1:'', quantityL1: ''}, //22
    {itemNameL2:'', quantityL2: ''}, //23

  ];
  
    window.addEventListener('DOMContentLoaded',  () => {
      itemNameHTMLA1.innerHTML = savedOutput[0].itemNameA1;
      shelfQuantity_A1.innerHTML = 'x' + savedOutput[0].quantityA1;
      
      itemNameHTMLA2.innerHTML = savedOutput[1].itemNameA2;
      shelfQuantity_A2.innerHTML = 'x' + savedOutput[1].quantityA2;

      itemNameHTMLB1.innerHTML = savedOutput[2].itemNameB1;
      shelfQuantity_B1.innerHTML = 'x' + savedOutput[2].quantityB1;
    
      itemNameHTMLB2.innerHTML = savedOutput[3].itemNameB2;
      shelfQuantity_B2.innerHTML = 'x' + savedOutput[3].quantityB2;

      itemNameHTMLC1.innerHTML = savedOutput[4].itemNameC1;
      shelfQuantity_C1.innerHTML = 'x' + savedOutput[4].quantityC1;

      itemNameHTMLC2.innerHTML = savedOutput[5].itemNameC2;
      shelfQuantity_C2.innerHTML = 'x' + savedOutput[5].quantityC2;
      
      itemNameHTMLD1.innerHTML = savedOutput[6].itemNameD1;
      shelfQuantity_D1.innerHTML =  'x' + savedOutput[6].quantityD1;

      itemNameHTMLD2.innerHTML = savedOutput[7].itemNameD2;
      shelfQuantity_D2.innerHTML =  'x' + savedOutput[7].quantityD2;
      
      itemNameHTMLE1.innerHTML = savedOutput[8].itemNameE1;
      shelfQuantity_E1.innerHTML =  'x' + savedOutput[8].quantityE1;

      itemNameHTMLE2.innerHTML = savedOutput[9].itemNameE2;
      shelfQuantity_E2.innerHTML =  'x' + savedOutput[9].quantityE2;

      itemNameHTMLF1.innerHTML = savedOutput[10].itemNameF1;
      shelfQuantity_F1.innerHTML =  'x' + savedOutput[10].quantityF1;

      itemNameHTMLF2.innerHTML = savedOutput[11].itemNameF2;
      shelfQuantity_F2.innerHTML =  'x' + savedOutput[11].quantityF2;

      itemNameHTMLG1.innerHTML = savedOutput[12].itemNameG1;
      shelfQuantity_G1.innerHTML =  'x' + savedOutput[12].quantityG1;

      itemNameHTMLG2.innerHTML = savedOutput[13].itemNameG2;
      shelfQuantity_G2.innerHTML =  'x' + savedOutput[13].quantityG2;

      itemNameHTMLH1.innerHTML = savedOutput[14].itemNameH1;
      shelfQuantity_H1.innerHTML =  'x' + savedOutput[14].quantityH1;

      itemNameHTMLH2.innerHTML = savedOutput[15].itemNameH2;
      shelfQuantity_H2.innerHTML =  'x' + savedOutput[15].quantityH2;

      itemNameHTMLI1.innerHTML = savedOutput[16].itemNameI1;
      shelfQuantity_I1.innerHTML =  'x' + savedOutput[16].quantityI1;

      itemNameHTMLI2.innerHTML = savedOutput[17].itemNameI2;
      shelfQuantity_I2.innerHTML =  'x' + savedOutput[17].quantityI2;

      itemNameHTMLJ1.innerHTML = savedOutput[18].itemNameJ1;
      shelfQuantity_J1.innerHTML =  'x' + savedOutput[18].quantityJ1;

      itemNameHTMLJ2.innerHTML = savedOutput[19].itemNameJ2;
      shelfQuantity_J2.innerHTML =  'x' + savedOutput[19].quantityJ2;

      itemNameHTMLK1.innerHTML = savedOutput[20].itemNameK1;
      shelfQuantity_K1.innerHTML =  'x' + savedOutput[20].quantityK1;

      itemNameHTMLK2.innerHTML = savedOutput[21].itemNameK2;
      shelfQuantity_K2.innerHTML =  'x' + savedOutput[21].quantityK2;

      itemNameHTMLL1.innerHTML = savedOutput[22].itemNameL1;
      shelfQuantity_L1.innerHTML =  'x' + savedOutput[22].quantityL1;

      itemNameHTMLL2.innerHTML = savedOutput[23].itemNameL2;
      shelfQuantity_L2.innerHTML =  'x' + savedOutput[23].quantityL2;
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
    A1: 'A1',
    A2: 'A2',
    B1: 'B1',
    B2: 'B2',
    C1: 'C1',
    C2: 'C2',
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
    
    let upDownStates = {
      A1: 0,
      A2: 0,
      B1: 0,
      B2: 0,
      C1: 0,
      C2: 0,
      D1: 0,
      D2: 0,
      E1: 0,
      E2: 0,
      F1: 0,
      F2: 0,
      G1: 0,
      G2: 0,
      H1: 0,
      H2: 0,
      I1: 0,
      I2: 0,
      J1: 0,
      J2: 0,
      K1: 0,
      K2: 0,
      L1: 0,
      L2: 0,
    };
    
  const Switch = {
    sectionA: 'section A',
    sectionB: 'section B',
    NEUTRAL: 'null'
  }
  let flipButtons = Switch.NEUTRAL;

  let toggleEditable;
  let toggleState;

  let togglePanelOnOff = false;

  
//**************//ADD HERE//************//
  //Panel Number Div for Plus and Minus
  let numberPanelA1 = document.querySelector('.js-panelNumberA1');
  let numberPanelA2 = document.querySelector('.js-panelNumberA2');

  let numberPanelB1 = document.querySelector('.js-panelNumberB1');
  let numberPanelB2 = document.querySelector('.js-panelNumberB2');

  let numberPanelC1 = document.querySelector('.js-panelNumberC1');
  let numberPanelC2 = document.querySelector('.js-panelNumberC2');

  let numberPanelD1 = document.querySelector('.js-panelNumberD1');
  let numberPanelD2 = document.querySelector('.js-panelNumberD2');

  let numberPanelE1 = document.querySelector('.js-panelNumberE1');
  let numberPanelE2 = document.querySelector('.js-panelNumberE2');

  let numberPanelF1 = document.querySelector('.js-panelNumberF1');
  let numberPanelF2 = document.querySelector('.js-panelNumberF2');

  let numberPanelG1 = document.querySelector('.js-panelNumberG1');
  let numberPanelG2 = document.querySelector('.js-panelNumberG2');

  let numberPanelH1 = document.querySelector('.js-panelNumberH1');
  let numberPanelH2 = document.querySelector('.js-panelNumberH2');

  let numberPanelI1 = document.querySelector('.js-panelNumberI1');
  let numberPanelI2 = document.querySelector('.js-panelNumberI2');
  
  let numberPanelJ1 = document.querySelector('.js-panelNumberJ1');
  let numberPanelJ2 = document.querySelector('.js-panelNumberJ2');

  let numberPanelK1 = document.querySelector('.js-panelNumberK1');
  let numberPanelK2 = document.querySelector('.js-panelNumberK2');

  let numberPanelL1 = document.querySelector('.js-panelNumberL1');
  let numberPanelL2 = document.querySelector('.js-panelNumberL2');



   //ENTER PANEL QUANTITY NUMBER
//**************//ADD HERE//************//
  
  let enterQuantityA1 = document.querySelector('.js-EnterPanelNumberA1');
  let enterQuantityA2 = document.querySelector('.js-EnterPanelNumberA2');
    
  let enterQuantityB1 = document.querySelector('.js-EnterPanelNumberB1');
  let enterQuantityB2 = document.querySelector('.js-EnterPanelNumberB2');

  let enterQuantityC1 = document.querySelector('.js-EnterPanelNumberC1');
  let enterQuantityC2 = document.querySelector('.js-EnterPanelNumberC2');

  let enterQuantityD2 = document.querySelector('.js-EnterPanelNumberD2');
  let enterQuantityD1 = document.querySelector('.js-EnterPanelNumberD1');

  let enterQuantityE1 = document.querySelector('.js-EnterPanelNumberE1');
  let enterQuantityE2 = document.querySelector('.js-EnterPanelNumberE2');

  let enterQuantityF1 = document.querySelector('.js-EnterPanelNumberF1');
  let enterQuantityF2 = document.querySelector('.js-EnterPanelNumberF2');

  let enterQuantityG1 = document.querySelector('.js-EnterPanelNumberG1');
  let enterQuantityG2 = document.querySelector('.js-EnterPanelNumberG2');

  let enterQuantityH1 = document.querySelector('.js-EnterPanelNumberH1');
  let enterQuantityH2 = document.querySelector('.js-EnterPanelNumberH2');

  let enterQuantityI1 = document.querySelector('.js-EnterPanelNumberI1');
  let enterQuantityI2 = document.querySelector('.js-EnterPanelNumberI2');

  let enterQuantityJ1 = document.querySelector('.js-EnterPanelNumberJ1');
  let enterQuantityJ2 = document.querySelector('.js-EnterPanelNumberJ2');

  let enterQuantityK1 = document.querySelector('.js-EnterPanelNumberK1');
  let enterQuantityK2 = document.querySelector('.js-EnterPanelNumberK2');

  let enterQuantityL1 = document.querySelector('.js-EnterPanelNumberL1');
  let enterQuantityL2 = document.querySelector('.js-EnterPanelNumberL2');

//**************//ADD HERE//************//
  const mainShelfA1 = document.querySelector('.shelf-A1');
  const mainShelfA2 = document.querySelector('.shelf-A2');

  const mainShelfB1 = document.querySelector('.shelf-B1');
  const mainShelfB2 = document.querySelector('.shelf-B2');

  const mainShelfC1 = document.querySelector('.shelf-C1');
  const mainShelfC2 = document.querySelector('.shelf-C2');
  
  const mainShelfD1 = document.querySelector('.shelf-D1');
  const mainShelfD2 = document.querySelector('.shelf-D2');

  const mainShelfE1 = document.querySelector('.shelf-E1');
  const mainShelfE2 = document.querySelector('.shelf-E2');

  const mainShelfF1 = document.querySelector('.shelf-F1');
  const mainShelfF2 = document.querySelector('.shelf-F2');
  
  const mainShelfG1 = document.querySelector('.shelf-G1');
  const mainShelfG2 = document.querySelector('.shelf-G2');

  const mainShelfH1 = document.querySelector('.shelf-H1');
  const mainShelfH2 = document.querySelector('.shelf-H2');

  const mainShelfI1 = document.querySelector('.shelf-I1');
  const mainShelfI2 = document.querySelector('.shelf-I2');

  const mainShelfJ1 = document.querySelector('.shelf-J1');
  const mainShelfJ2 = document.querySelector('.shelf-J2');
  
  const mainShelfK1 = document.querySelector('.shelf-K1');
  const mainShelfK2 = document.querySelector('.shelf-K2');

  const mainShelfL1 = document.querySelector('.shelf-L1');
  const mainShelfL2 = document.querySelector('.shelf-L2');



////////ENTER BUTTON PANEL NUMBER ADDEVENTLISTENER
//**************//ADD HERE//************//
  enterQuantityA1.addEventListener('click', ()=> {
    enterQuantityA1.value = quantitySupplement_A1;
    console.log(data);
    data.push({
      name: inputA1.value,
      quantity: quantitySupplement_A1,
      loc: shelf.A1
    });
    mainShelfA1.classList.remove("shelf-active");
    typingState;
    itemNameHTMLA1.innerHTML = inputA1.value;
    HideA1();
    runData();
  });

  enterQuantityA2.addEventListener('click', ()=> {
    enterQuantityA2.value = quantitySupplement_A2;
    console.log(data);
    data.push({
      name: inputA2.value,
      quantity: quantitySupplement_A2,
      loc: shelf.A2
    });
    mainShelfA2.classList.remove("shelf-active");
    typingState;
    itemNameHTMLA2.innerHTML = inputA2.value;
    HideA2();
    runData();
  });

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

  enterQuantityC1.addEventListener('click', ()=> {
    enterQuantityC1.value = quantitySupplement_C1;
    console.log(data);
    data.push({
      name: inputC1.value,
      quantity: quantitySupplement_C1,
      loc: shelf.C1
    });
    mainShelfC1.classList.remove("shelf-active");
    typingState;
    itemNameHTMLC1.innerHTML = inputC1.value;
    HideC1();
    runData();
  });

  enterQuantityC2.addEventListener('click', ()=> {
    enterQuantityC2.value = quantitySupplement_C2;
    console.log(data);
    data.push({
      name: inputC2.value,
      quantity: quantitySupplement_C2,
      loc: shelf.C2
    });
    mainShelfC2.classList.remove("shelf-active");
    typingState;
    itemNameHTMLC2.innerHTML = inputC2.value;
    HideC2();
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
    typingState; 
    itemNameHTMLD2.innerHTML = inputD2.value;
    savedOutput[7].quantityD2 = quantitySupplement_D2;
    console.log(savedOutput[7]);
    HideD2();
    runData();
    savedHTML();
  });

  enterQuantityE1.addEventListener('click', ()=> {
    enterQuantityE1.value = quantitySupplement_E1;
    console.log(data);
    data.push({
      name: inputE1.value,
      quantity: quantitySupplement_E1,
      loc: shelf.E1
    });
    mainShelfE1.classList.remove("shelf-active");
    typingState; //back to default
    itemNameHTMLE1.innerHTML = inputE1.value;
    HideE1();
    runData();
  });

enterQuantityE2.addEventListener('click', ()=> {
  enterQuantityE2.value = quantitySupplement_E2;
  console.log(data);
  data.push({
    name: inputE2.value,
    quantity: quantitySupplement_E2,
    loc: shelf.E2
  });
  mainShelfE2.classList.remove("shelf-active");
  typingState; //back to default
  itemNameHTMLE2.innerHTML = inputE2.value;
  HideE2();
  runData();
});

enterQuantityF1.addEventListener('click', ()=> {
  enterQuantityF1.value = quantitySupplement_F1;
  console.log(data);
  data.push({
    name: inputF1.value,
    quantity: quantitySupplement_F1,
    loc: shelf.F1
  });
  mainShelfF1.classList.remove("shelf-active");
  typingState; //back to default
  itemNameHTMLF1.innerHTML = inputF1.value;
  HideF1();
  runData();
});

enterQuantityF2.addEventListener('click', ()=> {
  enterQuantityF2.value = quantitySupplement_F2;
  console.log(data);
  data.push({
    name: inputF2.value,
    quantity: quantitySupplement_F2,
    loc: shelf.F2
  });
  mainShelfF2.classList.remove("shelf-active");
  typingState; //back to default
  itemNameHTMLF2.innerHTML = inputF2.value;
  HideF2();
  runData();
});

enterQuantityG1.addEventListener('click', ()=> {
  enterQuantityG1.value = quantitySupplement_G1;
  console.log(data);
  data.push({
    name: inputG1.value,
    quantity: quantitySupplement_G1,
    loc: shelf.G1
  });
  mainShelfG1.classList.remove("shelf-active");
  typingState; //back to default
  itemNameHTMLG1.innerHTML = inputG1.value;
  HideG1();
  runData();
});

enterQuantityG2.addEventListener('click', ()=> {
  enterQuantityG2.value = quantitySupplement_G2;
  console.log(data);
  data.push({
    name: inputG2.value,
    quantity: quantitySupplement_G2,
    loc: shelf.G2
  });
  mainShelfG2.classList.remove("shelf-active");
  typingState; //back to default
  itemNameHTMLG2.innerHTML = inputG2.value;
  HideG2();
  runData();
});

enterQuantityH1.addEventListener('click', ()=> {
  enterQuantityH1.value = quantitySupplement_H1;
  console.log(data);
  data.push({
    name: inputH1.value,
    quantity: quantitySupplement_H1,
    loc: shelf.H1
  });
  mainShelfH1.classList.remove("shelf-active");
  typingState; //back to default
  itemNameHTMLH1.innerHTML = inputH1.value;
  HideH1();
  runData();
});

enterQuantityH2.addEventListener('click', ()=> {
  enterQuantityH2.value = quantitySupplement_H2;
  console.log(data);
  data.push({
    name: inputH2.value,
    quantity: quantitySupplement_H2,
    loc: shelf.H2
  });
  mainShelfH2.classList.remove("shelf-active");
  typingState; //back to default
  itemNameHTMLH2.innerHTML = inputH2.value;
  HideH2();
  runData();
});

enterQuantityI1.addEventListener('click', ()=> {
  enterQuantityI1.value = quantitySupplement_I1;
  console.log(data);
  data.push({
    name: inputI1.value,
    quantity: quantitySupplement_I1,
    loc: shelf.I1
  });
  mainShelfI1.classList.remove("shelf-active");
  typingState; //back to default
  itemNameHTMLI1.innerHTML = inputI1.value;
  HideI1();
  runData();
});

enterQuantityI2.addEventListener('click', ()=> {
  enterQuantityI2.value = quantitySupplement_I2;
  console.log(data);
  data.push({
    name: inputI2.value,
    quantity: quantitySupplement_I2,
    loc: shelf.I2
  });
  mainShelfI2.classList.remove("shelf-active");
  typingState; //back to default
  itemNameHTMLI2.innerHTML = inputI2.value;
  HideI2();
  runData();
});

enterQuantityJ1.addEventListener('click', ()=> {
  enterQuantityJ1.value = quantitySupplement_J1;
  console.log(data);
  data.push({
    name: inputJ1.value,
    quantity: quantitySupplement_J1,
    loc: shelf.J1
  });
  mainShelfJ1.classList.remove("shelf-active");
  typingState; //back to default
  itemNameHTMLJ1.innerHTML = inputJ1.value;
  HideJ1();
  runData();
});

enterQuantityJ2.addEventListener('click', ()=> {
  enterQuantityJ2.value = quantitySupplement_J2;
  console.log(data);
  data.push({
    name: inputJ2.value,
    quantity: quantitySupplement_J2,
    loc: shelf.J2
  });
  mainShelfJ2.classList.remove("shelf-active");
  typingState; //back to default
  itemNameHTMLJ2.innerHTML = inputJ2.value;
  HideJ2();
  runData();
});

enterQuantityK1.addEventListener('click', ()=> {
  enterQuantityK1.value = quantitySupplement_K1;
  console.log(data);
  data.push({
    name: inputK1.value,
    quantity: quantitySupplement_K1,
    loc: shelf.K1
  });
  mainShelfK1.classList.remove("shelf-active");
  typingState; //back to default
  itemNameHTMLK1.innerHTML = inputK1.value;
  HideK1();
  runData();
});

enterQuantityK2.addEventListener('click', ()=> {
  enterQuantityK2.value = quantitySupplement_K2;
  console.log(data);
  data.push({
    name: inputK2.value,
    quantity: quantitySupplement_K2,
    loc: shelf.K2
  });
  mainShelfK2.classList.remove("shelf-active");
  typingState; //back to default
  itemNameHTMLK2.innerHTML = inputK2.value;
  HideK2();
  runData();
});

enterQuantityL1.addEventListener('click', ()=> {
  enterQuantityL1.value = quantitySupplement_L1;
  console.log(data);
  data.push({
    name: inputL1.value,
    quantity: quantitySupplement_L1,
    loc: shelf.L1
  });
  mainShelfL1.classList.remove("shelf-active");
  typingState; //back to default
  itemNameHTMLL1.innerHTML = inputL1.value;
  HideL1();
  runData();
});

enterQuantityL2.addEventListener('click', ()=> {
  enterQuantityL2.value = quantitySupplement_L2;
  console.log(data);
  data.push({
    name: inputL2.value,
    quantity: quantitySupplement_L2,
    loc: shelf.L2
  });
  mainShelfL2.classList.remove("shelf-active");
  typingState; //back to default
  itemNameHTMLL2.innerHTML = inputL2.value;
  HideL2();
  runData();
});


/////////////////////////////////////////////

//**************//ADD HERE//************//
    //SHELF QUANTITY


  let shelfQuantity_A1 = document.querySelector('.panelNumber-QuantityA1');
  let shelfQuantity_A2 = document.querySelector('.panelNumber-QuantityA2');
    
  let shelfQuantity_B1 = document.querySelector('.panelNumber-QuantityB1');
  let shelfQuantity_B2 = document.querySelector('.panelNumber-QuantityB2');

  let shelfQuantity_C1 = document.querySelector('.panelNumber-QuantityC1');
  let shelfQuantity_C2 = document.querySelector('.panelNumber-QuantityC2');

  let shelfQuantity_D2 = document.querySelector('.panelNumber-QuantityD2');
  let shelfQuantity_D1 = document.querySelector('.panelNumber-QuantityD1');

  let shelfQuantity_E2 = document.querySelector('.panelNumber-QuantityE2');
  let shelfQuantity_E1 = document.querySelector('.panelNumber-QuantityE1');

  let shelfQuantity_F1 = document.querySelector('.panelNumber-QuantityF1');
  let shelfQuantity_F2 = document.querySelector('.panelNumber-QuantityF2');

  let shelfQuantity_G1 = document.querySelector('.panelNumber-QuantityG1');
  let shelfQuantity_G2 = document.querySelector('.panelNumber-QuantityG2');

  let shelfQuantity_H1 = document.querySelector('.panelNumber-QuantityH1');
  let shelfQuantity_H2 = document.querySelector('.panelNumber-QuantityH2');

  let shelfQuantity_I1 = document.querySelector('.panelNumber-QuantityI1');
  let shelfQuantity_I2 = document.querySelector('.panelNumber-QuantityI2');

  let shelfQuantity_J1 = document.querySelector('.panelNumber-QuantityJ1');
  let shelfQuantity_J2 = document.querySelector('.panelNumber-QuantityJ2');

  let shelfQuantity_K1 = document.querySelector('.panelNumber-QuantityK1');
  let shelfQuantity_K2 = document.querySelector('.panelNumber-QuantityK2');

  let shelfQuantity_L1 = document.querySelector('.panelNumber-QuantityL1');
  let shelfQuantity_L2 = document.querySelector('.panelNumber-QuantityL2');




//**************//ADD HERE//************//
/*
const shelfQuantities = [
  'shelfQuantity_B1','shelfQuantity_B2','shelfQuantity_C1','shelfQuantity_C2','shelfQuantity_D1','shelfQuantity_D2','shelfQuantity_E1','shelfQuantity_E2'
];

shelfQuantities.forEach(id => {
  document.getElementById(id).value = '';
})
*/
shelfQuantity_A1.value = '';
shelfQuantity_A2.value = '';

shelfQuantity_B1.value = '';
shelfQuantity_B2.value = '';

shelfQuantity_C1.value = '';
shelfQuantity_C2.value = '';

shelfQuantity_D1.value = '';
shelfQuantity_D2.value = '';

shelfQuantity_E1.value = '';
shelfQuantity_E2.value = '';

shelfQuantity_F1.value = '';
shelfQuantity_F2.value = '';

shelfQuantity_G1.value = '';
shelfQuantity_G2.value = '';

shelfQuantity_H1.value = '';
shelfQuantity_H2.value = '';

shelfQuantity_I1.value = '';
shelfQuantity_I2.value = '';

shelfQuantity_J1.value = '';
shelfQuantity_J2.value = '';

shelfQuantity_K1.value = '';
shelfQuantity_K2.value = '';

shelfQuantity_L1.value = '';
shelfQuantity_L2.value = '';



//**************//ADD HERE//************//
shelfQuantity_A1.innerHTML = '0';
shelfQuantity_A2.innerHTML = '0';

shelfQuantity_B1.innerHTML = '0';
shelfQuantity_B2.innerHTML = '0';

shelfQuantity_C1.innerHTML = '0';
shelfQuantity_C2.innerHTML = '0';

shelfQuantity_D1.innerHTML = '0';
shelfQuantity_D2.innerHTML = '0';

shelfQuantity_E1.innerHTML = '0';
shelfQuantity_E2.innerHTML = '0';

shelfQuantity_F1.innerHTML = '0';
shelfQuantity_F2.innerHTML = '0';

shelfQuantity_G1.innerHTML = '0';
shelfQuantity_G2.innerHTML = '0';

shelfQuantity_H1.innerHTML = '0';
shelfQuantity_H2.innerHTML = '0';

shelfQuantity_I1.innerHTML = '0';
shelfQuantity_I2.innerHTML = '0';

shelfQuantity_J1.innerHTML = '0';
shelfQuantity_J2.innerHTML = '0';

shelfQuantity_K1.innerHTML = '0';
shelfQuantity_K2.innerHTML = '0';

shelfQuantity_L1.innerHTML = '0';
shelfQuantity_L2.innerHTML = '0';


//**************//ADD HERE//************//
  //INPUT HERE
  const inputA1 = document.querySelector('.js-input-A1');
  const inputA2 = document.querySelector('.js-input-A2');

  const inputB1 = document.querySelector('.js-input-B1');
  const inputB2 = document.querySelector('.js-input-B2');

  const inputC1 = document.querySelector('.js-input-C1');
  const inputC2 = document.querySelector('.js-input-C2');

  const inputD1 = document.querySelector('.js-input-D1');
  const inputD2 = document.querySelector('.js-input-D2');

  const inputE1 = document.querySelector('.js-input-E1');
  const inputE2 = document.querySelector('.js-input-E2');

  const inputF1 = document.querySelector('.js-input-F1');
  const inputF2 = document.querySelector('.js-input-F2');

  const inputG1 = document.querySelector('.js-input-G1');
  const inputG2 = document.querySelector('.js-input-G2');

  const inputH1 = document.querySelector('.js-input-H1');
  const inputH2 = document.querySelector('.js-input-H2');

  const inputI1 = document.querySelector('.js-input-I1');
  const inputI2 = document.querySelector('.js-input-I2');

  const inputJ1 = document.querySelector('.js-input-J1');
  const inputJ2 = document.querySelector('.js-input-J2');

  const inputK1 = document.querySelector('.js-input-K1');
  const inputK2 = document.querySelector('.js-input-K2');

  const inputL1 = document.querySelector('.js-input-L1');
  const inputL2 = document.querySelector('.js-input-L2');

  
  
// Click the input directly
 const inputPopUp = document.querySelectorAll
('.js-input-A1,.js-input-A2,.js-input-B1,.js-input-B2,.js-input-C1,.js-input-C2,.js-input-D1,.js-input-D2,.js-input-E1,.js-input-E2,.js-input-F1,.js-input-F2,.js-input-G1,.js-input-G2,.js-input-H1,.js-input-H2,.js-input-I1,.js-input-I2,.js-input-J1,.js-input-J2,.js-input-K1,.js-input-K2,.js-input-L1,.js-input-L2')


  //INPUT DISPLAY
  const allPanels = 
  [
    numberPanelA1,numberPanelA2,
    numberPanelB1,numberPanelB2,
    numberPanelC1,numberPanelC2,
    numberPanelD1,numberPanelD2,
    numberPanelE1,numberPanelE2,
    numberPanelF1,numberPanelF2,
    numberPanelG1,numberPanelG2,
    numberPanelH1,numberPanelH2,
    numberPanelI1,numberPanelI2,
    numberPanelJ1,numberPanelJ2,
    numberPanelK1,numberPanelK2,
    numberPanelL1,numberPanelL2
  ];
  
  allPanels.forEach(clickPanels => {
    clickPanels.addEventListener('click', () => {
     togglePanelOnOff = true;
    })
  }); 


//**************//ADD HERE//************//

shelfQuantity_A1.addEventListener('click', () => {
  if (upDownStates.A1 === 0 && flipButtons === Switch.NEUTRAL){
      clickShelfA1();
      hideOtherPanel('A1');
      upDownStates.A1 = 1;
    }
  else if(upDownStates.A1 === 1) {
      unclickShelfA1();
      upDownStates.A1 = 0;
    }
  });

shelfQuantity_A2.addEventListener('click', () => {
  if (upDownStates.A2 === 0 && flipButtons === Switch.NEUTRAL){
      clickShelfA2()
      hideOtherPanel('A2');
      upDownStates.A2 = 1;
  }
  else if (upDownStates.A2 === 1){
      unclickShelfA2();
      upDownStates.A2 = 0;
  }
  });

shelfQuantity_B1.addEventListener('click', () => {
    if (upDownStates.B1 === 0 && flipButtons === Switch.NEUTRAL){
        clickShelfB1()
        upDownStates.B1 = 1;
    }
    else if (upDownStates.B1 === 1){
        unclickShelfB1();
        upDownStates.B1 = 0;
    }
  });

shelfQuantity_B2.addEventListener('click', () => {
  if (upDownStates.B2 === 0 && flipButtons === Switch.NEUTRAL){
    clickShelfB2()
    upDownStates.B2 = 1;
  }
  else if (upDownStates.B2 === 1){
    unclickShelfB2();
    upDownStates.B2 = 0;
  }})

shelfQuantity_C1.addEventListener('click', () => {
  if(upDownStates.C1 === 0 && flipButtons === Switch.NEUTRAL){
    clickShelfC1()
    upDownStates.C1 = 1;
  }
  else if (upDownStates.C1 === 1){
    unclickShelfC1()
    upDownStates.C1 = 0;
  }
});


shelfQuantity_C2.addEventListener('click', () => {
  if (upDownStates.C2 === 0 && flipButtons === Switch.NEUTRAL){
    clickShelfC2()
    upDownStates.C2 = 1;
  }
  else if (upDownStates.C2 === 1){
    unclickShelfC2()
    upDownStates.C2 = 0;
  }
});


shelfQuantity_D1.addEventListener('click', () => {
  if (upDownStates.D1 === 0 && flipButtons === Switch.NEUTRAL){
    clickShelfD1()
    upDownStates.D1 = 1;
  }
  else if (upDownStates.D1 === 1) {
    unclickShelfD1()
    upDownStates.D1 = 0;
  }
});

shelfQuantity_D2.addEventListener('click', () => {
  if (upDownStates.D2 === 0 && flipButtons === Switch.NEUTRAL){
    clickShelfD2()
    upDownStates.D2 = 1;
  }
  else if (upDownStates.D2 = 1){
    unclickShelfD2()
    upDownStates.D2 = 0;
  }
});

shelfQuantity_E1.addEventListener('click', () => {
  if (upDownStates.E1 === 0 && flipButtons === Switch.NEUTRAL){
    clickShelfE1()
    upDownStates.E1 = 1;

  }
  else if (upDownStates.E1 = 1){
    unclickShelfE1()
    upDownStates.E1 = 0;
  }
  });
shelfQuantity_E2.addEventListener('click', () => {
  if (upDownStates.E2 === 0 && flipButtons === Switch.NEUTRAL){
    clickShelfE2()
    upDownStates.E2 = 1;
  }
  else if (upDownStates.E2 === 1){
    unclickShelfE2()
    upDownStates.E2 = 0;
  }
  });

  shelfQuantity_F1.addEventListener('click', () => {
    if (upDownStates.F1 === 0 && flipButtons === Switch.NEUTRAL){
      clickShelfF1()
      upDownStates.F1 = 1;
    }
    else if (upDownStates.F1 === 1){
      unclickShelfF1()
      upDownStates.F1 = 0;
    }
  });
  shelfQuantity_F2.addEventListener('click', () => {
    if (upDownStates.F2 === 0 && flipButtons === Switch.NEUTRAL){
      clickShelfF2()
      upDownStates.F2 = 1;
    }
    else if (upDownStates.F2 === 1){
      unclickShelfF2()
      upDownStates.F2 = 0;
    }
  });

  shelfQuantity_G1.addEventListener('click', () => {
    if (upDownStates.G1 === 0 && flipButtons === Switch.NEUTRAL){
      clickShelfG1()
      upDownStates.G1 = 1;
    }
    else if (upDownStates.G1 === 1){
      unclickShelfG1()
      upDownStates.G1 = 0;
    }
  });
  shelfQuantity_G2.addEventListener('click', () => {
    if (upDownStates.G2 === 0 && flipButtons === Switch.NEUTRAL){
      clickShelfG2();
      upDownStates.G2 = 1;
    }
    else if (upDownStates.G2 === 1){
      unclickShelfG2();
      upDownStates.G2 = 0;
    }
  });
  
  shelfQuantity_H1.addEventListener('click', () => {
    if (upDownStates.H1 === 0 && flipButtons === Switch.NEUTRAL){
      clickShelfH1();
      upDownStates.H1 = 1;
    }
    else if (upDownStates.H1 === 1){
      unclickShelfH1();
      upDownStates.H1 = 0;
    }
  });
  
  shelfQuantity_H2.addEventListener('click', () => {
    if (upDownStates.H2 === 0 && flipButtons === Switch.NEUTRAL){
      clickShelfH2();
      upDownStates.H2 = 1;
    }
    else if (upDownStates.H2 === 1){
      unclickShelfH2();
      upDownStates.H2 = 0;
    }
  });
  
  shelfQuantity_I1.addEventListener('click', () => {
    if (upDownStates.I1 === 0 && flipButtons === Switch.NEUTRAL){
      clickShelfI1();
      upDownStates.I1 = 1;
    }
    else if (upDownStates.I1 === 1){
      unclickShelfI1();
      upDownStates.I1 = 0;
    }
  });
  
  shelfQuantity_I2.addEventListener('click', () => {
    if (upDownStates.I2 === 0 && flipButtons === Switch.NEUTRAL){
      clickShelfI2();
      upDownStates.I2 = 1;
    }
    else if (upDownStates.I2 === 1){
      unclickShelfI2();
      upDownStates.I2 = 0;
    }
  });
  
  shelfQuantity_J1.addEventListener('click', () => {
    if (upDownStates.J1 === 0 && flipButtons === Switch.NEUTRAL){
      clickShelfJ1();
      upDownStates.J1 = 1;
    }
    else if (upDownStates.J1 === 1){
      unclickShelfJ1();
      upDownStates.J1 = 0;
    }
  });
  
  shelfQuantity_J2.addEventListener('click', () => {
    if (upDownStates.J2 === 0 && flipButtons === Switch.NEUTRAL){
      clickShelfJ2();
      upDownStates.J2 = 1;
    }
    else if (upDownStates.J2 === 1){
      unclickShelfJ2();
      upDownStates.J2 = 0;
    }
  });
  
  shelfQuantity_K1.addEventListener('click', () => {
    if (upDownStates.K1 === 0 && flipButtons === Switch.NEUTRAL){
      clickShelfK1();
      upDownStates.K1 = 1;
    }
    else if (upDownStates.K1 === 1){
      unclickShelfK1();
      upDownStates.K1 = 0;
    }
  });
  
  shelfQuantity_K2.addEventListener('click', () => {
    if (upDownStates.K2 === 0 && flipButtons === Switch.NEUTRAL){
      clickShelfK2();
      upDownStates.K2 = 1;
    }
    else if (upDownStates.K2 === 1){
      unclickShelfK2();
      upDownStates.K2 = 0;
    }
  });
  
  shelfQuantity_L1.addEventListener('click', () => {
    if (upDownStates.L1 === 0 && flipButtons === Switch.NEUTRAL){
      clickShelfL1();
      upDownStates.L1 = 1;
    }
    else if (upDownStates.L1 === 1){
      unclickShelfL1();
      upDownStates.L1 = 0;
    }
  });
  
  shelfQuantity_L2.addEventListener('click', () => {
    if (upDownStates.L2 === 0 && flipButtons === Switch.NEUTRAL){
      clickShelfL2();
      upDownStates.L2 = 1;
    }
    else if (upDownStates.L2 === 1){
      unclickShelfL2();
      upDownStates.L2 = 0;
    }
  });
  
  



//**************//ADD HERE//************//
    function HideA1(){
      numberPanelA1.classList.add("css-panelNumberA");
      numberPanelA1.classList.remove("css-panelNumber-activeA");
      enterQuantityA1.classList.remove('css-EnterPanelNumber-active');
      enterQuantityA1.classList.add('css-EnterPanelNumber');
    };

    function HideA2(){
      numberPanelA2.classList.add("css-panelNumberA");
      numberPanelA2.classList.remove("css-panelNumber-activeA");
      enterQuantityA2.classList.remove('css-EnterPanelNumber-active');
      enterQuantityA2.classList.add('css-EnterPanelNumber');
    };

    function HideB1(){
      numberPanelB1.classList.add("css-panelNumberA");
      numberPanelB1.classList.remove("css-panelNumber-activeA");
      enterQuantityB1.classList.remove('css-EnterPanelNumber-active');
      enterQuantityB1.classList.add('css-EnterPanelNumber');
    };

    function HideB2(){
      numberPanelB2.classList.add("css-panelNumberA");
      numberPanelB2.classList.remove("css-panelNumber-activeA");
      enterQuantityB2.classList.remove('css-EnterPanelNumber-active');
      enterQuantityB2.classList.add('css-EnterPanelNumber');
    };

    function HideC1(){
      numberPanelC1.classList.add("css-panelNumberA");
      numberPanelC1.classList.remove("css-panelNumber-activeA");
      enterQuantityC1.classList.remove('css-EnterPanelNumber-active');
      enterQuantityC1.classList.add('css-EnterPanelNumber');
    };

    function HideC2(){
      numberPanelC2.classList.add("css-panelNumberA");
      numberPanelC2.classList.remove("css-panelNumber-activeA");
      enterQuantityC2.classList.remove('css-EnterPanelNumber-active');
      enterQuantityC2.classList.add('css-EnterPanelNumber');
    };

    function HideD1(){
      numberPanelD1.classList.add("css-panelNumberB");
      numberPanelD1.classList.remove("css-panelNumber-activeB");
      enterQuantityD1.classList.remove('css-EnterPanelNumber-active');
      enterQuantityD1.classList.add('css-EnterPanelNumber');
    };

    function HideD2(){
      numberPanelD2.classList.add("css-panelNumberB");
      numberPanelD2.classList.remove("css-panelNumber-activeB");
      enterQuantityD2.classList.remove('css-EnterPanelNumber-active');
      enterQuantityD2.classList.add('css-EnterPanelNumber');
    };

    function HideE1(){
      numberPanelE1.classList.add("css-panelNumberB");
      numberPanelE1.classList.remove("css-panelNumber-activeB");
      enterQuantityE1.classList.remove('css-EnterPanelNumber-active');
      enterQuantityE1.classList.add('css-EnterPanelNumber');
    };
    
    function HideE2(){
      numberPanelE2.classList.add("css-panelNumberB");
      numberPanelE2.classList.remove("css-panelNumber-activeB");
      enterQuantityE2.classList.remove('css-EnterPanelNumber-active');
      enterQuantityE2.classList.add('css-EnterPanelNumber');
    };

    function HideF1(){
      numberPanelF1.classList.add("css-panelNumberB");
      numberPanelF1.classList.remove("css-panelNumber-activeB");
      enterQuantityF1.classList.remove('css-EnterPanelNumber-active');
      enterQuantityF1.classList.add('css-EnterPanelNumber');
    };
    
    function HideF2(){
      numberPanelF2.classList.add("css-panelNumber");
      numberPanelF2.classList.remove("css-panelNumber-activeB");
      enterQuantityF2.classList.remove('css-EnterPanelNumber-active');
      enterQuantityF2.classList.add('css-EnterPanelNumber');
    };

    function HideG1(){
      numberPanelG1.classList.add("css-panelNumberC");
      numberPanelG1.classList.remove("css-css-panelNumber-activeC");
      enterQuantityG1.classList.remove('css-EnterPanelNumber-active');
      enterQuantityG1.classList.add('css-EnterPanelNumber');
    };
    
    function HideG2(){
      numberPanelG2.classList.add("css-panelNumberC");
      numberPanelG2.classList.remove("css-panelNumber-activeC");
      enterQuantityG2.classList.remove('css-EnterPanelNumber-active');
      enterQuantityG2.classList.add('css-EnterPanelNumber');
    };

    function HideH1(){
      numberPanelH1.classList.add("css-panelNumberC");
      numberPanelH1.classList.remove("css-panelNumber-activeC");
      enterQuantityH1.classList.remove('css-EnterPanelNumber-active');
      enterQuantityH1.classList.add('css-EnterPanelNumber');
    };
    
    function HideH2(){
      numberPanelH2.classList.add("css-panelNumberC");
      numberPanelH2.classList.remove("css-panelNumber-activeC");
      enterQuantityH2.classList.remove('css-EnterPanelNumber-active');
      enterQuantityH2.classList.add('css-EnterPanelNumber');
    };
    
    function HideI1(){
      numberPanelI1.classList.add("css-panelNumberC");
      numberPanelI1.classList.remove("css-panelNumber-activeC");
      enterQuantityI1.classList.remove('css-EnterPanelNumber-active');
      enterQuantityI1.classList.add('css-EnterPanelNumber');
    };
    
    function HideI2(){
      numberPanelI2.classList.add("css-panelNumberC");
      numberPanelI2.classList.remove("css-panelNumber-activeC");
      enterQuantityI2.classList.remove('css-EnterPanelNumber-active');
      enterQuantityI2.classList.add('css-EnterPanelNumber');
    };
    
    function HideJ1(){
      numberPanelJ1.classList.add("css-panelNumberD");
      numberPanelJ1.classList.remove("css-panelNumber-activeD");
      enterQuantityJ1.classList.remove('css-EnterPanelNumber-active');
      enterQuantityJ1.classList.add('css-EnterPanelNumber');
    };
    
    function HideJ2(){
      numberPanelJ2.classList.add("css-panelNumberD");
      numberPanelJ2.classList.remove("css-panelNumber-activeD");
      enterQuantityJ2.classList.remove('css-EnterPanelNumber-active');
      enterQuantityJ2.classList.add('css-EnterPanelNumber');
    };
    
    function HideK1(){
      numberPanelK1.classList.add("css-panelNumberD");
      numberPanelK1.classList.remove("css-panelNumber-activeD");
      enterQuantityK1.classList.remove('css-EnterPanelNumber-active');
      enterQuantityK1.classList.add('css-EnterPanelNumber');
    };
    
    function HideK2(){
      numberPanelK2.classList.add("css-panelNumberD");
      numberPanelK2.classList.remove("css-panelNumber-activeD");
      enterQuantityK2.classList.remove('css-EnterPanelNumber-active');
      enterQuantityK2.classList.add('css-EnterPanelNumber');
    };
    
    function HideL1(){
      numberPanelL1.classList.add("css-panelNumberD");
      numberPanelL1.classList.remove("css-panelNumber-activeD");
      enterQuantityL1.classList.remove('css-EnterPanelNumber-active');
      enterQuantityL1.classList.add('css-EnterPanelNumber');
    };
    
    function HideL2(){
      numberPanelL2.classList.add("css-panelNumberD");
      numberPanelL2.classList.remove("css-panelNumber-activeD");
      enterQuantityL2.classList.remove('css-EnterPanelNumber-active');
      enterQuantityL2.classList.add('css-EnterPanelNumber');
    };

    const allFunctions = [
      { id: 'A1', func: HideA1 },
      { id: 'A2', func: HideA2 },
      { id: 'B1', func: HideB1 },
      { id: 'B2', func: HideB2 },
      { id: 'C1', func: HideC1 },
      { id: 'C2', func: HideC2 },
      { id: 'D1', func: HideD1 },
      { id: 'D2', func: HideD2 },
      { id: 'E1', func: HideE1 },
      { id: 'E2', func: HideE2 },
      { id: 'F1', func: HideF1 },
      { id: 'F2', func: HideF2 },
      { id: 'G1', func: HideG1 },
      { id: 'G2', func: HideG2 },
      { id: 'H1', func: HideH1 },
      { id: 'H2', func: HideH2 },
      { id: 'I1', func: HideI1 },
      { id: 'I2', func: HideI2 },
      { id: 'J1', func: HideJ1 },
      { id: 'J2', func: HideJ2 },
      { id: 'K1', func: HideK1 },
      { id: 'K2', func: HideK2 },
      { id: 'L1', func: HideL1 },
      { id: 'L2', func: HideL2 },
    ];
    

  function hideOtherPanel(panelID){
    allFunctions.forEach ( item => {
      if (panelID === item.id){
        //nothing
      }
      else {
        item.func();
      }
    })
  };

  let tryOnce = true;

  function savedData(){
    localStorage.setItem('savedObjects',JSON.stringify(data));
  };
  function savedHTML(){
    localStorage.setItem('itemName', JSON.stringify(savedOutput));
  }


function buttonClickUp(){
    document.querySelector('.js-goTop').addEventListener('click', () => {
    window.scrollTo({ top: 150, behavior: 'smooth' });
  })
}

let listTitle = document.querySelector('.list-title');



let scrollLimit = window.innerHeight/2; //10% of the scroll

/*
document.addEventListener('scroll', () => {
  if(window.scrollY > scrollLimit){

    listTitle.innerHTML = `
    <button class = "js-goTop">
    UP
    </button>`;
    goUp();
  }
  else {
    listTitle.innerHTML = `SHELF`;
  }
})
*/

document.addEventListener('scroll', () => {
  
  if(window.scrollY > scrollLimit){
    listTitle.classList.add("goDown");
    console.log('down');
    
    
      listTitle.innerHTML = `
      <button class="js-goTop"> 
      UP
      </button>`;
      buttonClickUp();
       
  }
  else if (window.scrollY/2){
    listTitle.classList.remove("goDown");
    console.log('up');

    listTitle.innerHTML = `SHELF`;
  }

})
//////////////////////RUNDATA//////////////////////////////////////

function runData(){
  output.innerHTML = '';
  output2.innterHTML = '';
  
  let eachEnterList = 0;

  data.forEach((item,index) => {

  const text = `
<div class="mainCover-list">
  <div class="js-remove-button">
    <button class="REMOVE-button">
      <i class="fa-solid fa-xmark"></i>
    </button>
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
</div>
  `;
    output.innerHTML += text;
    //localStorage.setItem('output',JSON.stringify(output2.innerHTML));
    savedData()
  });

    document.querySelectorAll('.css-shelf-list').forEach((highlight,index) => {
      highlight.addEventListener('click', () => { 
        highlight.classList.toggle("css-shelf-HIGHLIGHT");

        const loc = highlight.querySelector('.css-shelf-list-LOC').textContent.trim();

      // toggle the highlight between body and list
      //**************//ADD HERE//************//

        if(loc === 'A1'){
        mainShelfA1.classList.toggle("shelf-active"); 
        }
        else if(loc === 'A2'){
          mainShelfA2.classList.toggle("shelf-active");
        }
        else if(loc === 'B1'){
          mainShelfB1.classList.toggle("shelf-active");
        }
        else if(loc === 'B2'){
          mainShelfB2.classList.toggle("shelf-active");
        }
        else if(loc === 'C1'){
          mainShelfC1.classList.toggle("shelf-active");
        }
        else if(loc === 'C2'){
          mainShelfC2.classList.toggle("shelf-active");
        }
        else if(loc === 'D1'){
          mainShelfD2.classList.toggle("shelf-active");
        }
        else if(loc === 'D2'){
          mainShelfD2.classList.toggle("shelf-active");
        }
        else if(loc === 'E1'){
          mainShelfE1.classList.toggle("shelf-active");
        }
        else if(loc === 'E2'){
          mainShelfE2.classList.toggle("shelf-active");
        }
        else if(loc === 'F1'){
          mainShelfF1.classList.toggle("shelf-active");
        }
        else if(loc === 'F2'){
          mainShelfF2.classList.toggle("shelf-active");
        }
        else if(loc === 'G1'){
          mainShelfG1.classList.toggle("shelf-active");
        }
        else if(loc === 'G2'){
          mainShelfG2.classList.toggle("shelf-active");
        }
        else if(loc === 'H1'){
          mainShelfH1.classList.toggle("shelf-active");
        }
        else if(loc === 'H2'){
          mainShelfH2.classList.toggle("shelf-active");
        }
        else if(loc === 'I1'){
          mainShelfI1.classList.toggle("shelf-active");
        }
        else if(loc === 'I2'){
          mainShelfI2.classList.toggle("shelf-active");
        }
        else if(loc === 'J1'){
          mainShelfJ1.classList.toggle("shelf-active");
        }
        else if(loc === 'J2'){
          mainShelfJ2.classList.toggle("shelf-active");
        }
        else if(loc === 'K1'){
          mainShelfK1.classList.toggle("shelf-active");
        }
        else if(loc === 'K2'){
          mainShelfK2.classList.toggle("shelf-active");
        }
        else if(loc === 'L1'){
          mainShelfL1.classList.toggle("shelf-active");
        }
        else if(loc === 'L2'){
          mainShelfL2.classList.toggle("shelf-active");
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
//inputD1.classList.toggle("css-input-2", false);

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
      typingState = true;
    })
  });


//**************//ADD HERE//************//
/////////////////////////////////////////////////////
let itemNameHTMLA1 = document.querySelector('.js-one-A1');
let itemNameHTMLA2 = document.querySelector('.js-one-A2');
let itemNameHTMLB1 = document.querySelector('.js-one-B1');
let itemNameHTMLB2 = document.querySelector('.js-one-B2');
let itemNameHTMLC1 = document.querySelector('.js-one-C1');
let itemNameHTMLC2 = document.querySelector('.js-one-C2');
let itemNameHTMLD1 = document.querySelector('.js-one-D1');
let itemNameHTMLD2 = document.querySelector('.js-one-D2');
let itemNameHTMLE1 = document.querySelector('.js-one-E1');
let itemNameHTMLE2 = document.querySelector('.js-one-E2');
let itemNameHTMLF1 = document.querySelector('.js-one-F1');
let itemNameHTMLF2 = document.querySelector('.js-one-F2');
let itemNameHTMLG1 = document.querySelector('.js-one-G1');
let itemNameHTMLG2 = document.querySelector('.js-one-G2');
let itemNameHTMLH1 = document.querySelector('.js-one-H1');
let itemNameHTMLH2 = document.querySelector('.js-one-H2');
let itemNameHTMLI1 = document.querySelector('.js-one-I1');
let itemNameHTMLI2 = document.querySelector('.js-one-I2');
let itemNameHTMLJ1 = document.querySelector('.js-one-J1');
let itemNameHTMLJ2 = document.querySelector('.js-one-J2');
let itemNameHTMLK1 = document.querySelector('.js-one-K1');
let itemNameHTMLK2 = document.querySelector('.js-one-K2');
let itemNameHTMLL1 = document.querySelector('.js-one-L1');
let itemNameHTMLL2 = document.querySelector('.js-one-L2');


const jsOneforAll = 
[
  itemNameHTMLA1, itemNameHTMLA2, itemNameHTMLB1, itemNameHTMLB2, itemNameHTMLC1, itemNameHTMLC2,itemNameHTMLD1, itemNameHTMLD2, itemNameHTMLE1, itemNameHTMLE2, itemNameHTMLF1, itemNameHTMLF2, itemNameHTMLG1, itemNameHTMLG2, itemNameHTMLH1, itemNameHTMLH2, itemNameHTMLI1, itemNameHTMLI2, itemNameHTMLJ1, itemNameHTMLJ2, itemNameHTMLK1, itemNameHTMLK2, itemNameHTMLL1, itemNameHTMLL2
];

jsOneforAll.forEach((click) => {
  click.addEventListener('click',() => {
  switch(click){ //new method, be sure to note
    case itemNameHTMLA1:
      inputA1.classList.toggle("css-input-2",true);
      inputB2.classList.toggle("css-input-2",false);
      inputD2.classList.toggle("css-input-2",false);
      inputD1.classList.toggle("css-input-2",false);
      inputC1.classList.toggle("css-input-2",false);
      inputC2.classList.toggle("css-input-2",false);
      toggleState = shelf.A1;
      typingState = true;
      break;

    case itemNameHTMLA2:
      inputA2.classList.toggle("css-input-2",true);
      inputB2.classList.toggle("css-input-2",false);
      inputD2.classList.toggle("css-input-2",false);
      inputD1.classList.toggle("css-input-2",false);
      inputC1.classList.toggle("css-input-2",false);
      inputC2.classList.toggle("css-input-2",false);
      toggleState = shelf.A2;
      typingState = true;
      break;

    case itemNameHTMLB1:
      inputB1.classList.toggle("css-input-2",true);
      inputB2.classList.toggle("css-input-2",false);
      inputD2.classList.toggle("css-input-2",false);
      inputD1.classList.toggle("css-input-2",false);
      inputC1.classList.toggle("css-input-2",false);
      inputC2.classList.toggle("css-input-2",false);
      toggleState = shelf.B1;
      typingState = true;
      break;

    case itemNameHTMLB2:
      inputB2.classList.toggle("css-input-2",true);
      inputB1.classList.toggle("css-input-2",false);
      inputD2.classList.toggle("css-input-2",false);
      inputD1.classList.toggle("css-input-2",false);
      inputC1.classList.toggle("css-input-2",false);
      inputC2.classList.toggle("css-input-2",false);
      toggleState = shelf.B2;
      typingState = true;
      break;

    case itemNameHTMLC1:
      inputC1.classList.toggle("css-input-2",true);
      inputC2.classList.toggle("css-input-2",false);
      inputB1.classList.toggle("css-input-2",false);
      inputB2.classList.toggle("css-input-2",false);
      inputD2.classList.toggle("css-input-2",false);
      inputD1.classList.toggle("css-input-2",false);
      toggleState = shelf.C1;
      typingState = true;
      break;

    case itemNameHTMLC2:
      inputC2.classList.toggle("css-input-2",true);
      inputC1.classList.toggle("css-input-2",false);
      inputB1.classList.toggle("css-input-2",false);
      inputB2.classList.toggle("css-input-2",false);
      inputD2.classList.toggle("css-input-2",false);
      inputD1.classList.toggle("css-input-2",false);
      toggleState = shelf.C2; //this fucking one line ruin my code
      typingState = true;
      break;
    
    case itemNameHTMLD1:
      inputD1.classList.toggle("css-input-2", true);
      inputD2.classList.toggle("css-input-2",false);
      inputB1.classList.toggle("css-input-2",false);
      inputB2.classList.toggle("css-input-2",false);
      inputC1.classList.toggle("css-input-2",false);
      inputC2.classList.toggle("css-input-2",false);
      toggleState = shelf.D1;
      typingState = true;
      break;

    case itemNameHTMLD2:
      inputD2.classList.toggle("css-input-2",true);
      inputD1.classList.toggle("css-input-2",false);
      inputB1.classList.toggle("css-input-2",false);
      inputB2.classList.toggle("css-input-2",false);
      inputC1.classList.toggle("css-input-2",false);
      inputC2.classList.toggle("css-input-2",false);
      toggleState = shelf.D2;
      typingState = true;
      break;

    case itemNameHTMLE1:
      inputE1.classList.toggle("css-input-2",true);
      inputD1.classList.toggle("css-input-2",false);
      inputB1.classList.toggle("css-input-2",false);
      inputB2.classList.toggle("css-input-2",false);
      inputC1.classList.toggle("css-input-2",false);
      inputC2.classList.toggle("css-input-2",false);
      toggleState = shelf.E1;
      typingState = true;
      break;
    
    case itemNameHTMLE2:
      inputE2.classList.toggle("css-input-2",true);
      inputD1.classList.toggle("css-input-2",false);
      inputB1.classList.toggle("css-input-2",false);
      inputB2.classList.toggle("css-input-2",false);
      inputC1.classList.toggle("css-input-2",false);
      inputC2.classList.toggle("css-input-2",false);
      toggleState = shelf.E2;
      typingState = true;
      break;
    
    case itemNameHTMLF1:
      inputF1.classList.toggle("css-input-2",true);
      inputD1.classList.toggle("css-input-2",false);
      inputB1.classList.toggle("css-input-2",false);
      inputB2.classList.toggle("css-input-2",false);
      inputC1.classList.toggle("css-input-2",false);
      inputC2.classList.toggle("css-input-2",false);
      toggleState = shelf.F1;
      typingState = true;
      break;
    
    case itemNameHTMLF2:
      inputF2.classList.toggle("css-input-2",true);
      inputD1.classList.toggle("css-input-2",false);
      inputB1.classList.toggle("css-input-2",false);
      inputB2.classList.toggle("css-input-2",false);
      inputC1.classList.toggle("css-input-2",false);
      inputC2.classList.toggle("css-input-2",false);
      toggleState = shelf.F2;
      typingState = true;
      break;
    
    case itemNameHTMLG1:
      inputG1.classList.toggle("css-input-2",true);
      inputD1.classList.toggle("css-input-2",false);
      inputB1.classList.toggle("css-input-2",false);
      inputB2.classList.toggle("css-input-2",false);
      inputC1.classList.toggle("css-input-2",false);
      inputC2.classList.toggle("css-input-2",false);
      toggleState = shelf.G1;
      typingState = true;
      break;
    
    case itemNameHTMLG2:
      inputG2.classList.toggle("css-input-2",true);
      inputD1.classList.toggle("css-input-2",false);
      inputB1.classList.toggle("css-input-2",false);
      inputB2.classList.toggle("css-input-2",false);
      inputC1.classList.toggle("css-input-2",false);
      inputC2.classList.toggle("css-input-2",false);
      toggleState = shelf.G2;
      typingState = true;
      break;
    
    case itemNameHTMLH1:
      inputH1.classList.toggle("css-input-2",true);
      inputD1.classList.toggle("css-input-2",false);
      inputB1.classList.toggle("css-input-2",false);
      inputB2.classList.toggle("css-input-2",false);
      inputC1.classList.toggle("css-input-2",false);
      inputC2.classList.toggle("css-input-2",false);
      toggleState = shelf.H1;
      typingState = true;
      break;
      
    case itemNameHTMLH2:
      inputH2.classList.toggle("css-input-2",true);
      inputD1.classList.toggle("css-input-2",false);
      inputB1.classList.toggle("css-input-2",false);
      inputB2.classList.toggle("css-input-2",false);
      inputC1.classList.toggle("css-input-2",false);
      inputC2.classList.toggle("css-input-2",false);
      toggleState = shelf.H2;
      typingState = true;
      break;
    
    case itemNameHTMLI1:
      inputI1.classList.toggle("css-input-2",true);
      inputD1.classList.toggle("css-input-2",false);
      inputB1.classList.toggle("css-input-2",false);
      inputB2.classList.toggle("css-input-2",false);
      inputC1.classList.toggle("css-input-2",false);
      inputC2.classList.toggle("css-input-2",false);
      toggleState = shelf.I1;
      typingState = true;
      break;
    
    case itemNameHTMLI2:
      inputI2.classList.toggle("css-input-2",true);
      inputD1.classList.toggle("css-input-2",false);
      inputB1.classList.toggle("css-input-2",false);
      inputB2.classList.toggle("css-input-2",false);
      inputC1.classList.toggle("css-input-2",false);
      inputC2.classList.toggle("css-input-2",false);
      toggleState = shelf.I2;
      typingState = true;
      break;
        
    case itemNameHTMLJ1:
      inputJ1.classList.toggle("css-input-2",true);
      inputD1.classList.toggle("css-input-2",false);
      inputB1.classList.toggle("css-input-2",false);
      inputB2.classList.toggle("css-input-2",false);
      inputC1.classList.toggle("css-input-2",false);
      inputC2.classList.toggle("css-input-2",false);
      toggleState = shelf.J1;
      typingState = true;
      break;
    
    case itemNameHTMLJ2:
      inputJ2.classList.toggle("css-input-2",true);
      inputD1.classList.toggle("css-input-2",false);
      inputB1.classList.toggle("css-input-2",false);
      inputB2.classList.toggle("css-input-2",false);
      inputC1.classList.toggle("css-input-2",false);
      inputC2.classList.toggle("css-input-2",false);
      toggleState = shelf.J2;
      typingState = true;
      break;

    case itemNameHTMLK1:
      inputK1.classList.toggle("css-input-2",true);
      inputD1.classList.toggle("css-input-2",false);
      inputB1.classList.toggle("css-input-2",false);
      inputB2.classList.toggle("css-input-2",false);
      inputC1.classList.toggle("css-input-2",false);
      inputC2.classList.toggle("css-input-2",false);
      toggleState = shelf.K1;
      typingState = true;
      break;
    
    case itemNameHTMLK2:
      inputK2.classList.toggle("css-input-2",true);
      inputD1.classList.toggle("css-input-2",false);
      inputB1.classList.toggle("css-input-2",false);
      inputB2.classList.toggle("css-input-2",false);
      inputC1.classList.toggle("css-input-2",false);
      inputC2.classList.toggle("css-input-2",false);
      toggleState = shelf.K2;
      typingState = true;
      break;
          
    case itemNameHTMLL1:
      inputL1.classList.toggle("css-input-2",true);
      inputD1.classList.toggle("css-input-2",false);
      inputB1.classList.toggle("css-input-2",false);
      inputB2.classList.toggle("css-input-2",false);
      inputC1.classList.toggle("css-input-2",false);
      inputC2.classList.toggle("css-input-2",false);
      toggleState = shelf.L1;
      typingState = true;
      break;
    
    case itemNameHTMLL2:
      inputL2.classList.toggle("css-input-2",true);
      inputD1.classList.toggle("css-input-2",false);
      inputB1.classList.toggle("css-input-2",false);
      inputB2.classList.toggle("css-input-2",false);
      inputC1.classList.toggle("css-input-2",false);
      inputC2.classList.toggle("css-input-2",false);
      toggleState = shelf.L2;
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
      if (toggleState === shelf.A1){
      data.push({
        name: inputA1.value,
        quantity: quantitySupplement_A1,
        loc: shelf.A1
       });
       savedData();
       inputA1.classList.remove("css-input-2");
       inputA1.classList.add("css-input");
       typingState; 
       itemNameHTMLA1.innerHTML = inputA1.value;
       savedOutput[0].itemNameA1 = inputA1.value;
       savedOutput[0].quantityA1 = quantitySupplement_A1;
       console.log(savedOutput);
       savedHTML();
    }
    else if (toggleState === shelf.A2){
      data.push({
        name: inputA2.value,
        quantity: quantitySupplement_A2,
        loc: shelf.A2
       });
       savedData();
       inputA2.classList.remove("css-input-2");
       inputA2.classList.add("css-input");
       typingState; 
       itemNameHTMLA2.innerHTML = inputA2.value;
       savedOutput[1].itemNameA2 = inputA2.value;
       savedOutput[1].quantityA2 = quantitySupplement_A2;
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
    
    else if (toggleState === shelf.C1){
      data.push({
        name: inputC1.value,
        quantity: quantitySupplement_C1,
        loc: shelf.C1
       });
       savedData();
       inputC1.classList.remove("css-input-2");
       inputC1.classList.add("css-input");
       typingState; 
       itemNameHTMLC1.innerHTML = inputC1.value;
       savedOutput[4].itemNameC1 = inputC1.value;
       savedOutput[4].quantityC1 = quantitySupplement_C1;
       console.log(savedOutput);
       savedHTML();
    }
    else if (toggleState === shelf.C2){
      data.push({
        name: inputC2.value,
        quantity: quantitySupplement_C2,
        loc: shelf.C2
       });
       savedData();
       inputC2.classList.remove("css-input-2");
       inputC2.classList.add("css-input");
       typingState; 
       itemNameHTMLC2.innerHTML = inputC2.value;
       savedOutput[5].itemNameC2 = inputC2.value;
       savedOutput[5].quantityC2 = quantitySupplement_C2;
       console.log(savedOutput);
       savedHTML();
    }
    else if (toggleState === shelf.D1){
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
    else if (toggleState === shelf.E1){
      data.push({
        name: inputE1.value,
        quantity: quantitySupplement_E1,
        loc: shelf.E1
        });
        savedData();
        inputE1.classList.remove("css-input-2");
        inputE1.classList.add("css-input");
        typingState; 
        itemNameHTMLE1.innerHTML = inputE1.value;
        savedOutput[8].itemNameE1 = inputE1.value;
        savedOutput[8].quantityE1 = quantitySupplement_E1;
        console.log(savedOutput);
        savedHTML();
        console.log('runs [8]');
    }
    else if (toggleState === shelf.E2){
      data.push({
        name: inputE2.value,
        quantity: quantitySupplement_E2,
        loc: shelf.E2
        });
        savedData();
        inputE2.classList.remove("css-input-2");
        inputE2.classList.add("css-input");
        typingState; 
        itemNameHTMLE2.innerHTML = inputE2.value;
        savedOutput[9].itemNameE2 = inputE2.value;
        savedOutput[9].quantityE2 = quantitySupplement_E2;
        console.log(savedOutput);
        savedHTML();
        console.log('runs [8]');
    }
    else if (toggleState === shelf.F1){
      data.push({
        name: inputF1.value,
        quantity: quantitySupplement_F1,
        loc: shelf.F1
      });
      savedData();
      inputF1.classList.remove("css-input-2");
      inputF1.classList.add("css-input");
      typingState; 
      itemNameHTMLF1.innerHTML = inputF1.value;
      savedOutput[10].itemNameF1 = inputF1.value;
      savedOutput[10].quantityF1 = quantitySupplement_F1;
      console.log(savedOutput);
      savedHTML();
      console.log('runs [9]');
    }
    else if (toggleState === shelf.F2){
      data.push({
        name: inputF2.value,
        quantity: quantitySupplement_F2,
        loc: shelf.F2
      });
      savedData();
      inputF2.classList.remove("css-input-2");
      inputF2.classList.add("css-input");
      typingState; 
      itemNameHTMLF2.innerHTML = inputF2.value;
      savedOutput[11].itemNameF2 = inputF2.value;
      savedOutput[11].quantityF2 = quantitySupplement_F2;
      console.log(savedOutput);
      savedHTML();
      console.log('runs [10]');
    }
    else if (toggleState === shelf.G1){
      data.push({
        name: inputG1.value,
        quantity: quantitySupplement_G1,
        loc: shelf.G1
      });
      savedData();
      inputG1.classList.remove("css-input-2");
      inputG1.classList.add("css-input");
      typingState; 
      itemNameHTMLG1.innerHTML = inputG1.value;
      savedOutput[12].itemNameG1 = inputG1.value;
      savedOutput[12].quantityG1 = quantitySupplement_G1;
      console.log(savedOutput);
      savedHTML();
      console.log('runs [11]');
    }
    else if (toggleState === shelf.G2){
      data.push({
        name: inputG2.value,
        quantity: quantitySupplement_G2,
        loc: shelf.G2
      });
      savedData();
      inputG2.classList.remove("css-input-2");
      inputG2.classList.add("css-input");
      typingState; 
      itemNameHTMLG2.innerHTML = inputG2.value;
      savedOutput[13].itemNameG2 = inputG2.value;
      savedOutput[13].quantityG2 = quantitySupplement_G2;
      console.log(savedOutput);
      savedHTML();
      console.log('runs [12]');
    }
    else if (toggleState === shelf.H1){
      data.push({
        name: inputH1.value,
        quantity: quantitySupplement_H1,
        loc: shelf.H1
      });
      savedData();
      inputH1.classList.remove("css-input-2");
      inputH1.classList.add("css-input");
      typingState; 
      itemNameHTMLH1.innerHTML = inputH1.value;
      savedOutput[14].itemNameH1 = inputH1.value;
      savedOutput[14].quantityH1 = quantitySupplement_H1;
      console.log(savedOutput);
      savedHTML();
      console.log('runs [13]');
    }
    else if (toggleState === shelf.H2){
      data.push({
        name: inputH2.value,
        quantity: quantitySupplement_H2,
        loc: shelf.H2
      });
      savedData();
      inputH2.classList.remove("css-input-2");
      inputH2.classList.add("css-input");
      typingState; 
      itemNameHTMLH2.innerHTML = inputH2.value;
      savedOutput[15].itemNameH2 = inputH2.value;
      savedOutput[15].quantityH2 = quantitySupplement_H2;
      console.log(savedOutput);
      savedHTML();
      console.log('runs [14]');
    }
    else if (toggleState === shelf.I1){
      data.push({
        name: inputI1.value,
        quantity: quantitySupplement_I1,
        loc: shelf.I1
      });
      savedData();
      inputI1.classList.remove("css-input-2");
      inputI1.classList.add("css-input");
      typingState; 
      itemNameHTMLI1.innerHTML = inputI1.value;
      savedOutput[16].itemNameI1 = inputI1.value;
      savedOutput[16].quantityI1 = quantitySupplement_I1;
      console.log(savedOutput);
      savedHTML();
      console.log('runs [15]');
    }
    else if (toggleState === shelf.I2){
      data.push({
        name: inputI2.value,
        quantity: quantitySupplement_I2,
        loc: shelf.I2
      });
      savedData();
      inputI2.classList.remove("css-input-2");
      inputI2.classList.add("css-input");
      typingState; 
      itemNameHTMLI2.innerHTML = inputI2.value;
      savedOutput[17].itemNameI2 = inputI2.value;
    }
    else if (toggleState === shelf.J1){
      data.push({
        name: inputJ1.value,
        quantity: quantitySupplement_J1,
        loc: shelf.J1
      });
      savedData();
      inputJ1.classList.remove("css-input-2");
      inputJ1.classList.add("css-input");
      typingState; 
      itemNameHTMLJ1.innerHTML = inputJ1.value;
      savedOutput[18].itemNameJ1 = inputJ1.value;
      savedOutput[18].quantityJ1 = quantitySupplement_J1;
      console.log(savedOutput);
      savedHTML();
      console.log('runs [17]');
    }
    else if (toggleState === shelf.J2){
      data.push({
        name: inputJ2.value,
        quantity: quantitySupplement_J2,
        loc: shelf.J2
      });
      savedData();
      inputJ2.classList.remove("css-input-2");
      inputJ2.classList.add("css-input");
      typingState; 
      itemNameHTMLJ2.innerHTML = inputJ2.value;
      savedOutput[19].itemNameJ2 = inputJ2.value;
      savedOutput[19].quantityJ2 = quantitySupplement_J2;
      console.log(savedOutput);
      savedHTML();
      console.log('runs [18]');
    }
    else if (toggleState === shelf.K1){
      data.push({
        name: inputK1.value,
        quantity: quantitySupplement_K1,
        loc: shelf.K1
      });
      savedData();
      inputK1.classList.remove("css-input-2");
      inputK1.classList.add("css-input");
      typingState; 
      itemNameHTMLK1.innerHTML = inputK1.value;
      savedOutput[20].itemNameK1 = inputK1.value;
      savedOutput[20].quantityK1 = quantitySupplement_K1;
      console.log(savedOutput);
      savedHTML();
      console.log('runs [19]');
    }
    else if (toggleState === shelf.K2){
      data.push({
        name: inputK2.value,
        quantity: quantitySupplement_K2,
        loc: shelf.K2
      });
      savedData();
      inputK2.classList.remove("css-input-2");
      inputK2.classList.add("css-input");
      typingState; 
      itemNameHTMLK2.innerHTML = inputK2.value;
      savedOutput[21].itemNameK2 = inputK2.value;
      savedOutput[21].quantityK2 = quantitySupplement_K2;
      console.log(savedOutput);
      savedHTML();
      console.log('runs [20]');
    }
    else if (toggleState === shelf.L1){
      data.push({
        name: inputL1.value,
        quantity: quantitySupplement_L1,
        loc: shelf.L1
      });
      savedData();
      inputL1.classList.remove("css-input-2");
      inputL1.classList.add("css-input");
      typingState; 
      itemNameHTMLL1.innerHTML = inputL1.value;
      savedOutput[22].itemNameL1 = inputL1.value;
      savedOutput[22].quantityL1 = quantitySupplement_L1;
      console.log(savedOutput);
      savedHTML();
      console.log('runs [21]');
    }
    else if (toggleState === shelf.L2){
      data.push({
        name: inputL2.value,
        quantity: quantitySupplement_L2,
        loc: shelf.L2
      });
      savedData();
      inputL2.classList.remove("css-input-2");
      inputL2.classList.add("css-input");
      typingState; 
      itemNameHTMLL2.innerHTML = inputL2.value;
      savedOutput[23].itemNameL2 = inputL2.value;
      savedOutput[23].quantityL2 = quantitySupplement_L2;
      console.log(savedOutput);
      savedHTML();
      console.log('runs [22]');
    }

runData();
    } 
   }
  );
   
  
//**************//ADD HERE//************//
  //PLUS BUTTON
  const buttonAdd = document.querySelectorAll('.js-button-plus-A1,.js-button-plus-A2,.js-button-plus-B1,.js-button-plus-B2,.js-button-plus-C1,.js-button-plus-C2,.js-button-plus-D1,.js-button-plus-D2,.js-button-plus-E1,.js-button-plus-E2,.js-button-plus-F1,.js-button-plus-F2,.js-button-plus-G1,.js-button-plus-G2,.js-button-plus-H1,.js-button-plus-H2,.js-button-plus-I1,.js-button-plus-I2,.js-button-plus-J1,.js-button-plus-J2,.js-button-plus-K1,.js-button-plus-K2,.js-button-plus-L1,.js-button-plus-L2'
);

  buttonAdd.forEach(add => {
    add.addEventListener('click',buttonPlus);
  }
  );
  function buttonPlus(){
    if (toggleState === shelf.A1){
      quantitySupplement_A1++;
      shelfQuantity_A1.innerHTML = `x${quantitySupplement_A1}`;
    } 
    else if (toggleState === shelf.A2){
      quantitySupplement_A2++;
      shelfQuantity_A2.innerHTML = `x${quantitySupplement_A2}`;
    } 
    else if (toggleState === shelf.B1){
      quantitySupplement_B1++;
      shelfQuantity_B1.innerHTML = `x${quantitySupplement_B1}`;
    } 
    else if (toggleState === shelf.B2){
      quantitySupplement_B2++;
      shelfQuantity_B2.innerHTML = `x${quantitySupplement_B2}`;
    } 
    else if (toggleState === shelf.C1){
      quantitySupplement_C1++;
      shelfQuantity_C1.innerHTML = `x${quantitySupplement_C1}`;
    }
    else if (toggleState === shelf.C2){
      quantitySupplement_C2++;
      shelfQuantity_C2.innerHTML = `x${quantitySupplement_C2}`;
    }
    else if (toggleState === shelf.D1){
      quantitySupplement_D1++;
      shelfQuantity_D1.innerHTML = `x${quantitySupplement_D1}`;
    }
    else if (toggleState === shelf.D2){
      quantitySupplement_D2++;
      shelfQuantity_D2.innerHTML = `x${quantitySupplement_D2}`;
    }
    else if (toggleState === shelf.E1){
      quantitySupplement_E1++;
      shelfQuantity_E1.innerHTML = `x${quantitySupplement_E1}`;
    }
    else if (toggleState === shelf.E2){
      quantitySupplement_E2++;
      shelfQuantity_E2.innerHTML = `x${quantitySupplement_E2}`;
    }
    else if (toggleState === shelf.F1){
      quantitySupplement_F1++;
      shelfQuantity_F1.innerHTML = `x${quantitySupplement_F1}`;
    } 
    else if (toggleState === shelf.F2){
      quantitySupplement_F2++;
      shelfQuantity_F2.innerHTML = `x${quantitySupplement_F2}`
      console.log('F2');
    } 
    else if (toggleState === shelf.G1){
      quantitySupplement_G1++;
      shelfQuantity_G1.innerHTML = `x${quantitySupplement_G1}`;
    }
    else if (toggleState === shelf.G2){
      quantitySupplement_G2++;
      shelfQuantity_G2.innerHTML = `x${quantitySupplement_G2}`;
    }
    else if (toggleState === shelf.H1){
      quantitySupplement_H1++;
      shelfQuantity_H1.innerHTML = `x${quantitySupplement_H1}`;
    }
    else if (toggleState === shelf.H2){
      quantitySupplement_H2++;
      shelfQuantity_H2.innerHTML = `x${quantitySupplement_H2}`;
    }
    else if (toggleState === shelf.I1){
      quantitySupplement_I1++;
      shelfQuantity_I1.innerHTML = `x${quantitySupplement_I1}`;
    }
    else if (toggleState === shelf.I2){
      quantitySupplement_I2++;
      shelfQuantity_I2.innerHTML = `x${quantitySupplement_I2}`;
    }
    else if (toggleState === shelf.J1){
      quantitySupplement_J1++;
      shelfQuantity_J1.innerHTML = `x${quantitySupplement_J1}`;
    }
    else if (toggleState === shelf.J2){
      quantitySupplement_J2++;
      shelfQuantity_J2.innerHTML = `x${quantitySupplement_J2}`;
    }
    else if (toggleState === shelf.K1){
      quantitySupplement_K1++;
      shelfQuantity_K1.innerHTML = `x${quantitySupplement_K1}`;
    }
    else if (toggleState === shelf.K2){
      quantitySupplement_K2++;
      shelfQuantity_K2.innerHTML = `x${quantitySupplement_K2}`;
    }
    else if (toggleState === shelf.L1){
      quantitySupplement_L1++;
      shelfQuantity_L1.innerHTML = `x${quantitySupplement_L1}`;
    }
    else if (toggleState === shelf.L2){
      quantitySupplement_L2++;
      shelfQuantity_L2.innerHTML = `x${quantitySupplement_L2}`;
    }
    
  };

//**************//ADD HERE//************//
//SUBTRACT BUTTON
  const buttonSubtract = document.querySelectorAll('.js-button-minus-A1,.js-button-minus-A2,.js-button-minus-B1,.js-button-minus-B2,.js-button-minus-C1,.js-button-minus-C2,.js-button-minus-D1,.js-button-minus-D2,.js-button-minus-E1,.js-button-minus-E2,.js-button-minus-F1,.js-button-minus-F2,.js-button-minus-G1,.js-button-minus-G2,.js-button-minus-H1,.js-button-minus-H2,.js-button-minus-I1,.js-button-minus-I2,.js-button-minus-J1,.js-button-minus-J2,.js-button-minus-K1,.js-button-minus-K2,.js-button-minus-L1,.js-button-minus-L2'
);

  buttonSubtract.forEach(minus => {
    minus.addEventListener('click',buttonMinus); 
    })

    function buttonMinus(){
      if (toggleState === shelf.A1 && quantitySupplement_A1 > 0){
        quantitySupplement_A1--;
        shelfQuantity_A1.innerHTML = `x${quantitySupplement_A1}`;
      }
      else if (toggleState === shelf.A2 && quantitySupplement_A2 > 0){
        quantitySupplement_A2--;
        shelfQuantity_A2.innerHTML = `x${quantitySupplement_A2}`;
      }
      else if (toggleState === shelf.B1 && quantitySupplement_B1 > 0){
        quantitySupplement_B1--;
        shelfQuantity_B1.innerHTML = `x${quantitySupplement_B1}`;
      } 
      else if (toggleState === shelf.B2 && quantitySupplement_B2 > 0){
        quantitySupplement_B2--;
        shelfQuantity_B2.innerHTML = `x${quantitySupplement_B2}`;
      }
      else if (toggleState === shelf.C1 && quantitySupplement_C1 > 0){
        quantitySupplement_C1--;
        shelfQuantity_C1.innerHTML = `x${quantitySupplement_C1}`;
      }
      else if (toggleState === shelf.C2 &&   quantitySupplement_C2 > 0){
        quantitySupplement_C2--;
        shelfQuantity_C2.innerHTML = `x${quantitySupplement_C2}`;
      }
      else if (toggleState === shelf.D1 && quantitySupplement_D1 > 0){
        quantitySupplement_D1--;
        shelfQuantity_D1.innerHTML = `x${quantitySupplement_D1}`;
      }
      else if (toggleState === shelf.D2 &&   quantitySupplement_D2 > 0){
        quantitySupplement_D2--;
        shelfQuantity_D2.innerHTML = `x${quantitySupplement_D2}`;
      }
      else if (toggleState === shelf.E1 &&   quantitySupplement_E1 > 0){
        quantitySupplement_E1--;
        shelfQuantity_E1.innerHTML = `x${quantitySupplement_E1}`;
      }
      else if (toggleState === shelf.E2 &&   quantitySupplement_E2 > 0){
        quantitySupplement_E2--;
        shelfQuantity_E2.innerHTML = `x${quantitySupplement_E2}`;
      }
      else if (toggleState === shelf.F1 && quantitySupplement_F1 > 0){
        quantitySupplement_F1--;
        shelfQuantity_F1.innerHTML = `x${quantitySupplement_F1}`;
      } 
      else if (toggleState === shelf.F2 && quantitySupplement_F2 > 0){
        quantitySupplement_F2--;
        shelfQuantity_F2.innerHTML = `x${quantitySupplement_F2}`;
      } 
      else if (toggleState === shelf.G1 && quantitySupplement_G1 > 0){
        quantitySupplement_G1--;
        shelfQuantity_G1.innerHTML = `x${quantitySupplement_G1}`;
      }
      else if (toggleState === shelf.G2 && quantitySupplement_G2 > 0){
        quantitySupplement_G2--;
        shelfQuantity_G2.innerHTML = `x${quantitySupplement_G2}`;
      }
      else if (toggleState === shelf.H1 && quantitySupplement_H1 > 0){
        quantitySupplement_H1--;
        shelfQuantity_H1.innerHTML = `x${quantitySupplement_H1}`;
      }
      else if (toggleState === shelf.H2 && quantitySupplement_H2 > 0){
        quantitySupplement_H2--;
        shelfQuantity_H2.innerHTML = `x${quantitySupplement_H2}`;
      }
      else if (toggleState === shelf.I1 && quantitySupplement_I1 > 0){
        quantitySupplement_I1--;
        shelfQuantity_I1.innerHTML = `x${quantitySupplement_I1}`;
      }
      else if (toggleState === shelf.I2 && quantitySupplement_I2 > 0){
        quantitySupplement_I2--;
        shelfQuantity_I2.innerHTML = `x${quantitySupplement_I2}`;
      }
      else if (toggleState === shelf.J1 && quantitySupplement_J1 > 0){
        quantitySupplement_J1--;
        shelfQuantity_J1.innerHTML = `x${quantitySupplement_J1}`;
      }
      else if (toggleState === shelf.J2 && quantitySupplement_J2 > 0){
        quantitySupplement_J2--;
        shelfQuantity_J2.innerHTML = `x${quantitySupplement_J2}`;
      }
      else if (toggleState === shelf.K1 && quantitySupplement_K1 > 0){
        quantitySupplement_K1--;
        shelfQuantity_K1.innerHTML = `x${quantitySupplement_K1}`;
      }
      else if (toggleState === shelf.K2 && quantitySupplement_K2 > 0){
        quantitySupplement_K2--;
        shelfQuantity_K2.innerHTML = `x${quantitySupplement_K2}`;
      }
      else if (toggleState === shelf.L1 && quantitySupplement_L1 > 0){
        quantitySupplement_L1--;
        shelfQuantity_L1.innerHTML = `x${quantitySupplement_L1}`;
      }
      else if (toggleState === shelf.L2 && quantitySupplement_L2 > 0){
        quantitySupplement_L2--;
        shelfQuantity_L2.innerHTML = `x${quantitySupplement_L2}`;
      }
      
      else {
        alert('Reach Limit');
    }
  };


  function ToggleShelfActive(shelfID){
    if(shelfID === 'A1'){
      mainShelfA1.classList.add("shelf-active");
      mainShelfB2.classList.remove("shelf-active");
      mainShelfD1.classList.remove("shelf-active");
      mainShelfD2.classList.remove("shelf-active");
    }
    else if(shelfID === 'A2'){
      mainShelfA2.classList.add("shelf-active");
      mainShelfB2.classList.remove("shelf-active");
      mainShelfD1.classList.remove("shelf-active");
      mainShelfD2.classList.remove("shelf-active");
    }
    else if(shelfID === 'B1'){
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
    else if(shelfID === 'C1'){
      mainShelfC1.classList.add("shelf-active");
      mainShelfC2.classList.remove("shelf-active");
      mainShelfD2.classList.remove("shelf-active");
      mainShelfB1.classList.remove("shelf-active");
      mainShelfB2.classList.remove("shelf-active");
    }
    else if(shelfID === 'C2'){
      mainShelfC2.classList.add("shelf-active");
      mainShelfC1.classList.remove("shelf-active");
      mainShelfD1.classList.remove("shelf-active");
      mainShelfB1.classList.remove("shelf-active");
      mainShelfB2.classList.remove("shelf-active");
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
    else if(shelfID === 'E1'){
      mainShelfE1.classList.add("shelf-active");
      mainShelfD1.classList.remove("shelf-active");
      mainShelfB1.classList.remove("shelf-active");
      mainShelfB2.classList.remove("shelf-active");
    }
    else if(shelfID === 'E2'){
      mainShelfE2.classList.add("shelf-active");
      mainShelfD1.classList.remove("shelf-active");
      mainShelfB1.classList.remove("shelf-active");
      mainShelfB2.classList.remove("shelf-active");
    }
    else if (shelfID === 'F1'){
      mainShelfF1.classList.add("shelf-active");
      mainShelfD1.classList.remove("shelf-active");
      mainShelfB1.classList.remove("shelf-active");
      mainShelfB2.classList.remove("shelf-active");
    }
    else if (shelfID === 'F2'){
      mainShelfF2.classList.add("shelf-active");
      mainShelfD1.classList.remove("shelf-active");
      mainShelfB1.classList.remove("shelf-active");
      mainShelfB2.classList.remove("shelf-active");
    }
    else if (shelfID === 'G1'){
      mainShelfG1.classList.add("shelf-active");
      mainShelfD1.classList.remove("shelf-active");
      mainShelfB1.classList.remove("shelf-active");
      mainShelfB2.classList.remove("shelf-active");
    }
    else if (shelfID === 'G2'){
      mainShelfG2.classList.add("shelf-active");
      mainShelfD1.classList.remove("shelf-active");
      mainShelfB1.classList.remove("shelf-active");
      mainShelfB2.classList.remove("shelf-active");
    }
    else if (shelfID === 'H1'){
      mainShelfH1.classList.add("shelf-active");
      mainShelfD1.classList.remove("shelf-active");
      mainShelfB1.classList.remove("shelf-active");
      mainShelfB2.classList.remove("shelf-active");
    }
    else if (shelfID === 'H2'){
      mainShelfH2.classList.add("shelf-active");
      mainShelfD1.classList.remove("shelf-active");
      mainShelfB1.classList.remove("shelf-active");
      mainShelfB2.classList.remove("shelf-active");
    }
    else if (shelfID === 'I1'){
      mainShelfI1.classList.add("shelf-active");
      mainShelfD1.classList.remove("shelf-active");
      mainShelfB1.classList.remove("shelf-active");
      mainShelfB2.classList.remove("shelf-active");
    }
    else if (shelfID === 'I2'){
      mainShelfI2.classList.add("shelf-active");
      mainShelfD1.classList.remove("shelf-active");
      mainShelfB1.classList.remove("shelf-active");
      mainShelfB2.classList.remove("shelf-active");
    }
    else if (shelfID === 'J1'){
      mainShelfJ1.classList.add("shelf-active");
      mainShelfD1.classList.remove("shelf-active");
      mainShelfB1.classList.remove("shelf-active");
      mainShelfB2.classList.remove("shelf-active");
    }
    else if (shelfID === 'J2'){
      mainShelfJ2.classList.add("shelf-active");
      mainShelfD1.classList.remove("shelf-active");
      mainShelfB1.classList.remove("shelf-active");
      mainShelfB2.classList.remove("shelf-active");
    }
    else if (shelfID === 'K1'){
      mainShelfK1.classList.add("shelf-active");
      mainShelfD1.classList.remove("shelf-active");
      mainShelfB1.classList.remove("shelf-active");
      mainShelfB2.classList.remove("shelf-active");
    }
    else if (shelfID === 'K2'){
      mainShelfK2.classList.add("shelf-active");
      mainShelfD1.classList.remove("shelf-active");
      mainShelfB1.classList.remove("shelf-active");
      mainShelfB2.classList.remove("shelf-active");
    }
    else if (shelfID === 'L1'){
      mainShelfL1.classList.add("shelf-active");
      mainShelfD1.classList.remove("shelf-active");
      mainShelfB1.classList.remove("shelf-active");
      mainShelfB2.classList.remove("shelf-active");
    }
    else if (shelfID === 'L2'){
      mainShelfL2.classList.add("shelf-active");
      mainShelfD1.classList.remove("shelf-active");
      mainShelfB1.classList.remove("shelf-active");
      mainShelfB2.classList.remove("shelf-active");
    }
    
  };

  function clickShelfA1(){
    ToggleShelfActive('A1');
    numberPanelA1.classList.add("css-panelNumber-activeA");
    numberPanelA1.classList.remove("css-panelNumberA");
    enterQuantityA1.classList.add('css-EnterPanelNumber-active');
    enterQuantityA1.classList.remove('css-EnterPanelNumber');
    inputA1.classList.add("css-input");
    inputA1.classList.toggle("css-input-2",false);
    toggleHighlight = Hili.on;
    toggleState = shelf.A1;
  };
  function unclickShelfA1(){
    toggleHighlight = Hili.off;
    mainShelfA1.classList.remove("shelf-active");
    numberPanelA1.classList.add("css-panelNumberA");
    numberPanelA1.classList.remove("css-panelNumber-activeA");
    enterQuantityA1.classList.remove('css-EnterPanelNumber-active');
    enterQuantityA1.classList.add('css-EnterPanelNumber');
  };

  function clickShelfA2(){
    ToggleShelfActive('A2');
    numberPanelA2.classList.add("css-panelNumber-activeA");
    numberPanelA2.classList.remove("css-panelNumberA");
    enterQuantityA2.classList.add('css-EnterPanelNumber-active');
    enterQuantityA2.classList.remove('css-EnterPanelNumber');
    inputA2.classList.add("css-input");
    inputA2.classList.toggle("css-input-2",false);
    toggleHighlight = Hili.on;
    toggleState = shelf.A2;
  };
  function unclickShelfA2(){
    toggleHighlight = Hili.off;
    mainShelfA2.classList.remove("shelf-active");
    numberPanelA2.classList.add("css-panelNumberA");
    numberPanelA2.classList.remove("css-panelNumber-activeA");
    enterQuantityA2.classList.remove('css-EnterPanelNumber-active');
    enterQuantityA2.classList.add('css-EnterPanelNumber');
    inputA2.classList.add("css-input");
  };

  function clickShelfB1(){
    ToggleShelfActive('B1');
    numberPanelB1.classList.add("css-panelNumber-activeA");
    numberPanelB1.classList.remove("css-panelNumberA");
    enterQuantityB1.classList.add('css-EnterPanelNumber-active');
    enterQuantityB1.classList.remove('css-EnterPanelNumber');
    inputB1.classList.add("css-input");
    inputB1.classList.toggle("css-input-2",false);
    toggleHighlight = Hili.on;
    toggleState = shelf.B1;
    togglePanelOnOff = true;
  };
  function unclickShelfB1(){
    numberPanelB1.classList.add("css-panelNumberA");
    numberPanelB1.classList.remove("css-panelNumber-activeA");
    enterQuantityB1.classList.remove('css-EnterPanelNumber-active');
    enterQuantityB1.classList.add('css-EnterPanelNumber');
    inputB1.classList.add("css-input");
    togglePanelOnOff = false;
    toggleHighlight = Hili.off;
    mainShelfB1.classList.remove("shelf-active");
  };

  function clickShelfB2(){
    ToggleShelfActive('B2');
    numberPanelB2.classList.add("css-panelNumber-activeA");
    numberPanelB2.classList.remove("css-panelNumberA");
    enterQuantityB2.classList.add('css-EnterPanelNumber-active');
    enterQuantityB2.classList.remove('css-EnterPanelNumber');
    inputB2.classList.add("css-input");
    inputB2.classList.toggle("css-input-2",false); 
    toggleHighlight = Hili.on;
    toggleState = shelf.B2;
  };
  function unclickShelfB2(){
    numberPanelB2.classList.add("css-panelNumberA");
    numberPanelB2.classList.remove("css-panelNumber-activeA");
    enterQuantityB2.classList.remove('css-EnterPanelNumber-active');
    enterQuantityB2.classList.add('css-EnterPanelNumber');
    inputB2.classList.add("css-input");
    toggleHighlight = Hili.off;
    mainShelfB2.classList.remove("shelf-active");
  };

  function clickShelfC1(){
    ToggleShelfActive('C1');
    numberPanelC1.classList.add("css-panelNumber-activeA");
    enterQuantityC1.classList.add('css-EnterPanelNumber-active');
    numberPanelC1.classList.remove("css-panelNumberA");
    enterQuantityC1.classList.remove('css-EnterPanelNumber');
    inputC1.classList.add("css-input");
    inputC1.classList.toggle("css-input-2",false); 
    toggleHighlight = Hili.on;
    toggleState = shelf.C1;
  };
  function unclickShelfC1(){
    numberPanelC1.classList.add("css-panelNumberA");
    numberPanelC1.classList.remove("css-panelNumber-activeA");
    enterQuantityC1.classList.remove('css-EnterPanelNumber-active');
    enterQuantityC1.classList.add('css-EnterPanelNumber');
    inputC1.classList.add("css-input");
    toggleHighlight = Hili.off;
    mainShelfC1.classList.remove("shelf-active");
  };

  function clickShelfC2(){
    ToggleShelfActive('C2');
    numberPanelC2.classList.add("css-panelNumber-activeA");
    enterQuantityC2.classList.add('css-EnterPanelNumber-active');
    numberPanelC2.classList.remove("css-panelNumberA");
    enterQuantityC2.classList.remove('css-EnterPanelNumber');
    inputC2.classList.add("css-input");
    inputC2.classList.toggle("css-input-2",false); 
    toggleHighlight = Hili.on;
    toggleState = shelf.C2;
  };
  function unclickShelfC2(){
    numberPanelC2.classList.add("css-panelNumberA");
    numberPanelC2.classList.remove("css-panelNumber-activeA");
    enterQuantityC2.classList.remove('css-EnterPanelNumber-active');
    enterQuantityC2.classList.add('css-EnterPanelNumber');
    inputC2.classList.add("css-input");
    toggleHighlight = Hili.off;
    mainShelfC2.classList.remove("shelf-active");
  };


  function clickShelfD1(){
    ToggleShelfActive('D1');
    numberPanelD1.classList.add("css-panelNumber-activeB");
    numberPanelD1.classList.remove("css-panelNumberB");
    enterQuantityD1.classList.add('css-EnterPanelNumber-active');
    enterQuantityD1.classList.remove('css-EnterPanelNumber');
    inputD1.classList.add("css-input");
    inputD1.classList.toggle("css-input-2",false);
    toggleHighlight = Hili.on;
    toggleState = shelf.D1;
  };
  function unclickShelfD1(){
    numberPanelD1.classList.add("css-panelNumberB");
    numberPanelD1.classList.remove("css-panelNumber-activeB");
    enterQuantityD1.classList.remove('css-EnterPanelNumber-active');
    enterQuantityD1.classList.add('css-EnterPanelNumber');
    inputD1.classList.add("css-input");
    mainShelfD1.classList.remove("shelf-active");
    toggleHighlight = Hili.off;
  };
  
  function clickShelfD2(){
    ToggleShelfActive('D2');
    numberPanelD2.classList.add("css-panelNumber-activeB");
    numberPanelD2.classList.remove("css-panelNumberB");
    enterQuantityD2.classList.add('css-EnterPanelNumber-active');
    enterQuantityD2.classList.remove('css-EnterPanelNumber');
    inputD2.classList.add("css-input");
    inputD2.classList.toggle("css-input-2",false);
    toggleHighlight = Hili.on;
    toggleState = shelf.D2;
  };
  function unclickShelfD2(){
    numberPanelD2.classList.add("css-panelNumberB");
    numberPanelD2.classList.remove("css-panelNumber-activeB");
    enterQuantityD2.classList.remove('css-EnterPanelNumber-active');
    enterQuantityD2.classList.add('css-EnterPanelNumber');
    inputD2.classList.add("css-input");
    mainShelfD2.classList.remove("shelf-active");
    toggleHighlight = Hili.off;
  };

  function clickShelfE1(){
    ToggleShelfActive('E1');
    numberPanelE1.classList.add("css-panelNumber-activeB");
    numberPanelE1.classList.remove("css-panelNumberB");
    enterQuantityE1.classList.add('css-EnterPanelNumber-active');
    enterQuantityE1.classList.remove('css-EnterPanelNumber');
    inputE1.classList.add("css-input");
    inputE1.classList.toggle("css-input-2",false);
    toggleHighlight = Hili.on;
    toggleState = shelf.E1;
  };
  function unclickShelfE1(){
    numberPanelE1.classList.add("css-panelNumberB");
    numberPanelE1.classList.remove("css-panelNumber-activeB");
    enterQuantityE1.classList.remove('css-EnterPanelNumber-active');
    enterQuantityE1.classList.add('css-EnterPanelNumber');
    inputE1.classList.add("css-input");
    togglePanelOnOff = false;
    mainShelfE1.classList.remove("shelf-active");
    toggleHighlight = Hili.off;
  };
  
    function clickShelfE2(){
    ToggleShelfActive('E2');
    numberPanelE2.classList.add("css-panelNumber-activeB");
    enterQuantityE2.classList.add('css-EnterPanelNumber-active');
    numberPanelE2.classList.remove("css-panelNumberB");
    enterQuantityE2.classList.remove('css-EnterPanelNumber');
    inputE2.classList.add("css-input");
    inputE2.classList.toggle("css-input-2",false);
    toggleHighlight = Hili.on;
    toggleState = shelf.E2;
  };
  function unclickShelfE2(){
    numberPanelE2.classList.add("css-panelNumberB");
    numberPanelE2.classList.remove("css-panelNumber-activeB");
    enterQuantityE2.classList.remove('css-EnterPanelNumber-active');
    enterQuantityE2.classList.add('css-EnterPanelNumber');
    inputE2.classList.add("css-input");
    togglePanelOnOff = false;
    mainShelfE2.classList.remove("shelf-active");
    toggleHighlight = Hili.off;
  };

  function clickShelfF1(){
    ToggleShelfActive('F1');
    numberPanelF1.classList.add("css-panelNumber-activeB");
    enterQuantityF1.classList.add('css-EnterPanelNumber-active');
    numberPanelF1.classList.remove("css-panelNumberB");
    enterQuantityF1.classList.remove('css-EnterPanelNumber');
    inputF1.classList.add("css-input");
    inputF1.classList.toggle("css-input-2",false);
    toggleHighlight = Hili.on;
    toggleState = shelf.F1;
  };
  function unclickShelfF1(){
    numberPanelF1.classList.add("css-panelNumberB");
    numberPanelF1.classList.remove("css-panelNumber-activeB");
    enterQuantityF1.classList.remove('css-EnterPanelNumber-active');
    enterQuantityF1.classList.add('css-EnterPanelNumber');
    inputF1.classList.add("css-input");
    togglePanelOnOff = false;
    mainShelfF1.classList.remove("shelf-active");
    toggleHighlight = Hili.off;
  };
  
  function clickShelfF2(){
    ToggleShelfActive('F2');
    numberPanelF2.classList.add("css-panelNumber-activeB");
    enterQuantityF2.classList.add('css-EnterPanelNumber-active');
    numberPanelF2.classList.remove("css-panelNumberB");
    enterQuantityF2.classList.remove('css-EnterPanelNumber');
    inputF2.classList.add("css-input");
    inputF2.classList.toggle("css-input-2",false);
    toggleHighlight = Hili.on;
    toggleState = shelf.F2;
  };
  function unclickShelfF2(){
    numberPanelF2.classList.add("css-panelNumberB");
    numberPanelF2.classList.remove("css-panelNumber-activeB");
    enterQuantityF2.classList.remove('css-EnterPanelNumber-active');
    enterQuantityF2.classList.add('css-EnterPanelNumber');
    inputF2.classList.add("css-input");
    togglePanelOnOff = false;
    mainShelfF2.classList.remove("shelf-active");
    toggleHighlight = Hili.off;
  };

  function clickShelfG1(){
    ToggleShelfActive('G1');
    numberPanelG1.classList.add("css-panelNumber-activeC");
    enterQuantityG1.classList.add('css-EnterPanelNumber-active');
    numberPanelG1.classList.remove("css-panelNumberC");
    enterQuantityG1.classList.remove('css-EnterPanelNumber');
    inputG1.classList.add("css-input");
    inputG1.classList.toggle("css-input-2",false);
    toggleHighlight = Hili.on;
    toggleState = shelf.G1;
  };
  function unclickShelfG1(){
    numberPanelG1.classList.add("css-panelNumberC");
    numberPanelG1.classList.remove("css-panelNumber-activeC");
    enterQuantityG1.classList.remove('css-EnterPanelNumber-active');
    enterQuantityG1.classList.add('css-EnterPanelNumber');
    inputG1.classList.add("css-input");
    togglePanelOnOff = false;
    mainShelfG1.classList.remove("shelf-active");
    toggleHighlight = Hili.off;
  };
  
  function clickShelfG2(){
    ToggleShelfActive('G2');
    numberPanelG2.classList.add("css-panelNumber-activeC");
    enterQuantityG2.classList.add('css-EnterPanelNumber-active');
    numberPanelG2.classList.remove("css-panelNumberC");
    enterQuantityG2.classList.remove('css-EnterPanelNumber');
    inputG2.classList.add("css-input");
    inputG2.classList.toggle("css-input-2",false);
    toggleHighlight = Hili.on;
    toggleState = shelf.G2;
  };
  
  function unclickShelfG2(){
    numberPanelG2.classList.add("css-panelNumberC");
    numberPanelG2.classList.remove("css-panelNumber-activeC");
    enterQuantityG2.classList.remove('css-EnterPanelNumber-active');
    enterQuantityG2.classList.add('css-EnterPanelNumber');
    inputG2.classList.add("css-input");
    togglePanelOnOff = false;
    mainShelfG2.classList.remove("shelf-active");
    toggleHighlight = Hili.off;
  };
  
  function clickShelfH1(){
    ToggleShelfActive('H1');
    numberPanelH1.classList.add("css-panelNumber-activeC");
    enterQuantityH1.classList.add('css-EnterPanelNumber-active');
    numberPanelH1.classList.remove("css-panelNumberC");
    enterQuantityH1.classList.remove('css-EnterPanelNumber');
    inputH1.classList.add("css-input");
    inputH1.classList.toggle("css-input-2",false);
    toggleHighlight = Hili.on;
    toggleState = shelf.H1;
  };
  
  function unclickShelfH1(){
    numberPanelH1.classList.add("css-panelNumberC");
    numberPanelH1.classList.remove("css-panelNumber-activeC");
    enterQuantityH1.classList.remove('css-EnterPanelNumber-active');
    enterQuantityH1.classList.add('css-EnterPanelNumber');
    inputH1.classList.add("css-input");
    togglePanelOnOff = false;
    mainShelfH1.classList.remove("shelf-active");
    toggleHighlight = Hili.off;
  };
  
  function clickShelfH2(){
    ToggleShelfActive('H2');
    numberPanelH2.classList.add("css-panelNumber-activeC");
    enterQuantityH2.classList.add('css-EnterPanelNumber-active');
    numberPanelH2.classList.remove("css-panelNumberC");
    enterQuantityH2.classList.remove('css-EnterPanelNumber');
    inputH2.classList.add("css-input");
    inputH2.classList.toggle("css-input-2",false);
    toggleHighlight = Hili.on;
    toggleState = shelf.H2;
  };
  
  function unclickShelfH2(){
    numberPanelH2.classList.add("css-panelNumberC");
    numberPanelH2.classList.remove("css-panelNumber-activeC");
    enterQuantityH2.classList.remove('css-EnterPanelNumber-active');
    enterQuantityH2.classList.add('css-EnterPanelNumber');
    inputH2.classList.add("css-input");
    togglePanelOnOff = false;
    mainShelfH2.classList.remove("shelf-active");
    toggleHighlight = Hili.off;
  };
  
  function clickShelfI1(){
    ToggleShelfActive('I1');
    numberPanelI1.classList.add("css-panelNumber-activeC");
    enterQuantityI1.classList.add('css-EnterPanelNumber-active');
    numberPanelI1.classList.remove("css-panelNumberC");
    enterQuantityI1.classList.remove('css-EnterPanelNumber');
    inputI1.classList.add("css-input");
    inputI1.classList.toggle("css-input-2",false);
    toggleHighlight = Hili.on;
    toggleState = shelf.I1;
  };
  
  function unclickShelfI1(){
    numberPanelI1.classList.add("css-panelNumberC");
    numberPanelI1.classList.remove("css-panelNumber-activeC");
    enterQuantityI1.classList.remove('css-EnterPanelNumber-active');
    enterQuantityI1.classList.add('css-EnterPanelNumber');
    inputI1.classList.add("css-input");
    togglePanelOnOff = false;
    mainShelfI1.classList.remove("shelf-active");
    toggleHighlight = Hili.off;
  };
  
  function clickShelfI2(){
    ToggleShelfActive('I2');
    numberPanelI2.classList.add("css-panelNumber-activeC");
    enterQuantityI2.classList.add('css-EnterPanelNumber-active');
    numberPanelI2.classList.remove("css-panelNumberC");
    enterQuantityI2.classList.remove('css-EnterPanelNumber');
    inputI2.classList.add("css-input");
    inputI2.classList.toggle("css-input-2",false);
    toggleHighlight = Hili.on;
    toggleState = shelf.I2;
  };
  
  function unclickShelfI2(){
    numberPanelI2.classList.add("css-panelNumberC");
    numberPanelI2.classList.remove("css-panelNumber-activeC");
    enterQuantityI2.classList.remove('css-EnterPanelNumber-active');
    enterQuantityI2.classList.add('css-EnterPanelNumber');
    inputI2.classList.add("css-input");
    togglePanelOnOff = false;
    mainShelfI2.classList.remove("shelf-active");
    toggleHighlight = Hili.off;
  };
  
  function clickShelfJ1(){
    ToggleShelfActive('J1');
    numberPanelJ1.classList.add("css-panelNumber-activeD");
    enterQuantityJ1.classList.add('css-EnterPanelNumber-active');
    numberPanelJ1.classList.remove("css-panelNumberD");
    enterQuantityJ1.classList.remove('css-EnterPanelNumber');
    inputJ1.classList.add("css-input");
    inputJ1.classList.toggle("css-input-2",false);
    toggleHighlight = Hili.on;
    toggleState = shelf.J1;
  };
  
  function unclickShelfJ1(){
    numberPanelJ1.classList.add("css-panelNumberD");
    numberPanelJ1.classList.remove("css-panelNumber-activeD");
    enterQuantityJ1.classList.remove('css-EnterPanelNumber-active');
    enterQuantityJ1.classList.add('css-EnterPanelNumber');
    inputJ1.classList.add("css-input");
    togglePanelOnOff = false;
    mainShelfJ1.classList.remove("shelf-active");
    toggleHighlight = Hili.off;
  };
  
  // Similar functions for shelves J2, K1, K2, L1, and L2
  
  function clickShelfJ2(){
    ToggleShelfActive('J2');
    numberPanelJ2.classList.add("css-panelNumber-activeD");
    enterQuantityJ2.classList.add('css-EnterPanelNumber-active');
    numberPanelJ2.classList.remove("css-panelNumberD");
    enterQuantityJ2.classList.remove('css-EnterPanelNumber');
    inputJ2.classList.add("css-input");
    inputJ2.classList.toggle("css-input-2",false);
    toggleHighlight = Hili.on;
    toggleState = shelf.J2;
  };
  
  function unclickShelfJ2(){
    numberPanelJ2.classList.add("css-panelNumberD");
    numberPanelJ2.classList.remove("css-panelNumber-activeD");
    enterQuantityJ2.classList.remove('css-EnterPanelNumber-active');
    enterQuantityJ2.classList.add('css-EnterPanelNumber');
    inputJ2.classList.add("css-input");
    togglePanelOnOff = false;
    mainShelfJ2.classList.remove("shelf-active");
    toggleHighlight = Hili.off;
  };

  function clickShelfK1(){
    ToggleShelfActive('K1');
    numberPanelK1.classList.add("css-panelNumber-activeD");
    enterQuantityK1.classList.add('css-EnterPanelNumber-active');
    numberPanelK1.classList.remove("css-panelNumberD");
    enterQuantityK1.classList.remove('css-EnterPanelNumber');
    inputK1.classList.add("css-input");
    inputK1.classList.toggle("css-input-2",false);
    toggleHighlight = Hili.on;
    toggleState = shelf.K1;
  };
  
  function unclickShelfK1(){
    numberPanelK1.classList.add("css-panelNumberD");
    numberPanelK1.classList.remove("css-panelNumber-activeD");
    enterQuantityK1.classList.remove('css-EnterPanelNumber-active');
    enterQuantityK1.classList.add('css-EnterPanelNumber');
    inputK1.classList.add("css-input");
    togglePanelOnOff = false;
    mainShelfK1.classList.remove("shelf-active");
    toggleHighlight = Hili.off;
  };
  
  // Similar functions for shelves K2, L1, and L2
  
  function clickShelfK2(){
    ToggleShelfActive('K2');
    numberPanelK2.classList.add("css-panelNumber-activeD");
    enterQuantityK2.classList.add('css-EnterPanelNumber-active');
    numberPanelK2.classList.remove("css-panelNumberD");
    enterQuantityK2.classList.remove('css-EnterPanelNumber');
    inputK2.classList.add("css-input");
    inputK2.classList.toggle("css-input-2",false);
    toggleHighlight = Hili.on;
    toggleState = shelf.K2;
  };
  
  function unclickShelfK2(){
    numberPanelK2.classList.add("css-panelNumberD");
    numberPanelK2.classList.remove("css-panelNumber-activeD");
    enterQuantityK2.classList.remove('css-EnterPanelNumber-active');
    enterQuantityK2.classList.add('css-EnterPanelNumber');
    inputK2.classList.add("css-input");
    togglePanelOnOff = false;
    mainShelfK2.classList.remove("shelf-active");
    toggleHighlight = Hili.off;
  };

  function clickShelfL1(){
    ToggleShelfActive('L1');
    numberPanelL1.classList.add("css-panelNumber-activeD");
    enterQuantityL1.classList.add('css-EnterPanelNumber-active');
    numberPanelL1.classList.remove("css-panelNumberD");
    enterQuantityL1.classList.remove('css-EnterPanelNumber');
    inputL1.classList.add("css-input");
    inputL1.classList.toggle("css-input-2",false);
    toggleHighlight = Hili.on;
    toggleState = shelf.L1;
  };
  
  function unclickShelfL1(){
    numberPanelL1.classList.add("css-panelNumberD");
    numberPanelL1.classList.remove("css-panelNumber-activeD");
    enterQuantityL1.classList.remove('css-EnterPanelNumber-active');
    enterQuantityL1.classList.add('css-EnterPanelNumber');
    inputL1.classList.add("css-input");
    togglePanelOnOff = false;
    mainShelfL1.classList.remove("shelf-active");
    toggleHighlight = Hili.off;
  };
  
  function clickShelfL2(){
    ToggleShelfActive('L2');
    numberPanelL2.classList.add("css-panelNumber-activeD");
    enterQuantityL2.classList.add('css-EnterPanelNumber-active');
    numberPanelL2.classList.remove("css-panelNumberD");
    enterQuantityL2.classList.remove('css-EnterPanelNumber');
    inputL2.classList.add("css-input");
    inputL2.classList.toggle("css-input-2",false);
    toggleHighlight = Hili.on;
    toggleState = shelf.L2;
  };
  
  function unclickShelfL2(){
    numberPanelL2.classList.add("css-panelNumberD");
    numberPanelL2.classList.remove("css-panelNumber-activeD");
    enterQuantityL2.classList.remove('css-EnterPanelNumber-active');
    enterQuantityL2.classList.add('css-EnterPanelNumber');
    inputL2.classList.add("css-input");
    togglePanelOnOff = false;
    mainShelfL2.classList.remove("shelf-active");
    toggleHighlight = Hili.off;
  };