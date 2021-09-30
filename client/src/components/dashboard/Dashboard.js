import { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import List from "./List";
import ProjectForm from "./ProjectForm"
import Header from "./Header";
import Footer from "./Footer";
import "./style/dashboard.css";


const Dashboard = () => {

    const { path, url } = useRouteMatch();

    const [pirates, setPirates] = useState([]);

    return (
        <>
            <div className="dashboard">
                <Router>

                    <Header></Header>
                    <Switch>
                        {
                        /*
                        <Route exact path={`${path}`}>
                            <List pirates={pirates} setPirates={setPirates} />
                        </Route>
                       */
                    }
                        <Route path={`${path}/new`}>
                            <ProjectForm new={true} />
                        </Route>

                         
                    </Switch>
                    <Footer></Footer>

                </Router>
            </div>
        </>
    )
}

export default Dashboard;