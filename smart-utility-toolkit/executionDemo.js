const fs = require('fs');

// 1. CLI Inputs
console.log("CLI Arguments:", process.argv.slice(2));

// 2. Synchronous (Blocking) Flow
console.log("\n--- Synchronous Flow ---");
console.log("Start");
fs.writeFileSync("temp.txt", "sync data");
console.log("Written");
console.log("End");

// 3. Asynchronous (Non-blocking) Flow
console.log("\n--- Asynchronous Flow ---");
console.log("Start");
fs.writeFile("temp.txt", "async data", () => {
    console.log("Callback: File written asynchronously");
    fs.unlinkSync("temp.txt"); // Clean up temp file
});
console.log("End");
