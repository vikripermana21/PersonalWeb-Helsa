// authenticationMiddleware.js

import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const secretKey = process.env.JWT_SECRET; // Ambil secret key dari environment variable

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Forbidden' });
    }

    req.user = user;
    next();
  });
};
