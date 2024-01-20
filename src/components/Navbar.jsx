import Link from "next/link";
const Navbar = () => {
  return (
    <div className="flex justify-between text-black font-semibold p-4 items-center">
      <h1 className="border border-primary p-4 rounded-3xl">
        <Link className="" href={"/todo"}>
          List of Tasks
        </Link>
      </h1>
      <ul className="flex text-lg">
        <li className="px-2 border border-primary p-4 rounded-3xl">
          <Link href={"/"}>Edit Task</Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
