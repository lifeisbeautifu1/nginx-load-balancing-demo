const express = require("express");
const app = express();
const port = 3000;

const appName = process.env.APP_NAME ?? "Server";

app.use("/", express.static("public"));

app.listen(port, () => {
  console.log(`${appName} is listening on port ${port}`);
});
