import React from "react"
import "../pagina/style/BadgesList.css"
import { Link } from "react-router-dom"
class BadgesList extends React.Component {
    render() {
        if (this.props.badges.length === 0) {
            return (
                <div>
                    <h3>No Encontramos Nadita</h3>
                    <Link className="btn btn-primary" to="/badges/new">
                        Create New Badge
                    </Link>
                </div>
            )
        }
        return (
            <ul className="list-unstyled">
                {this.props.badges.map((badge) => {
                    return (
                        <div className=" Badges_list-cards">
                            <figure>
                                <img className="Badges_avatar" src={badge.avatarUrl} alt="logo avatar" />
                            </figure>
                            <div className="Badges_list-data">
                                <li key={badge.id}>
                                    <p className="Badge_fullName">{badge.firstName} {badge.lastName} </p>
                                    <p className="Badge_twitter"> @{badge.twitter} </p>
                                    <p className="Badge_jobTitle" >{badge.jobTitle}</p>
                                </li>
                            </div>

                        </div>

                    )
                })}
            </ul>
        )
    }
}
export default BadgesList