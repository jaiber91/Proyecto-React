import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import header from "../images/platziconf-logo.svg"
import "./style/BadgeEdit.css"
import BadgeForm from "../components/BadgeForm"
import Badge from "../components/badge"
import api from "../api"
import PageLoading from "../components/PageLoading"


class BadgeEdit extends React.Component {
    state = {
        loading: false,
        error: null,
        form: {
            firstName: "",
            lastName: "",
            email: "",
            jobTitle: "",
            twitter: "",
        }
    };
    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        })
    }

    handleSubmit = async e => {
        e.preventDefault()
        this.setState({ loading: true, error: null })

        try {
            await api.badges.create(this.state.form)
            this.setState({ loading: false })

            this.props.history.push("/badges")//esto es para redirigir al usuario a badges
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }
    render() {
        if (this.state.loading) {
            return <PageLoading />
        }
        return (
            <React.Fragment >

                <div className="BadgeEdit__hero">
                    <img className="BadgeEdit__hero-image img-fluid" src={header} alt="logo" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName={this.state.form.firstName || "FIRST_NAME"}
                                lastName={this.state.form.lastName || "LAST_NAME"}
                                jobTitle={this.state.form.jobTitle || "twitter"}
                                twitter={this.state.form.twitter || "JOBTITLE"}
                                email={this.state.form.email || "EMAIL"}
                                avatarUrl="http://www.gravatar.com/avatar?d=identicon" />
                        </div>
                        <div className="col-6">
                            <BadgeForm
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                error={this.state.error}
                            />
                        </div>
                    </div>

                </div>

            </React.Fragment>

        )
    }
}

export default BadgeEdit;