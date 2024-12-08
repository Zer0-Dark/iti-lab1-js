let temp = prompt("Enter temperature");


let checkTemp = (temp) => +temp >= 30 ? document.write("<h1>hot</h1>") : document.write("<h1>cold</h1>")

checkTemp(temp);
