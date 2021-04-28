import React, { useState } from "react";

const Password = (changeAuth, auth) => {
    const [password, setPassword] = useState("");
    


    const handleSubmit = () => {
        console.log("here")
        console.log(process.env.GATSBY_PASSWORD)
        if (password === process.env.GATSBY_PASSWORD) {
            changeAuth(true)
            console.log(auth)
        }
        
    }

    return (
        <>
            <div className="field">
                <p className="control has-icons-left">
                    <input className="input" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                    <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                    </span>
                </p>
            </div>
            <div className="field">
                <p className="control">
                    <button className="button is-success" onClick={handleSubmit} >
                        Login
                    </button>
                </p>
            </div>
        </>
    )
}

export default Password;