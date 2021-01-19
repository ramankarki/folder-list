if (process.env.NODE_ENV === "production") {
  module.exports = {
    dbstring: process.env.DBSTRING,
  };
} else {
  module.exports = require("./dev");
}
