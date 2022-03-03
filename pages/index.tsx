import Head from "next/head";
import NavBar from "../components/NavBar";
import Link from "next/link";
import Form from "../components/Form"

const Home = () => {
  return (
    <>
    <Head>
      <title>Prototype - Create</title>
    </Head>
   <NavBar />
      <h1 className="text-2xl text-center font-bold">Create User</h1>
      <div className="w-full max-w-xs mx-auto mt-3 ">
  <form className="bg-blue-400 shadow-md rounded px-10 pt-6 pb-8 mb-4">
    <Form type={"Create"} />
    <div className="flex items-center justify-between">
      <button className="bg-purple-500 focus:bg-blue text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline" type="button">
       Create User
      </button>
      <button className="bg-purple-500 focus:bg-blue text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline" type="button">
      <Link href="/find">Find User</Link>
      </button>
    </div>
  </form>
</div>

    </>
  );
};

export default Home;
