if (process.env.NODE_ENV === "production") {
  module.exports = {
    dbstring: process.env.DBSTRING,
    cookieKey: process.env.COOKIE_KEY,
  };
} else {
  module.exports = require("./dev");
}
