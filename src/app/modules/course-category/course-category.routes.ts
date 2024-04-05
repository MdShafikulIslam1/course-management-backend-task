import { Router } from 'express';
import { CategoryController } from './course-category.controller';

const router = Router();

router.post('/create', CategoryController.insertIntoDB);

export const CategoryRouter = router;
