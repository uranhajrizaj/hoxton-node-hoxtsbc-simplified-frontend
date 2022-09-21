export function Transactions({currentuser,signOut}:any){
    return(
        <div>
            <h2> Welcome {currentuser.name}</h2>
            <ul>
                {currentuser.transactions.map((transaction:any)=>(
                    <li>
                        Amount: {transaction.amount}
                        Currency: {transaction.currency}
                    </li>
                   
                ))}
            </ul>
            <button onClick={signOut}>Sign Out</button>
        </div>
    )
}