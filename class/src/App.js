import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import { routes } from "./constants/routers";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route
                    path={routes.HOME}
                    Component={Home}
                />
                <Route
                    path={routes.USERS}
                    Component={Users}
                />
                <Route
                    path={routes.NOTFOUND}
                    Component={NotFound}
                />
            </Routes>
        </div>
    );
}

export default App;
