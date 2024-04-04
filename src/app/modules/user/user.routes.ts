import { UserRole } from '@prisma/client';
import { Router } from 'express';
import Auth from '../../middlewares/Auth';
import { UserController } from './user.controller';

const router = Router();

router.get(
  '/profile',
  Auth(UserRole.user, UserRole.super_admin),
  UserController.getProfile
);

export const UserRouter = router;
