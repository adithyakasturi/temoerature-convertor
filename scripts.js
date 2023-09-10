var c = document.getElementById("i1");
var f = document.getElementById("i2");
function fartocel(){
    var fh = parseFloat(c.value);
    var r;
    r=(fh-32)*(5/9);
    f.value = parseFloat(r.toFixed(2));
}
function celtofar(){
    var ch = parseFloat(f.value);
    var r;
    r=(ch*(9/5))+32;
    c.value = parseFloat(r.toFixed(2));
}
const clearButton = document.querySelector(".C1");
clearButton.addEventListener("click", function() {
  f.value = "";
  c.value = "";
});