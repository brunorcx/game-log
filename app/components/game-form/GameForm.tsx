import { Form, useActionData, useNavigation } from "@remix-run/react";
import { useState, useEffect } from "react";
import classNames from "classnames";
import "../../styles/game-form.less";
import { ActionData } from "../../interfaces/game-form/game-form";

function ValidationMessage({ error, isSubmitting }: { error: string | null; isSubmitting: boolean }) {
  const [show, setShow] = useState(!!error);

  useEffect(() => {
    const id = setTimeout(() => {
      setShow(!!error && !isSubmitting);
    }, 300);

    return () => clearTimeout(id);
  }, [error, isSubmitting]);

  return <div className={classNames("validation-message", { show })}>{error}</div>;
}

export default function GameForm() {
  const navigation = useNavigation();
  const actionData = useActionData<ActionData>();

  return (
    <Form method="post">
      <fieldset disabled={navigation.state === "submitting"}>
        {/* Game Name */}
        <p>
          <label>
            Game Name:
            <input name="name" type="text" defaultValue={actionData?.values?.name || ""} style={{ borderColor: actionData?.errors?.name ? "red" : "none" }} />
          </label>
        </p>
        <ValidationMessage isSubmitting={navigation.state === "submitting"} error={actionData?.errors?.name ?? null} />

        {/* Genre */}
        <p>
          <label>
            Genre:
            <input name="genre" type="text" defaultValue={actionData?.values?.genre || ""} style={{ borderColor: actionData?.errors?.genre ? "red" : "none" }} />
          </label>
        </p>
        <ValidationMessage isSubmitting={navigation.state === "submitting"} error={actionData?.errors?.genre ?? null} />

        {/* Game Description */}
        <p>
          <label>
            Description:
            <br />
            <textarea name="description" defaultValue={actionData?.values?.description || ""} style={{ borderColor: actionData?.errors?.description ? "red" : "none" }} />
          </label>
        </p>
        <ValidationMessage isSubmitting={navigation.state === "submitting"} error={actionData?.errors?.description ?? null} />

        {/* Submit Button */}
        <p>
          <button type="submit">{navigation.state === "submitting" ? "Saving..." : "Save Game"}</button>
        </p>
      </fieldset>
    </Form>
  );
}
