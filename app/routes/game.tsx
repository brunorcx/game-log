// src/routes/game.tsx

import GameForm from "../components/game-form/GameForm";
import { handleFormSubmission } from "../server/actions/action"; // Adjust path if needed
import { validateGameForm } from "../validations/validateGameForm"; // Adjust path if needed

export const action = async ({ request }: { request: Request }) => {
  // Get FormData from request
  const formData = await request.formData();

  // Use handleFormSubmission to process the form data
  return handleFormSubmission(formData, validateGameForm);
};

export default function GamePage() {
  // Render your GameForm component here
  return (
    <div>
      <h1>Game Form</h1>
      <GameForm />
    </div>
  );
}
