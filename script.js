// Exercise: The Weekly Expense Tracker
// You are given a nested array called weeklyExpenses. Each nested-array represents a single day of the week (Monday through Sunday) and contains the individual costs of purchases made on that day.

// Tasks:
// 1. Calculate the total spent for each individual day.
// 2. Calculate the grand total spent for the entire week.
// 3. Print the results to the console without using any objects or advanced array methods.
// 4. Use a nested for loop.

const weeklyExpenses = [
    [12.50, 5.00, 20.25],     //Monday
    [8.00],                   //Tuesday
    [15.75, 3.10],            //Wednesday
    [50.00, 12.00],           //Thursday
    [10.50, 4.25, 3.50],      //Friday
    [100.00, 25.00],          //Saturday
    [15.00]                   //Sunday
];

let total = 0;

for(let i = 0; i < weeklyExpenses.length; i++){
    let dayTotal = 0; 

    for(let j=0; j < weeklyExpenses[i].length; j++){
        dayTotal += weeklyExpenses[i][j];
    } 
    console.log("Day " + (i + 1) + ": " + dayTotal);
    total += dayTotal;
}

console.log("Week total: " + total);

/* total = 0
    i = 0; 0 < 6 -> true 
    dayTotal = 0

    j = 0; 0 < 3 -> true
    dayTotal += weeklyExpenses[0][0] -> dayTotal += 12.50

    j++ -> j = 1; 1 < 3 -> true
    daytotal += weeklyExpenses[0][1] -> dayTotal += 12.50 + 5.00

    j++ -> j = 2; 2 < 3 -> true
    dayTotal += weeklyExpenses[0][2] -> dayTotal += 12.50 + 5.00 + 20.25 

    j++ -> j = 3; 3 < 3 -> false
    print(Day 1: 37.75)
    total += 37.75
 */