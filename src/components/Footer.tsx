import Link from "next/link";
import { BsGithub, BsLinkedin, BsGlobe2 } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="bg-blue-400 z-20 w-full flex justify-between px-16 py-2">
      <div>
        <p className="text-lg font-semibold">Welcome to Task Manger</p>
      </div>
      <div>
        <h1 className="font-semibold">Contact Links</h1>
        <ul className="flex flex-col text-sm font-semibold gap-1 p-1">
          <li>
            <Link
              href="https://www.linkedin.com/in/harit-khushwas-8019451b7/"
              className="flex place-items-center gap-1"
              target="_blank"
            >
              <BsLinkedin size={16} />
              <span>Linkdin</span>
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/Harit2002"
              className="flex place-items-center gap-1"
              target="_blank"
            >
              <BsGithub size={16} />
              <span>Github</span>
            </Link>
          </li>
          <li>
            <Link
              href="https://harit2002.github.io/"
              className="flex place-items-center gap-1"
              target="_blank"
            >
              <BsGlobe2 size={16} />
              <span>Profolio</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
