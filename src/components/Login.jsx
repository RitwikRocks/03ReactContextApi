import { useContext, useState } from "react"
import UserContext from "../contexts/UserContext";



const Login = () => {
   const [username,setUsername] = useState("");
   const [password,setPassword] = useState("");

   const {setUser} = useContext(UserContext)

   const handleSubmit = (e)=>{
       e.preventDefault()
       setUser({username,password});
   }

  return (
    <>
    <div className="p-3 text-center bg-gray-700 flex flex-wrap content-center right-10 w-80 bg-center">
    <h3 className="px-2">UserName:</h3>
    <input type="text"
     placeholder = "UserName"    
     value={username}
     onChange={(e)=> setUsername(e.target.value)}
     />
    </div>
    <br/>
    <div className="p-3 text-center bg-gray-700 flex flex-wrap content-center right-10 w-80 bg-center">
     <h3 className="px-3">Password:</h3>
     <input type="text"
     placeholder = "Password"
     value={password}
     onChange={(e)=> setPassword(e.target.value)}
     />
    </div>
    <div className="flex flex-wrap content-center inset-24 p-2">
        <button className=" bg-blue-500 border-red-300 rounded-3xl p-2"
        onClick={handleSubmit}
        >Submit</button>
    </div>
    </>
   
  )
}

export default Login