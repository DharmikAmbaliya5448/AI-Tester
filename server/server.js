// server/server.js
const express = require("express");
const { router } = require("./routes/router");

const app = express();
app.use(express.json());
app.use("/api", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

module.exports = app;
