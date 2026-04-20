const express = require('express');
const app = express();
const postsRouter = require('./src/routes/posts.routes');

app.use(express.json());

// Use the router for the /api/v1/posts prefix
app.use('/api/v1/posts', postsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});