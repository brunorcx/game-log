import Layout from "~/components/Layout";
import GameForm from "~/components/GameForm";
import { handleFormSubmission } from "~/server/actions/action";
import { validateGameForm } from "~/validations/validateGameForm";

export const action = async ({ request }: { request: Request }) => {
  // Get FormData from request
  const formData = await request.formData();

  // Use handleFormSubmission to process the form data
  return handleFormSubmission(formData, validateGameForm);
};

export default function GamePage() {
  return (
    <Layout>
      <h1>Game Form</h1>
      <GameForm />
    </Layout>
  );
}
