import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default function authRoutes(db) {  // ✅ Accept db as a parameter
  const router = express.Router();

  // User Signup
  router.post('/signup', async (req, res) => {
    const { email, password } = req.body;

    try {
      const existingUser = await db.get('SELECT * FROM users WHERE email = ?', [email]);
      if (existingUser) return res.status(400).json({ message: 'User already exists' });

      const hashedPassword = await bcrypt.hash(password, 10);
      const result = await db.run('INSERT INTO users (email, passwordHash) VALUES (?, ?)', [email, hashedPassword]);

      res.status(201).json({ id: result.lastID, email });
    } catch (error) {
      res.status(500).json({ error: 'Failed to register user' });
    }
  });

  // User Login
  router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await db.get('SELECT * FROM users WHERE email = ?', [email]);
      if (!user) return res.status(400).json({ message: 'Invalid credentials' });

      const isMatch = await bcrypt.compare(password, user.passwordHash);
      if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

      res.json({ token });
    } catch (error) {
      res.status(500).json({ error: 'Failed to log in' });
    }
  });

  return router;
}
