import { useContext } from "react"
import UserContext from "../contexts/UserContext"


const Dashboard = () => {
  const {user} = useContext(UserContext)
  let username=""
  if(!user)
      username="You Need To Login"
  else
      username = `${user.username} has Just Logged In`
  return (
    <div>
        <h1 className="bg-black text-white flex-grow width-50 px-2 text-center">{username}</h1>
    </div>
  )
}

export default Dashboard