const express = require("express");
const { router } = require("./routes/router");

const app = express();
app.use(express.json());

// Mount router
app.use("/api", router);

/**
 * Exported start function (for tests + manual start)
 */
function startServer(port = process.env.PORT || 3000) {
  return app.listen(port, () => {
    console.log(`✅ Server running on port ${port}`);
  });
}

// Only auto-start if run directly: `node server.js`
if (require.main === module) {
  startServer();
}

// Export both app & startServer for tests
module.exports = { app, startServer };
