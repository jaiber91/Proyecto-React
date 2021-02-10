import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pagina/Home";
import BadgeNew from "../pagina/badgeNew";
import Layout from "./Layout"
import Badges from "../pagina/badges";
import NotFound from "../pagina/NotFound";
import BadgeEdit from "../pagina/BadgeEdit"

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={BadgeNew} />
                    <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
                    <Route exact path="/" component={Home} />
                    <Route component={NotFound} />
                    <h1>hola</h1>
                </Switch>
            </Layout>
        </BrowserRouter>

    )
}

export default App