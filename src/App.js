import React from "react";
import BarChart from "./barchart/BarChart";
import ExampleSphere from "./spheres/Scene";
import Tree from "./tree/Tree";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TreeApp from "./tree/index";


function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <p>Redux Animation</p>
                </header>
                <button>
                    <a className="barchart" href="/barchart" rel="noopener noreferrer"          >
                        Bar Chart
                    </a>
                </button>
                <button>
                    <a className="spheres" href="/spheres" rel="noopener noreferrer"          >
                        Sphere Animation
                    </a>
                </button>
                <button>
                    <a className="tree" href="/tree" rel="noopener noreferrer"          >
                        Tree Animation
                    </a>
                </button>
                <Switch>
                    <Route exact path="/barchart">
                        <BarChart />
                    </Route>
                    <Route exact path="/spheres">
                        <ExampleSphere />
                    </Route>
                    <Route exact path="/tree">
                        <Tree />
                    </Route>
                </Switch>
            </div>
        </Router>
        )
    }

    export default App