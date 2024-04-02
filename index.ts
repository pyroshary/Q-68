//making functions to mutiply two decimals

function multiplydesimals(num1: number, num2:number):number{
    return Math.round((num1 * num2) *100)/100;
}

console.log(multiplydesimals(0.5,0.10));