let data = [];

  let quantitySupplement_A = 0;
  let quantitySupplement_B = 0;
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


  const inputOne = document.querySelectorAll('.js-one-D, .js-one-B');

  const inputB = document.querySelector('.js-input-B');
  const inputD = document.querySelector('.js-input-D');

  inputD.style.display = "none"; 
  inputB.style.display = "none"; 

  inputOne.forEach(element => {
    element.addEventListener('click',appearInputOne);
  });
  /*
  inputOne.addEventListener('click', appearInputOne); 
  */
 
 function appearInputOne(){
  if (toggleEditable === 2){
    inputB.style.display = "block"; 
    inputD.style.display = "none"; 
    toggleEditable = false;
    inputOne.innerHTML = '';
  }
  else if (toggleEditable === 4){
   inputD.style.display = "block"; 
   inputB.style.display = "none"; 
   toggleEditable = false;
   innerHTML = '';
  }
}; 

  const bodyEvent = document.body.addEventListener('keydown',(event) => {
    if(event.key === 'Enter'){
      if (toggleEditable === 2){
      data.push({
            name: inputB.value,
            quantity: quantitySupplement_B
      });
    } 
    else if (toggleEditable === 4){
      data.push({
        name: inputD.value,
        quantity: quantitySupplement_D
       });
    }
      inputOne.innerHTML += inputD.value,inputB.value;

      inputB.value = '';
      inputD.value = '';

      quantitySupplement = 0;

      if (toggleEditable === 2){
        inputB.style.display = "none"; 
      }
      else if (toggleEditable === 4){
        inputD.style.display = "none";
      }
      runData();
      console.log(data);
    } 
   }
  );
   
  let toggleSect_B;

  let shelfQuantity_B = document.querySelector('.js-quantity-B');

  let shelfQuantity_D = document.querySelector('.js-quantity-D');

  const shelf_B = document.querySelector('.shelf-B')
  shelf_B.addEventListener('click', () => {
    const hightLight_B = () => {
      toggleSect_B = true;
      shelf_B.classList.add("shelf-B-active");
      shelf_D.classList.remove("shelf-B-active");
      toggleEditable = 2;
    };
    hightLight_B();
  });

  const shelf_D = document.querySelector('.shelf-D');
  shelf_D.addEventListener('click', () => {
    const hightLight_D = () => {
      toggleSect_B = false;
      shelf_D.classList.add("shelf-B-active");
      shelf_B.classList.remove("shelf-B-active");
      toggleEditable = 4;

    };
    hightLight_D();
  })

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
    if (toggleSect_B === true){
    quantitySupplement_B++;
    shelfQuantity_B.innerHTML = `${quantitySupplement_B}`;
    console.log(quantitySupplement_B);
    } 
    else if (toggleSect_B === false){
    quantitySupplement_D++;
    shelfQuantity_D.innerHTML = `${quantitySupplement_D}`;
    console.log(quantitySupplement_D);
    }
    else {
      alert('none select');
    }
  };

  const buttonSubtract = document.querySelectorAll('.js-button-minus-B, .js-button-minus-D');

  buttonSubtract.forEach(minus => {
    minus.addEventListener('click',buttonMinus); 
    })

    function buttonMinus(){
      if (toggleSect_B === true && quantitySupplement_B > 0){
        quantitySupplement_B--;
        shelfQuantity_B.innerHTML = `${quantitySupplement_B}`;
        console.log(quantitySupplement_B);
      } 
      else if (toggleSect_B === false && quantitySupplement_D > 0){
        quantitySupplement_D--;
        shelfQuantity_D.innerHTML = `${quantitySupplement_D}`;
        console.log(quantitySupplement_D);
      }
      else {
        alert('Reach Limit');
    }
  };
