import Head from "next/head"
import Link from "next/link"
import NavBar from "../components/NavBar"
import Form from "../components/Form"

const update = () => {
  return (
    <>
    <Head>
      <title>Prototype - Create</title>
    </Head>
   <NavBar />
   <h1 className="text-2xl text-center font-bold">Update User</h1>
  <div className="w-full max-w-xs mx-auto mt-3">
  <form className="bg-orange-400 shadow-md rounded px-10 pt-6 pb-8 mb-4">
  <div className="mb-4">
      <label className="block text-black text-sm font-bold mb-2" htmlFor="username">
       Enter User Id 
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="User Id"/>
    </div>
    <button className="bg-red-500 focus:bg-blue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
    Update Data
    </button>
  </form>
  </div>
  <div className="w-full max-w-xs mx-auto mt-3">
  <form className="bg-blue-400 shadow-md rounded px-10 pt-6 pb-8 mb-4">
    <h1 className="font-bold text-center">Updated Data is </h1>
    <Form type={"Update"} />
    <div className="flex items-center justify-between">
      <button className="bg-purple-500 focus:bg-blue text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline mr-1" type="button">
       <Link href="/">Create User</Link>
      </button>
      <button className="bg-purple-500 focus:bg-blue text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline" type="button">
       <Link href="/find">Delete User</Link>
      </button>
    </div>
  </form>
</div>
    </>
  )
}

export default update