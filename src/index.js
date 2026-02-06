const express = require("express");
const postsRouter = require("./routes/posts.routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/v1/posts", postsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
