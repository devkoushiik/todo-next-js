import EditTask from "@/components/EditTask";
import { getTask } from "@/utils/actions";
import Link from "next/link";

const EditTaskPage = async ({ params }) => {
  const task = await getTask(params.id);
  return (
    <div className="mb-16">
      <Link className="btn btn-info mt-5 text-white" href={"/tasks"}>
        back to todo page
      </Link>
      <EditTask task={task} />
    </div>
  );
};
export default EditTaskPage;
