import React from 'react'

const Form = (props) => {
  return (
    <>
     <div className="mb-4">
      <label className="block text-black text-sm font-bold mb-2" htmlFor="username">
       {props.type==="Create" ? "Enter Your User Id":" "}
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="User Id"/>
    </div>
    <div className="mb-4">
      <label className="block text-black text-sm font-bold mb-2" htmlFor="username">
        {props.type==="Create" ? "Enter Your Username" : " "}
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="User Name"/>
    </div>
    <div className="mb-4">
      <label className="block text-black text-sm font-bold mb-2" htmlFor="username">
        {props.type==="Create" ? "Enter Your Email":" "}
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="User Email"/>
    </div>
    <div className="mb-6">
      <label className="block text-black text-sm font-bold mb-2" htmlFor="password">
        {props.type==="Create" ? "Enter Your Password" : ""}
      </label>
      <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
    </div>
    </>
  )
}

export default Form