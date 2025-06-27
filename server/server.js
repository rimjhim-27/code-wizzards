require('dotenv').config();
const app = require('./app');
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`\n\x1b[32m✓\x1b[0m Server running on \x1b[34mhttp://localhost:${PORT}\x1b[0m`);
  console.log(`\x1b[33mPress CTRL+C to stop\x1b[0m\n`);
  
  // Display available routes
  console.log('\x1b[1mAvailable Routes:\x1b[0m');
  console.log('- \x1b[34mGET /\x1b[0m : Base endpoint');
  console.log('- \x1b[34mGET /api/health\x1b[0m : Health check');
});