import React from "react"
import "./style/NotFound.css"
import Error404 from "../images/404Error.svg"

function NotFound() {
    return (
        <div className="Notfound">
            <img className="NotFound_img" img src={Error404} alt="" />
        </div>

    )
}
export default NotFound