import { Router } from 'express';
import { AuthenticationRouter } from '../modules/Authentication/authentication.routes';
import { UserRouter } from '../modules/user/user.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthenticationRouter,
  },
  {
    path: '/user',
    route: UserRouter,
  },
];

moduleRoutes.forEach(route => {
  router.use(route.path, route.route);
});

export default router;
