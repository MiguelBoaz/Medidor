const probabilityList = [];

function baldNumber() {
  let repeat = parseInt(age.value);
  
  
  for (let i = 0; i <= repeat; ++i) {
    let randomNumber = (Math.random() * 10).toFixed(2);
    
    probabilityList.push(parseFloat(randomNumber));
  }
}

function calculos() {
  baldNumber();
  
  let sum = 0;
  
  for (let value of probabilityList) {
    sum += value;
  }

  return sum;
}

let baldometer = calculos();
console.log(baldometer);