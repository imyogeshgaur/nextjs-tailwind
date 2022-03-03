import Head from "next/head";
import NavBar from "../components/NavBar";
import Link from "next/link";
import { useState } from "react";
import UserData from "../DataBase/UserData"

const Home = () => {
  const [data, setData] = useState({
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
  const submitData = () =>{
    UserData.push({
      userId:data.userId,
      userEmail:data.userEmail,
      userName:data.userName,
      userPass:data.userPass
    });
    setData({
     userEmail:"",
     userId:"",
     userName:"",
     userPass:"" 
    })
    // UserData.pop()
    console.log(UserData);
    
  }
  return (
    <>
    <Head>
      <title>Prototype - Create</title>
    </Head>
   <NavBar />
  <h1 className="text-2xl text-center font-bold">Create User</h1>
  <div className="w-full max-w-xs mx-auto mt-3 ">
  <form className="bg-blue-400 shadow-md rounded px-10 pt-6 pb-8 mb-4">
  <div className="mb-4">
      <label className="block text-black text-sm font-bold mb-2" htmlFor="username">
       Enter Your User Id
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="User Id" name="userId"  value={data.userId} onChange={InputEvent}/>
    </div>
    <div className="mb-4">
      <label className="block text-black text-sm font-bold mb-2" htmlFor="username">
       Enter Your Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="User Name" name="userName"  value={data.userName} onChange={InputEvent}/>
    </div>
    <div className="mb-4">
      <label className="block text-black text-sm font-bold mb-2" htmlFor="username">
        Enter Your Email
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="User Email" name="userEmail"  value={data.userEmail} onChange={InputEvent}/>
    </div>
    <div className="mb-6">
      <label className="block text-black text-sm font-bold mb-2" htmlFor="password">
        Enter Your Password
      </label>
      <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" name="userPass"  value={data.userPass} onChange={InputEvent}/>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-purple-500 focus:bg-blue text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline" type="button" onClick={submitData}>
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
