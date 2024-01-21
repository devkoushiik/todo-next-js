"use server";
import { redirect } from "next/navigation";
import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const getAllTasks = async () => {
  const tasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return tasks;
};

// server actions
export const createTask = async (prevState, formData) => {
  //   await new Promise((resolve) => setTimeout(resolve, 5000));
  const Task = z.object({
    content: z.string().min(3),
  });
  try {
    let content = formData.get("content");
    Task.parse({ content });
    await prisma.task.create({
      data: {
        content,
      },
    });

    // revalidation
    revalidatePath("/");

    return { message: "success" };
  } catch (error) {
    return { message: "error" };
  }
};

// delete
export const deleteTask = async (prevState, formData) => {
  try {
    const id = formData.get("id");
    await prisma.task.delete({
      where: { id },
    });
    // revalidation
    revalidatePath("/");
    return { message: "success" };
  } catch (error) {
    return { message: "error" };
  }
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
