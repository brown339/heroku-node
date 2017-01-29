const
  express = require("express"),
  app = express(),
  port = process.env.PORT || 8000;

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});