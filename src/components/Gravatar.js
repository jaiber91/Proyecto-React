import React from "react"
import md5 from "md5"

function Gravatar(props) {
    const email = props.email
    const hash = md5(email)

    return (
        <img className="props.classname" src={`http://www.gravatar.com/avatar/${hash}`} alt="Avatar" />

    )
}

export default Gravatar