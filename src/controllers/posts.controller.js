// Mock data representing your database
const posts = [
  { id: '1', title: 'Refactoring APIs', content: 'Standardizing responses is a professional must.' },
  { id: '2', title: 'Express Routing', content: 'Connecting controllers to routes keeps code clean.' }
];

// Requirement: Standard JSON envelope { success: true, data: [...] }
const getAllPosts = (req, res) => {
  res.status(200).json({
    success: true,
    data: posts
  });
};

// Requirement: Standard JSON envelope { success: true, data: {...} }
const getPostById = (req, res) => {
  const { id } = req.params;
  const post = posts.find((p) => p.id === id);

  res.status(200).json({
    success: true,
    data: post || null
  });
};

module.exports = {
  getAllPosts,
  getPostById
};