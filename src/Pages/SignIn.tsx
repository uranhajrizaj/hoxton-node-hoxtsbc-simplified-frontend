import { useState } from "react"

export function Signin({signIn}:any) {
    const [signInError,setSignInError]=useState("")
    return (
        <>
        <h3>Sign In</h3>
        <form onSubmit={(e) => {
            e.preventDefault()
            fetch('http://localhost:5555/sign-in', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                //@ts-ignore
                email: e.target.email.value,
                //@ts-ignore
                password: e.target.password.value
            })
          })
            .then(resp => resp.json())
            .then(data => {
              if (data.error) {
                setSignInError(data.error)
              } else {
                signIn(data)
              }
            })
        }}>
            <input type="email" name="email" placeholder="Enter your email" required/>
            <input type="password" name="password" placeholder="Enter your password" required />
            {signInError?<p>{signInError}</p>:null}
             <button>Sign In</button>
        </form>
        </>
    )
}