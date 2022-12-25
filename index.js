const fs = require('fs')

let data = [
    {name: "Employee Name 1", salary: 2000}
];

fs.writeFile('employee.json', JSON.stringify(data), "utf-8", (err) => {
    if (err) console.log(err);
    console.log('Employees file created.')
})

// -----------------------------------------------

let fileData = fs.readFileSync('employee.json', 'utf-8', (err, data) => {
    if (err) console.log(err)
    console.log(data)
});

let data1 = JSON.parse(fileData)

data1.push({ name: "Employee 2 Name", salary: 2500 });

fs.writeFile('employee.json', JSON.stringify(data1), 'utf-8', (err) => {
    if (err) console.log(err);
    console.log("A new employee has been added.")
});

// ------------------------------------------------------

fs.unlink('employee.json', (err) => {
    if (err) console.log(err)
    console.log("Employees file was deleted.")
})

