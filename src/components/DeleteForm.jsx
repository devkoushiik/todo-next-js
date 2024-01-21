"use client";
import { deleteTask } from "@/utils/actions";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import toast from "react-hot-toast";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} className="btn btn-xs btn-error text-white">
      {pending ? "pending..." : "delete"}
    </button>
  );
};

let initialState = {
  message: null,
};

const DeleteForm = ({ id }) => {
  const [state, action] = useFormState(deleteTask, initialState);
  console.log(state);
  useEffect(() => {
    if (state.message === "error") {
      toast.error("something went wrong.");
      return;
    }
    if (state.message) {
      console.log("ms");
      toast.success("deleted.");
    }
  }, [state]);
  return (
    <form action={action}>
      <input type="hidden" name="id" value={id} />
      <SubmitButton />
    </form>
  );
};
export default DeleteForm;
