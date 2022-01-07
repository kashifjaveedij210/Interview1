var billsBeforeTip = [124, 48, 268];
var tipAmount = [];
var finalAmount = [];

const calculator = (billAmount) => {
  var percent;
  if (billAmount <= 50) {
    percent = 0.2;
  } else if (50 < billAmount <= 200) {
    percent = 0.15;
  } else {
    percent = 0.1;
  }
  return percent * billAmount;
};

for (i = 0; i < billsBeforeTip.length; i++) {
  tipAmount[i] = calculator(billsBeforeTip[i]);
  finalAmount[i] = billsBeforeTip[i] + tipAmount[i];
  console.log([i] + ". total tip: " + tipAmount[i]);
}

console.log("Bills before tips: " + billsBeforeTip);
console.log("Final Amounts: " + finalAmount);
