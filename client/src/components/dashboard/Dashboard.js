
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import ContentList from "./ContentList";
import ProjectForm from "./ProjectForm"
import Header from "./HeaderDashboard";
import Footer from "./Footer";
import "./style/dashboard.css";


const Dashboard = () => {

    const { path, url } = useRouteMatch();

    return (
        <>
            <div className="dashboard">
                <Router>

                    <Header></Header>
                    <Switch>

                        <Route exact path={`${path}`}>
                            <ContentList/>
                        </Route>

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