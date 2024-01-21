import Link from "next/link";
const Navbar = () => {
  return (
    <div className="flex justify-between text-white bg-slate-900 font-semibold p-4 items-center">
      <h1 className="border border-primary px-6 ml-4 py-3 rounded-3xl">
        <Link className="uppercase" href={"/todo"}>
          List of Tasks
        </Link>
      </h1>
      <ul className="flex text-lg">
        <li className="border border-primary px-6 mr-4 py-3 rounded-3xl">
          <Link href={"/"}>Edit Task</Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
