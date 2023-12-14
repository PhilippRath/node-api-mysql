import  express from 'express';

export const defaultRouter = express.Router();
// Routes
defaultRouter.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});

export default defaultRouter;