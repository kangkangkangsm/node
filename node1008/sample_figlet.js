var figlet = require("figlet");

figlet("SM.", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

figlet("Hello World!!",
  {
  font: "Ghost",
  horizontalLayout: "default",
  verticalLayout: "default",
  width: 200,
  whitespaceBreak: true,
},function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});