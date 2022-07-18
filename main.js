const valueInput = document.getElementById('valueInput');
const unitInput = document.getElementsByName('units');
const conversionOutputs = document.getElementById('conversionOutputs');

let value = '';
let unit = '';

conversionOutputs.style.visibility = 'hidden';

valueInput.addEventListener('input', (e) => {
  value = e.target.value;

  calculate();
});

unitInput.forEach((unitType) => {
  unitType.addEventListener('change', (e) => {
    unit = e.target.value;

    calculate();
  });
});

function calculate() {
  if (value !== '' && value > 0 && unit !== '') {
    conversionOutputs.style.visibility = 'visible';

    document.getElementById('outputkg').innerHTML = convertToKg(value, unit);
    document.getElementById('outputg').innerHTML = convertToG(value, unit);
    document.getElementById('outputlb').innerHTML = convertToLb(value, unit);
    document.getElementById('outputoz').innerHTML = convertToOz(value, unit);
  } else {
    conversionOutputs.style.visibility = 'hidden';
  }
}

function convertToKg(value, unit) {
  if (unit === 'g') {
    return Math.round((value / 1000) * 100) / 100;
  } else if (unit === 'lb') {
    return Math.round((value / 2.205) * 100) / 100;
  } else if (unit === 'oz') {
    return Math.round((value / 35.274) * 100) / 100;
  } else {
    return value;
  }
}

function convertToG(value, unit) {
  if (unit === 'kg') {
    return Math.round((value / 0.001) * 100) / 100;
  } else if (unit === 'lb') {
    return Math.round((value / 0.002204623) * 100) / 100;
  } else if (unit === 'oz') {
    return Math.round((value / 0.035274) * 100) / 100;
  } else {
    return value;
  }
}

function convertToLb(value, unit) {
  if (unit === 'kg') {
    return Math.round((value / 0.453515) * 100) / 100;
  } else if (unit === 'g') {
    return Math.round((value / 453.59237) * 100) / 100;
  } else if (unit === 'oz') {
    return Math.round((value / 16) * 100) / 100;
  } else {
    return value;
  }
}

function convertToOz(value, unit) {
  if (unit === 'kg') {
    return Math.round((value / 0.028349) * 100) / 100;
  } else if (unit === 'g') {
    return Math.round((value / 28.35) * 100) / 100;
  } else if (unit === 'lb') {
    return Math.round((value / 0.0625) * 100) / 100;
  } else {
    return value;
  }
}
