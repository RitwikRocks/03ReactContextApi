import './App.css'
import UserContextProvider from './contexts/UserContextProvider'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

function App() {
  

  return (
    <>
    <h1 className="text-center text-6xl p-4 ">Login Form</h1>    
    <UserContextProvider>
      <Login />
      <Dashboard/>
    </UserContextProvider>
    </>
  )
}

export default App
