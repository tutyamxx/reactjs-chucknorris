import "./styles/App.css";
import FetchNorrisJoke from "./components/FetchNorrisJoke";
import PageTitle from "./components/PageTitle";
import About from "./components/About";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="App-header">
          <Switch>
            <Route exact path="/">
              <PageTitle pageTitle="Random Chuck Norris Jokes" />
              <FetchNorrisJoke />
            </Route>

            <Route path="/about">
              <PageTitle pageTitle="About Page" />
              <About />
            </Route>
          </Switch>
        </div>

      </div>
    </Router>
  );
};

export default App;
