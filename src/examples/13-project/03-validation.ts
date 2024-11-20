export const validateValues = (values: { email: string; password: string }) => {
  if (!values.email.includes('@')) {
    throw new Error('Email invalid');
  }
  if (values.password.length < 8) {
    throw new Error('Password not long enough');
  }

  return {
    email: values.email,
    password: values.password,
  };
};
