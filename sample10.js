var figlet = require("figlet");

figlet("0 1 0 - 9 9 9 0 - 4 1 1 7", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

