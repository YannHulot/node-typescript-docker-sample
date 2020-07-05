import { Router } from 'express';
import { all, add } from './controllers/index';

const router = Router();

// Book routes
router.get('/api/book/all', all);
router.post('/api/book/add', add);

export default router;
