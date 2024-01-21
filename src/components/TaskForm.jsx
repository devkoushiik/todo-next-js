"use client";
import { createTask } from "@/utils/actions";
import { useEffect, useState } from "react";
import { useFormStatus, useFormState } from "react-dom";
import toast from "react-hot-toast";
const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="btn  btn-primary join-item text-white"
      type="submit"
    >
      {pending ? "please wait..." : "create task"}
    </button>
  );
};

const initialState = {
  message: null,
};

const TaskForm = () => {
  const [state, action] = useFormState(createTask, initialState);
  // this code for clearing input.
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  useEffect(() => {
    if (state.message === "error") {
      toast.error("something went wrong.");
      return;
    }
    if (state.message) {
      toast.success("task created.");
    }
    setInputValue("");
  }, [state]);

  return (
    <form action={action}>
      <div className="join w-full mt-4">
        {/* <div>
          {state.message ? <p className="mb-2">{state.message}</p> : null}
        </div> */}

        <input
          type="text"
          className="input input-bordered join-item w-full text-white"
          placeholder="type here"
          name="content"
          required
          id="task"
          value={inputValue.toString()}
          onChange={handleChange}
        />

        <SubmitButton />
      </div>
    </form>
  );
};
export default TaskForm;
