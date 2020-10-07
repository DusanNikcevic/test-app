import { Route, HashRouter as Router } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import React from "react";

function App() {
    return (
        <Router>
            <main
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
            </main>
        </Router>
    );
}

export default App;
