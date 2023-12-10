const fs = require("fs");

function CleanFile() {
  fs.readFile("../easy/dummy.txt", "utf8", (err, data) => {
    if (err) {
      console.log("error reading file");
      return;
    }

    const cleanedData = data.replace(/\s+/g, " ");
    console.log(cleanedData);

    fs.writeFile("../easy/dummy.txt", cleanedData, "utf8", (err) => {
      if (err) {
        console.log("error writing data");
        return;
      }
    });
  });
}

CleanFile();
