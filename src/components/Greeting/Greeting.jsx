import React from "react"
import UserProfile from "../UserProfile/UserProfile"

const Greeting = () =>{

const user={
    name: "Lionel",
    age: 26,
    isAdmin: true
}


    return(
        <>
        <h1>Bienvenido {user.name} a la tienda de Iphones</h1>
        <UserProfile usuario={user}/>
        </>
    )
}

export default Greeting