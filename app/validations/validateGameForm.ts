// utils/validateGameForm.ts

import { ActionData } from "../interfaces/game-form/game-form";

export function validateGameForm(formData: FormData): ActionData {
  const errors: Partial<ActionData["errors"]> = {};
  const values: Partial<ActionData["values"]> = {};

  const name = formData.get("name")?.toString().trim();
  const genre = formData.get("genre")?.toString().trim();
  const description = formData.get("description")?.toString().trim();

  if (!name) {
    errors.name = "Game name is required.";
  }
  if (!genre) {
    errors.genre = "Genre is required.";
  }
  if (!description) {
    errors.description = "Description is required.";
  }

  values.name = name || "";
  values.genre = genre || "";
  values.description = description || "";

  return { errors, values };
}
