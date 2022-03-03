import Head from "next/head"
import Link from "next/link"
import NavBar from "../components/NavBar"
import { useState } from "react"
import UserData from "../DataBase/UserData"

const update = () => {
  const [data, setData] = useState({
    userFindId:"",
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
const updateUser = () =>{
  const user  = UserData.find((user)=>user.userId===data.userFindId) 
  user.userEmail = data.userEmail;
  user.userName = data.userName;
  user.userPass = data.userPass  
}
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
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="User Id" name="userFindId"  value={data.userFindId} onChange={InputEvent}/>
    </div>
  </form>
  </div>
  <div className="w-full max-w-xs mx-auto mt-3">
  <form className="bg-blue-400 shadow-md rounded px-10 pt-6 pb-8 mb-4">
    <h1 className="font-bold text-center">Data To Update</h1>
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
      <button className="bg-purple-500 focus:bg-blue text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline mr-1" type="button" onClick={updateUser}>
       Update User
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