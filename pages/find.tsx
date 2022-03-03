import Head from "next/head"
import NavBar from "../components/NavBar"
import Link from "next/link"
import { useState } from "react"
import UserData from "../DataBase/UserData"
const find = () => {
  const [data, setData] = useState({
    userFindId:"",
    userId:"",
    userEmail:"",
    userName:"",
    userPass:""
 })
const InputEvent = (event) => {
  const { name, value } = event.target;
  setData((preVal) => {
    return {
      ...preVal,
      [name]: value,
    };
  });
};
const findUser = ()=>{
  const user  = UserData.find((user)=>user.userId===data.userFindId)
  setData({
    userId:user.userId,
    userName:user.userName,
    userEmail:user.userEmail,
    userPass:user.userPass
  }) 
}
  return (
    <>
    <Head>
      <title>Prototype - Create</title>
    </Head>
   <NavBar />
   <h1 className="text-2xl text-center font-bold">Find User</h1>
  <div className="w-full max-w-xs mx-auto mt-3">
  <form className="bg-orange-400 shadow-md rounded px-10 pt-6 pb-8 mb-4">
  <div className="mb-4">
      <label className="block text-black text-sm font-bold mb-2" htmlFor="username">
       Enter User Id
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="User Id" name="userFindId"  value={data.userFindId} onChange={InputEvent}/>
    </div>
    <button className="bg-red-500 focus:bg-blue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={findUser}>
    Find User
    </button>
  </form>
  </div>
  <div className="w-full max-w-xs mx-auto mt-3">
  <form className="bg-blue-400 shadow-md rounded px-10 pt-6 pb-8 mb-4">
  <div className="mb-4">
      <label className="block text-black text-sm font-bold mb-2" htmlFor="username">
        User Id
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="" name="userId"  value={data.userId} onChange={InputEvent}/>
    </div>
    <div className="mb-4">
      <label className="block text-black text-sm font-bold mb-2" htmlFor="username">
       Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder=""  name="userName"  value={data.userName} onChange={InputEvent}/>
    </div>
    <div className="mb-4">
      <label className="block text-black text-sm font-bold mb-2" htmlFor="username">
        Email
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder=""  name="userEmail"  value={data.userEmail} onChange={InputEvent}/>
    </div>
    <div className="mb-6">
      <label className="block text-black text-sm font-bold mb-2" htmlFor="password">
       Password
      </label>
      <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder=""  name="userPass"  value={data.userPass} onChange={InputEvent}/>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-purple-500 focus:bg-blue text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline mr-1" type="button">
       <Link href="/">Create User</Link>
      </button>
      <button className="bg-purple-500 focus:bg-blue text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline" type="button">
       <Link href="/remove">Delete User</Link>
      </button>
    </div>
  </form>
</div>
    </>
  )
}

export default find