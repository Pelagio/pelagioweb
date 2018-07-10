import express from "express";
import path from "path";

const app = express();
const __dirname = path.resolve();

import web from "./routes/web.mjs";

app.set("port", process.env.PORT || 3000);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use("/", web);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      message: err.message,
      error: {}
    }
  });
});

const server = app.listen(app.get("port"), () => {
  console.info("Express server listening on port " + server.address().port);
});

export default server;
