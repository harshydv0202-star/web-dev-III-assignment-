const operation = process.argv[2];
const num1 = parseFloat(process.argv[3]);
const num2 = parseFloat(process.argv[4]);

if (!operation || isNaN(num1) || isNaN(num2)) {
    console.log("Usage: node calculator.js <operation> <num1> <num2>");
    console.log("Example: node calculator.js add 10 5");
    process.exit(1);
}

let result;

switch (operation.toLowerCase()) {
    case 'add':
        result = num1 + num2;
        break;
    case 'subtract':
        result = num1 - num2;
        break;
    case 'multiply':
        result = num1 * num2;
        break;
    case 'divide':
        if (num2 === 0) {
            console.log("Error: Division by zero is not allowed.");
            process.exit(1);
        }
        result = num1 / num2;
        break;
    case 'modulo':
    case 'mod':
    case '%':
        if (num2 === 0) {
            console.log("Error: Modulo by zero is not allowed.");
            process.exit(1);
        }
        result = num1 % num2;
        break;
    case 'intdiv':
    case '//':
        if (num2 === 0) {
            console.log("Error: Division by zero is not allowed.");
            process.exit(1);
        }
        result = Math.floor(num1 / num2);
        break;
    default:
        console.log(`Error: Invalid operation "${operation}". Use: add, subtract, multiply, divide, modulo (%), intdiv (//)`);
        process.exit(1);
}

console.log(result);
