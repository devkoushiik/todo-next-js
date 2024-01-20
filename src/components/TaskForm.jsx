import { createTask } from "@/utils/actions";

const TaskForm = () => {
  return (
    <form action={createTask}>
      <div className="join w-full mt-4">
        <input
          type="text"
          className="input input-bordered join-item w-full text-white"
          placeholder="type here"
          name="content"
          required
        />
        <button className="btn btn-primary join-item text-white" type="submit">
          create task
        </button>
      </div>
    </form>
  );
};
export default TaskForm;
