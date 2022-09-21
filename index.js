
function calculateTip() {
var bill = document.getElementById("billamt").value;
var tip;
tip = bill<=300&&bill>=50?bill*(15/100):bill*(20/100);
console.log(tip);


// document.getElementById("div.cal").style.display = bill;

document.getElementById("totalTip").style.display = "block";
document.getElementById("tip").innerHTML = tip;

}
// document.getElementById("totalTip").style.display = "none";

document.getElementById("calculate").onclick = function() {
    calculateTip();
  
  };