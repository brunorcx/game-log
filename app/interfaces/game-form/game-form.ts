export type FormValues = {
  name?: string;
  genre?: string;
  description?: string;
};

export type ActionData = {
  values: FormValues;
  errors: {
    name?: string;
    genre?: string;
    description?: string;
  };
};
