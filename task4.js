document.write("<h1>Heading </h1>");
document.write("<hr>");


function welcome(num) {
    return document.write(`<h${num}> This is header number ${num} <h${num}>`);
}


for (let i = 1; i <= 6; i++) {
    welcome(i);
}
