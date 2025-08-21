// server/server.js
const express = require("express");
const { router } = require("./routes/router");

const app = express();
app.use(express.json());
app.use("/api", router);

app.listen(process.env.PORT || 3000, () => {
  console.log(`✅ Server running on port ${process.env.PORT || 3000}`);
});

module.exports = app;
