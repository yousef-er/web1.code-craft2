let x = Number(prompt("Enter the first number:"));
let y = Number(prompt("Enter the second number:"));
let sign = prompt("Enter a sign (+, -, *, /):");

if (sign === "+") {
    document.writeln(x + y);
} 
else if (sign === "-") {
    document.writeln(x - y);
} 
else if (sign === "*") {
    document.writeln(x * y);
} 
else if (sign === "/") {
    document.writeln(x / y);
} 
else {
    document.writeln("Unavailable");
}
