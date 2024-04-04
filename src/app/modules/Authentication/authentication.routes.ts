import { Router } from 'express';
import validateRequest from '../../middlewares/validateUser';
import { AuthController } from './authentication.controller';
import { AuthenticationZodValidation } from './authentication.validation';

const router = Router();

router.post(
  '/create-account',
  validateRequest(AuthenticationZodValidation.createAccount),
  AuthController.createAccount
);

router.post('/login', AuthController.login);

router.post(
  '/change-password',
  //   Auth(UserRole.user, UserRole.super_admin),
  AuthController.changePassword
);

router.post('/forgot-password', AuthController.forgotPassword);

router.post('/reset-password', AuthController.resetPassword);

export const AuthenticationRouter = router;
