const express = require("express");
const cookieSession = require("cookie-session");
const passport = require("passport");
const morgan = require("morgan");

const keys = require("./config/keys");
const googleAuth = require("./routes/googleAuth");
const folder = require("./routes/folder");
const globalErrorHandler = require("./controller/globalError");
const OperationalError = require("./utils/OperationalError");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// global middleware
app.use(express.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

// api routes
app.use("/auth/google", googleAuth);
app.use("/api/v1/folder", folder);

// serve static build files in production

app.all("*", (req, res, next) => {
  next(new OperationalError(404, `Can't find ${req.originalUrl} on this API`));
});

// global error handler
app.use(globalErrorHandler);

module.exports = app;
