import "./styles.css";

function main(mode, val) {
  // Pre evaluator to val
  if (val.toString().length === 0) {
    alert("no hay valores para covertir");
    return "";

    //in values is binari
  } else if (mode === "binToNum") {
    var nun = 0;
    var bin = val.toString();
    for (let i = 0; i < bin.length; i++) {
      nun += bin[i] * 2 ** (bin.length - i - 1);
    }
    return nun;

    //if values is number
  } else if (mode === "numToBin") {
    var bin = [];
    while (val > 0) {
      bin.unshift(val % 2);
      val = Math.floor(val / 2);
    }
    return bin.join("");
  }
}

// create div
var div = document.createElement("div");
div.className = "container";
div.setAttribute("id", "div");
document.body.appendChild(div);
// create h1

var h1 = document.createElement("h1");
h1.innerHTML = "Conversor";

// create input
var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "input");

// create select
var select = document.createElement("select");
select.setAttribute("id", "select");
select.innerHTML =
  '<option value="binToNum">Binario a Decimal</option><option value="numToBin">Decimal a Binario</option>';
// create button
var button = document.createElement("button");
button.setAttribute("id", "button");
button.innerHTML = "Convertir";
// create p
var p = document.createElement("p");
p.setAttribute("id", "p");
// append to div
div.appendChild(h1);
div.appendChild(input);
div.appendChild(select);
div.appendChild(button);
div.appendChild(p);
// append to body
document.body.appendChild(div);
// add event listener
button.addEventListener("click", () => {
  var mode = document.getElementById("select").value;
  var val = document.getElementById("input").value;
  var result = main(mode, val);
  document.getElementById("p").innerHTML = result;
});
