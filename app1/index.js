import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Message from App 1",
    real_ip: req.headers["x-real-ip"],
    x_forwarded_for: req.headers["x-forwarded-for"],
    host: req.headers["host"],
  });
});

app.listen(80, () => {
  console.log("Listening from port 3000");
});
