import prisma from "@/utils/db";
import Link from "next/link";
// actions
const prismaHandler = async () => {
  const allTasks = await prisma.task.findMany({
    where: {
      completed: false,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return allTasks;
};

const Todo = async () => {
  const tasks = await prismaHandler();

  return (
    <div className="pb-6">
      <h1 className="text-3xl my-4 uppercase">My Tasks</h1>
      {tasks.length === 0 ? (
        <div className="w-full">
          <h1 className="text-center">Please add some tasks. 😔</h1>
          <div className="w-[130px] mx-auto m-6">
            <Link
              className="  btn btn-outline border border-indigo-700 shadow-md"
              href={"/"}
            >
              Add Task
            </Link>
          </div>
        </div>
      ) : (
        tasks.map((task) => {
          return (
            <ul
              key={task.id}
              className="mt-4 capitalize border border-blue-500 max-w-80 rounded-xl text-center"
            >
              {!task.completed && (
                <li
                  key={task.id}
                  className="text-xl flex flex-1 justify-between px-5 py-2 text-white"
                >
                  <span>{task.content}</span>

                  <span>{task.createdAt.toLocaleTimeString()}</span>
                </li>
              )}
            </ul>
          );
        })
      )}
    </div>
  );
};
export default Todo;
