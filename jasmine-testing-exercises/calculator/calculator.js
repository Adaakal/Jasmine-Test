window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  
  calculateMonthlyPayment(getCurrentUIValues());
  update();
  // return {
  //   loanAmt, termYears, yearlyRate, submitLoanBtn, monthlyPayment,
  // }

}

// Get the current values from the UI
// Update the monthly payment
function update() {
  //getCurrentUIValues();
  return updateMonthly(calculateMonthlyPayment(getCurrentUIValues));
  //updateMonthly(monthly);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {

  values = {
    amount: getCurrentUIValues().amount,
    years: getCurrentUIValues().years,
    rate: getCurrentUIValues().rate
  };
  console.log(values);
  let n = Math.floor((values.years) * 12);
  let i = ((values.rate)/100)/12;
  let P = values.amount;
  
  let monthly = ((P * i) / 1 - Math.pow((1 + i), -n)).toFixed(2);
  // monthly = Math.round((monthly + Number.EPSILON) * 100) / 100
  //monthly = monthly.toFixed(2);
  monthly = monthly.toString();
  
  
  
  return monthly;
}


// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthlyPayment = document.querySelector('#monthly-payment');
  monthlyPayment.innerHTML = monthly
}
