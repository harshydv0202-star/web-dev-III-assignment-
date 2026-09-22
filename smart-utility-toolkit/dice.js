const crypto = require('crypto');
const fs = require('fs');

function rollDice() {
    return crypto.randomInt(1, 7);
}

for (let i = 0; i < 3; i++) {
    const roll = rollDice();
    console.log(`Dice Rolled: ${roll}`);
    fs.appendFileSync('text.txt', `Dice Rolled: ${roll}\n`);
}
