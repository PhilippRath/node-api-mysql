import express from 'express';
import defaultRouter from './routes/default.js';
import userRouter from './routes/users.js';
import rolesRouter from './routes/roles.js';
import { pool } from './db.js';

const PORT = process.env.PORT || 3000;

const app = express();
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', defaultRouter);
app.use('/roles', rolesRouter);
app.use('/users', userRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

