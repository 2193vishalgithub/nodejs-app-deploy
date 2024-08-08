import express from "express";

const app = express();
const port = 9000;

app.use("/", (req, res) => {
  res.json({ message: "App is working" });
});

app.listen(port, () => {
  console.log(
    `Listening on port ${port}. Visit http://localhost:${port}/ in your browser.`
  );
});
