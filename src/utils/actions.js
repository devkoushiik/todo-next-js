"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
export const getAllTasks = async () => {
  const tasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return tasks;
};

// server actions
export const createTask = async (formData) => {
  "use server";
  let content = formData.get("content");
  await prisma.task.create({
    data: {
      content,
    },
  });
  // revalidation
  revalidatePath("/");
  content = "";
};
//

// delete
export const deleteTask = async (formData) => {
  const id = formData.get("id");
  const text = formData.get("text");
  await prisma.task.delete({
    where: { id },
  });
  revalidatePath("/");
};

// edit task

export const getTask = async (id) => {
  return prisma.task.findUnique({
    where: { id },
  });
};

export const editTask = async (formData) => {
  const id = formData.get("id");
  const content = formData.get("content");
  const completed = formData.get("completed");
  await prisma.task.update({
    where: {
      id,
    },
    data: {
      content,
      completed: completed === "on" ? true : false,
    },
  });
  redirect("/");
};
