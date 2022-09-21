import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const App = props => {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to="/male">Male</Link></li>
                    <li><Link to="/female">Female</Link></li>
                </ul>
                <div style={{ background: 'cyan', padding: 10 }}>
                <Switch>
                    <Route path="/make">Make</Route>
                    <Route path="/female">Female</Route>
                </Switch>
                </div>
            </div>
        </Router>
    )
}

export default App;