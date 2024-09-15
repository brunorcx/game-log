import { json, redirect } from "@remix-run/node";

// Define the type of the validation function
type ValidationFunction = (formData: FormData) => {
  errors: Record<string, string | null>;
  values: Record<string, string>;
};

// Update the handleFormSubmission function to accept a validation function
export async function handleFormSubmission(formData: FormData, validateFunction: ValidationFunction) {
  const { errors, values } = validateFunction(formData);

  if (Object.keys(errors).length > 0) {
    return json({ errors, values }, { status: 400 });
  }

  // Handle form submission (e.g., saving to database)
  // ...

  return redirect("/success"); // Redirect on successful submission
}
