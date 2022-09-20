export function SignOut() {
    return (
        <>
        <h3>Sign Out</h3>
        <form  onSubmit={(e) => {
            e.preventDefault()
        }}>
            <input type="text" name="email" placeholder="Your name" required/>
            <input type="text" name="password" placeholder="Your surname" required/>
            <input type="email" name="email" placeholder="Your email"required/>
            <input type="password" name="password" placeholder="Your password" required/>
            <button>Sign out</button>
        </form>
        </>
    )
}