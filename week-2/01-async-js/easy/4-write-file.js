const fs = require("fs");

function WriteToFile(text) {
  fs.writeFile("./dummy.txt", text, "utf8", (err) => {
    if (err) {
      console.log("error writing data");
      return;
    } else {
      //readfile again
      fs.readFile("./dummy.txt", "utf8", (err, data) => {
        if (err) {
          console.log("error reading");
          return;
        } else {
          console.log("new file content :", data);
        }
      });
    }
  });
}

// write file sync will be same as readfile sync block the event loop until it is writing to file
WriteToFile("heheh naaa boi");
