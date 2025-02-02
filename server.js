const app = require("./app");  // Import your Express app
const serverless = require("serverless-http");

module.exports = serverless(app);
