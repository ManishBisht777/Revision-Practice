function PrintDateAndTime() {
  const currentDate = new Date();
  const formattedTime = currentDate.toLocaleTimeString("en-US", {
    hour12: true,
  });

  console.log("Current time:", formattedTime);
}

function PrintCurrentTime() {
  setInterval(PrintDateAndTime, 1000);
}

PrintCurrentTime();
