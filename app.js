const daxilEedilenEded = document.getElementById("daxil_edilen_eded");

let birinciEded = 0;
let operator = "";
let ikinciEded = 0;
let hesablanmis = false;

function btnForNumber(ed) {
  if (hesablanmis) {
    daxilEedilenEded.value = ed;
    hesablanmis = false;
  } else {
    daxilEedilenEded.value += ed;
  }
}

function btnForOperator(_operator) {
  birinciEded = +daxilEedilenEded.value;
  daxilEedilenEded.value = "";
  operator = _operator;
}

function btnForClear() {
  daxilEedilenEded.value = "";
  birinciEded = 0;
  operator = "";
  ikinciEded = 0;
}

function btnForDot() {
  if (!daxilEedilenEded.value.includes(".")) {
    daxilEedilenEded.value += ".";
  }
}

function btnForCalculate() {
  ikinciEded = +daxilEedilenEded.value;
  hesablanmis = true;
  switch (operator) {
    case "+":
      daxilEedilenEded.value = birinciEded + ikinciEded;
      break;
    case "-":
      daxilEedilenEded.value = birinciEded - ikinciEded;
      break;
    case "*":
      daxilEedilenEded.value = birinciEded * ikinciEded;
      break;
    case "/":
      daxilEedilenEded.value = birinciEded / ikinciEded;
      break;
    case "pow2":
      daxilEedilenEded.value = Math.pow(birinciEded, 2);
      break;
    case "sqrt":
      daxilEedilenEded.value = Math.sqrt(birinciEded);
      break;
  }
}

function btnForBackspace() {
  let value = daxilEedilenEded.value;
  daxilEedilenEded.value = value.slice(0, value.length - 1);
}

function btnForSpecialOperator(_operator) {
  birinciEded = +daxilEedilenEded.value;
  hesablanmis = true;
  switch (_operator) {
    case "pow2":
      daxilEedilenEded.value = Math.pow(birinciEded, 2);
      break;
    case "sqrt":
      daxilEedilenEded.value = Math.sqrt(birinciEded);
      break;
  }
}
