import { useState } from "react"

export function SignOut({signIn}:any) {
    const [signOutError,setSignOutError]=useState("")
    return (
        <>
        <h3>Sign Out</h3>
        <form  onSubmit={(e) => {
            e.preventDefault()
            fetch('http://localhost:5555/sign-up', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                //@ts-ignore
                  name:e.target.name.value,
                //@ts-ignore
                  surname:e.target.surname.value,
                //@ts-ignore
                  email: e.target.email.value,
                //@ts-ignore
                  password: e.target.password.value
                })
              })
                .then(resp => resp.json())
                .then(data => {
                  if (data.error) {
                    setSignOutError(data.error)
                  } else {
                    signIn(data)
                  }
                })
            
        }}>
            <input type="text" name="name" placeholder="Your name" required/>
            <input type="text" name="surname" placeholder="Your surname" required/>
            <input type="email" name="email" placeholder="Your email"required/>
            <input type="password" name="password" placeholder="Your password" required/>
            {signOutError?<p>{signOutError}</p>:null}
            <button>Sign out</button>
        </form>
        </>
    )
}