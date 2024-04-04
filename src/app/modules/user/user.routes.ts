import { UserRole } from '@prisma/client';
import { Router } from 'express';
import Auth from '../../middlewares/Auth';
import { UserController } from './user.controller';

const router = Router();

router.get(
  '/view-profile',
  Auth(UserRole.user, UserRole.super_admin),
  UserController.viewProfile
);

router.patch('/update-profile/:id', UserController.updateProfile);

export const UserRouter = router;
