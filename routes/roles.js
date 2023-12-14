import express from 'express';
import { pool } from '../db.js';

export const rolesRouter = express.Router();

rolesRouter.get('/', async(req, res) => {
    try {
        const roles = await pool.promise().query('SELECT * FROM Roles');
        res.status(200).json(roles[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

rolesRouter.get('/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const roles = await pool.promise().query('SELECT * FROM Roles WHERE id = ?', [id]);
        res.status(200).json(roles[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default rolesRouter;