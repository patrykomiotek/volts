import { z } from 'zod';

// type UserRegistrationDto = {
//   username: string;
//   email: string;
//   password: string;
// }

export const validationSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  email: z.string().email(),
  password: z.string().min(3, 'Password is too short'),
  books: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
    }),
  ),
  // policy: z.string().min(3, 'Password is too short'),
});

export type UserRegistrationDto = z.infer<typeof validationSchema>;

// 1. form
// 2. walidacja validationSchema
// 3.

validationSchema.parse({
  username: 'aaaa',
  email: 'asadasasd', // throw
  password: 'adsadsd',
});
// validationSchema.omit()

//validationSchema.pick()
