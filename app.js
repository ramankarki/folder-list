const express = require("express");
const cookieSession = require("cookie-session");
const passport = require("passport");
const morgan = require("morgan");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");

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

// data sanitization against NoSQL query
app.use(mongoSanitize());

// data sanitization
app.use(xss());

// prevent parameter pollution
app.use(
  hpp({
    whitelist: ["duration"],
  })
);

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
