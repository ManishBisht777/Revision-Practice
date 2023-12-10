const fs = require("fs");

// Function to simulate an expensive operation (CPU-bound task)
function expensiveOperation() {
  let result = 0;
  for (let i = 0; i < 1e9; i++) {
    result += Math.sqrt(i);
  }
  return result;
}

// Read file asynchronously
fs.readFile("./dummy.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  const result = expensiveOperation();
  console.log("Result of expensive operation:", result);
});

// use readfileSync // blocks the eventLoop until reading is complete followed by expensive calculation
function SyncRead() {
  fs.readFileSync("./dummy.txt", "utf8");
  const result = expensiveOperation();
  console.log("Result of expensive operation:", result);
}

SyncRead();

console.log("Reading file...");

// first it readfile via readfilesync then expensive calculation -> readinf file.... -> async read --> expensive op
