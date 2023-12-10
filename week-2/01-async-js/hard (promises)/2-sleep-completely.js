/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(milliseconds) {
  const start = new Date().getTime();
  let elapsedTime = 0;

  while (elapsedTime < milliseconds) {
    elapsedTime = new Date().getTime() - start;
  }
}

console.log("sone jara bye");
sleep(3000);
console.log("fck it");
