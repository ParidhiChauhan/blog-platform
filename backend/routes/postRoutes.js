import express from 'express';
import { authenticate } from '../middleware/authMiddleware.js'; 
export default function postRoutes(db) {
  const router = express.Router();

  
  router.post('/', authenticate, async (req, res) => {
    const { title, content } = req.body;
    const { userId } = req.user;  
    try {
      const result = await db.run('INSERT INTO posts (title, content, authorId) VALUES (?, ?, ?)', [title, content, userId]);
      res.status(201).json({ id: result.lastID, title, content, authorId: userId });
    } catch (error) {
      console.error("Error creating post:", error);
      res.status(500).json({ message: 'Error creating post' });
    }
  });

  
  router.get('/', authenticate, async (req, res) => {  
    const { userId } = req.user;  
    try {
      const posts = await db.all('SELECT * FROM posts WHERE authorId = ?', [userId]);  
      res.json(posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
      res.status(500).json({ message: 'Error fetching posts' });
    }
  });

  
  router.get('/author/:authorId', async (req, res) => {
    const { authorId } = req.params;

    try {
      const posts = await db.all('SELECT * FROM posts WHERE authorId = ?', [authorId]);
      res.json(posts);
    } catch (error) {
      console.error(" Error fetching posts by author:", error);
      res.status(500).json({ message: 'Error fetching posts by author' });
    }
  });

  return router;
}
