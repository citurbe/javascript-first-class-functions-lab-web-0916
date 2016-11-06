function countdown(func) {
  window.setTimeout(func, 2000);
}

function createMultiplier(multiplierValue){
  return function multiplier(num) {
    return num * multiplierValue;
  }
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

function multiplier(num1, num2) {
  return num1 * num2;
}

var doublerWithBind = multiplier.bind(2);
var triplerWithBind = multiplier.bind(3);
