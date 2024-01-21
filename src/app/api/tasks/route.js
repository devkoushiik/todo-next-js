import db from "@/utils/db";

export const GET = async (request) => {
  const tasks = await db.task.findMany();
  return Response.json({
    data: tasks,
  });
};

export const POST = async (req) => {
  // parse
  const data = await req.json();
  const task = await db.task.create({
    data: {
      content: data.content,
    },
  });
  if (!data.content) {
    return Response.json({ msg: "no data found." });
  }
  return Response.json({ msg: "task created." });
};
