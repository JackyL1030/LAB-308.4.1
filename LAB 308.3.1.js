// Part II 
const csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

const rows = csvData.split("\n");
const data = [];

for (const row of rows) {
    const cells = row.split(",");
    data.push(cells);
}

console.log(data);

//Part III
const headers = data[0];
const result = [];

for (let i=1; i < data.length; i++){
    const obj = {};

    for (let j=0; j < headers.length; j++){
        obj[headers[j].toLowerCase()] = data[i][j];
    }
    result.push(obj);
}
console.log(result)

// Part IV
result.pop()
result.splice(1,0, { id: "48", name: "Barry", occupation: "Runner", age: "25" })
result.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })

console.log(result)

let totalAge = 0;

for (const person of result){
    totalAge += Number(person.age);
} 
let avgAge = totalAge / result.length;
console.log("The average age is "+ avgAge)

// Part V