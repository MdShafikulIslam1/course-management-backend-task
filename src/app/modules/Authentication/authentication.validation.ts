import { z } from 'zod';

const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
);
const createAccount = z.object({
  body: z.object({
    name: z
      .string({ required_error: 'name is required' })
      .min(2, 'Name must be at least 2 characters long')
      .max(50, 'Name cannot exceed 50 characters'),
    password: z
      .string({ required_error: 'password is required' })
      .min(8, 'Password must be at least 8 characters long')
      .regex(
        passwordValidation,
        'Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character'
      ),
  }),
});

export const AuthenticationZodValidation = {
  createAccount,
};
