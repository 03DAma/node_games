const express = require("express");
const app = express();
const port = 8081;

//contenido estatico
app.use(express.static("public"));

app.get("/home", function (req, res) {
  res.sendFile("/public/index.html");
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`example app listening at http://localhost:${port}`);
});
