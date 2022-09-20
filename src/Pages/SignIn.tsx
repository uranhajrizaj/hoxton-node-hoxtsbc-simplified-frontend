export function Signin() {
    return (
        <>
        <h3>Sign In</h3>
        <form onSubmit={(e) => {
            e.preventDefault()
        }}>
            <input type="email" name="email" placeholder="Enter your email" required/>
            <input type="password" name="password" placeholder="Enter your password" required />
             <button>Sign In</button>
        </form>
        </>
    )
}