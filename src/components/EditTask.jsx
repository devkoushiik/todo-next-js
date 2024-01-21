"use client";
import { editTask } from "@/utils/actions";
import { comment } from "postcss";

const EditTask = ({ task }) => {
  const { id, content, completed } = task;
  return (
    <div className="border border-primary mt-7 p-10 rounded-3xl">
      <form action={editTask} className="">
        <input type="hidden" name="id" value={id} />
        {/* content */}
        <input
          type="text"
          required
          defaultValue={content}
          name="content"
          className="input input-bordered w-full text-white my-4"
        />
        {/* completed */}
        <div className="form-control">
          <label htmlFor="completed" className="label cursor-pointer">
            <span className="label-text text-xl text-white">completed</span>
            <input
              type="checkbox"
              defaultChecked={completed}
              className="checkbox checkbox-primary checkbox-sm"
              name="completed"
            />
          </label>
          <button
            type="submit"
            className="btn btn-primary btn-block btn-md uppercase mt-3 text-white h-10"
          >
            edit
          </button>
        </div>
      </form>
    </div>
  );
};
export default EditTask;

/**
 * form
 * update
 * redirect
 */
