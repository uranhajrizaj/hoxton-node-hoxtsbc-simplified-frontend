import { useState } from "react"
import * as API from './api'


export function SignOut({ signIn }: any) {
  const [signOutError, setSignOutError] = useState("")
  return (
    <>
      <h3>Sign Out</h3>
      <form onSubmit={(e) => {
        e.preventDefault()
        const body = {
          //@ts-ignore
          name: e.target.name.value,
          //@ts-ignore
          surname: e.target.surname.value,
          //@ts-ignore
          email: e.target.email.value,
          //@ts-ignore
          password: e.target.password.value
        }
        API.request("/sign-up", "POST", body)
          .then(data => {
            if (data.error) {
              setSignOutError(data.error)
            } else {
              signIn(data)
            }
          })

      }}>
        <input type="text" name="name" placeholder="Your name" required />
        <input type="text" name="surname" placeholder="Your surname" required />
        <input type="email" name="email" placeholder="Your email" required />
        <input type="password" name="password" placeholder="Your password" required />
        {signOutError ? <p>{signOutError}</p> : null}
        <button>Sign out</button>
      </form>
    </>
  )
}