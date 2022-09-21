import { useEffect, useState } from 'react'
import './App.css'
import { Signin } from './Pages/SignIn'
import { SignOut } from './Pages/SignOut'
import { Transactions } from './Pages/Transactions'

function App() {
  const [currentuser, setCurrentuser] = useState(null)


  function signIn(data: any) {
    setCurrentuser(data.user)
    localStorage.token = data.token
  }
  function signOut(data: any) {
    setCurrentuser(null)
    localStorage.removeItem("token")
  }
  useEffect(() => {
    if (localStorage.token) {
      fetch('http://localhost:5555/validate', {
        headers: {
          Authorization: localStorage.token
        }
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.error) {
            alert(data.error)
          } else {
            signIn(data)
          }
        })
    }
  }, [])
  return (
    <div className="App">
      {currentuser ?
        <Transactions currentuser={currentuser} signOut={signOut}/>
        : <>
          <h1>Welcome</h1>
          <SignOut signIn={signIn} />
          <Signin signIn={signIn}  />
        </>
      }
    </div>
  )
}

export default App
