const express = require("express");
const { router } = require("./routes/router");

const app = express();
app.use(express.json());

// Mount router
app.use("/api", router);

// if (require.main === module) {
//   app.listen(3000, () => {
//     console.log("Server running on port 3000");
//   });
// }

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

module.exports = app;
