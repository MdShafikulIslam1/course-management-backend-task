import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import config from '../../config';
import ApiError from '../../error/ApiError';
import { JwtHelpers } from '../../helpers/jwtHelpes';

const Auth =
  (...requiredRoles: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;
      if (!token) {
        throw new ApiError(httpStatus.UNAUTHORIZED, 'Unauthorized User');
      }
      const verifiedToken = JwtHelpers.verifyToken(
        token,
        config.jwt.secret as Secret
      );
      if (!verifiedToken) {
        throw new ApiError(httpStatus.UNAUTHORIZED, 'Unauthorized User');
      }
      req.user = verifiedToken;
      if (requiredRoles.length && !requiredRoles.includes(verifiedToken.role)) {
        throw new ApiError(httpStatus.FORBIDDEN, 'FORBIDDEN');
      }
      next();
    } catch (error) {
      next(error);
    }
  };
export default Auth;
