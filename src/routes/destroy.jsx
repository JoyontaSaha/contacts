import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

export async function action({ params }) {
  // throw new Error("oh dang!"); // uncomment and click 'Delete' button to see contextual error
  await deleteContact(params.contactId);
  return redirect("/");
}