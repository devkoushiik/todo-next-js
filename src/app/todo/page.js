import prisma from "@/utils/db";

// actions
const prismaHandler = async () => {
  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return allTasks;
};

const Todo = async () => {
  const tasks = await prismaHandler();

  return (
    <div>
      <h1 className="text-4xl mt-4">My Tasks</h1>
      {tasks.map((task) => {
        return (
          <ul
            key={task.id}
            className="mt-4 capitalize border border-blue-500 max-w-80 rounded-xl text-center"
          >
            <li key={task.id} className="text-xl py-2">
              {task.content}
            </li>
          </ul>
        );
      })}
    </div>
  );
};
export default Todo;
