const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const usersRouter = require("./routes/userRoutes");
require("dotenv").config();
const app = express();
const port = 8080;

// mongoDB연동
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
  });

// body-parser 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 라우터 설정
app.use(usersRouter);
// 정적파일설정
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
// 서버 가동
app.listen(port, () => {
  console.log(`Server is working in http://localhost:${port}`);
});
