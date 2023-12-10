// counter without setInterval

function CounterWithoutSetInterval(timeInSeconds, callback) {
  for (let i = 1; i <= timeInSeconds; i++) {
    setTimeout(() => {
      callback(i);
    }, i * 1000);
  }
}

function PrintCounterValue(counter) {
  console.log(counter);
}

CounterWithoutSetInterval(5, PrintCounterValue);

// 2nd solution
// better way? ig yes
function delay(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

async function counterWithoutSetInterval(timeInSeconds, callback) {
  for (let i = 1; i <= timeInSeconds; i++) {
    await delay(1);
    callback(i);
  }
}

function printCounterValue(counter) {
  console.log(counter);
}

counterWithoutSetInterval(5, printCounterValue);
