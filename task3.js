// get the name
let userName = prompt("Enter your name please!");
while (!userName || !isNaN(+userName)) {
    userName = prompt("Enter your name please!");
}

console.log(userName);

// get the year of birth
let yearOfBirth = prompt("Enter your year of birth please!");
while (!yearOfBirth || isNaN(+yearOfBirth) || yearOfBirth >= 2010) {
    yearOfBirth = prompt("Enter your year of birth please!");
}

console.log(yearOfBirth);

document.write(` <h1 "><span style=" text-decoration: underline;">Name:</span> <span style="font-weight:normal; text-decoration: none;">${userName} <span></h1>`);
document.write(` <h1 "><span style=" text-decoration: underline;">Year of birth:</span> <span style="font-weight:normal; text-decoration: none;">${yearOfBirth} <span></h1>`);
document.write(` <h1 "><span style=" text-decoration: underline;">Age:</span> <span style="font-weight:normal; text-decoration: none;">${new Date().getFullYear() - yearOfBirth} <span></h1>`);