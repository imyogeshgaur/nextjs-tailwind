import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const NavBar = () => {
  return (
    <>
      <nav
        className={`flex items-center justify-between flex-wrap p-6 ${styles.navbarColor}`}
      >
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-3xl tracking-tight">
            <Link href="/">Prototype</Link>
          </span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-white-200 border-white-400 hover:text-white hover:border-white"></button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-xl text-center lg:flex-grow">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:font-bold  mr-4">
              <Link href="/find">Find User</Link>
            </a>
            <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:font-bold mr-4">
              <Link href="/update">Update User</Link>
            </a>
            <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:font-bold">
              <Link href="/remove">Delete User</Link>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
