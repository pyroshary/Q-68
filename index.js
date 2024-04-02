//making functions to mutiply two decimals
function multiplydesimals(num1, num2) {
    return Math.round((num1 * num2) * 100) / 100;
}
console.log(multiplydesimals(0.5, 0.10));
