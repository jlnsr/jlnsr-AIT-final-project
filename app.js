import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
// environment variable?
const PORT = process.env.PORT || 3000;

// get path to 'public' directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// body-parser middleware
app.use(express.urlencoded({ extended: true }));

// basic routes
app.use('/home', (req,res) => {});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});