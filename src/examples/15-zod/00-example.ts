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

// export type UserRegistrationDto = z.infer<typeof validationSchema>;

export type UserRegistrationDto = z.infer<typeof validationSchema>;

// 1. form
// 2. walidacja validationSchema
// 3. tworzymy typ

validationSchema.parse({
  username: 'jan',
  email: 'jan@wp.pl', // throw
  password: 'adsadsd',
});

const myVar = {
  a: 2,
  b: 'test',
};
type MyVar = typeof myVar;

const myVar2: unknown = myVar;

// 100 lines below
const anotherVar = myVar2 satisfies MyVar;

const validateVar = (arg1: MyVar) => {};

// validateVar(myVar2 satisfies MyVar);
validateVar(myVar2 as MyVar);

// z.infer<typeof validationSchema>

// validationSchema.omit()

//validationSchema.pick()
