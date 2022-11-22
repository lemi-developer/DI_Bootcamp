/*
    Create a global variable called bankAmount which value is the amount of money currently in your account.
    Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
    Create an array with all your monthly expenses, both positive and negative (money made and money spent).
    Example : const details = ["+200", "-100", "+146", "+167", "-2900"]
    Create a program that modifies the expenses (ie. the positive AND the negative expenses) so that they will include taxes (multiply each expense by the VAT).
    Display your current bankAccount standing at the end of the month.
    */

let bankAmount;

const vatAmount = 0.17;

const monthlyExpenses = ["+200", "-100", "+146", "+167", "-2900"];

let includeTaxes = [];

monthlyExpenses.forEach((x) =>
  includeTaxes.push(Math.abs(parseInt(x) * vatAmount))
);

//console.log(includeTaxes);

let expensesWithTax = [];

monthlyExpenses.forEach((item, index) =>
  expensesWithTax.push(parseInt(item) - includeTaxes[index])
);

//console.log(expensesWithTax);

bankAmount = expensesWithTax.reduce((total, current) => total + current);

console.log(bankAmount); //-3084.21
