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
