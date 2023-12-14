import express from 'express';
import { pool } from '../db.js';

export const userRouter = express.Router();

userRouter.get('/', async (req, res) => {
    try {
        const users = await pool.promise().query('SELECT * FROM Users');
        res.status(200).json(users[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

userRouter.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const users = await pool.promise().query('SELECT * FROM Users WHERE id = ?', [id]);
        res.status(200).json(users[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
  
export default userRouter;