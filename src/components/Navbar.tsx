import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-400 text-white h-12 py-2 px-3 flex justify-between place-items-center">
      <div className="font-bold text-lg">
        <Link href="/">Task manager</Link>
      </div>
      <div className="text-sm font-semibold">
        <ul className="flex space-x-7 ">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/addTask">Add Task</Link>
          </li>
          <li>
            <Link href="/showTask">Show Tasks</Link>
          </li>
        </ul>
      </div>
      <div className="text-sm font-semibold">
        <ul className="flex space-x-4">
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/signup">Signup</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
