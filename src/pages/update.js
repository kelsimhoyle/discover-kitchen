import React, { useState } from "react";
import { runUpdate } from "../functions/build";
import Password from "../components/password";

const Update = () => {
    const [posted, setPosted] = useState(false);
    const [auth, setAuth] = useState(false);

    const handleClick = type => {
        runUpdate(type)
            .then(() => setPosted(true))
            .catch(() => setPosted(false));

    }

    return (
        <>
            {auth ? (
                <div className="section is-medium">
                    <button className="button p-2" onClick={() => handleClick("build")}>Build</button>
                    <button className="button p-2" onClick={() => handleClick("preview")}>Preivew</button>
                    {posted ? <h3>POSTED!!</h3> : null}

                </div>
            ) : <Password  changeAuth={setAuth} auth={auth} />
            }

        </>
    )
};

export default Update;