function counter(timeInSecond, callback) {
  let CurrentTime = 1;
  const timeout = setInterval(() => {
    if (CurrentTime >= timeInSecond) clearInterval(timeout);

    callback(CurrentTime);
    CurrentTime++;
  }, 1000);
}

function printCounter(timeInSecond) {
  console.log(timeInSecond);
}

counter(10, printCounter);
