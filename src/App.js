import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Home from "./components/Home";
import News from "./components/News";
import Subscriptions from "./components/Subscription";
import Header from "./components/Header";
const useStyles = makeStyles({});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Router>
        <Header />
        <Switch>
          <Route exact from="/" render={(props) => <Home {...props} />} />

          <Route exact path="/news" render={(props) => <News {...props} />} />
          <Route
            exact
            path="/subscriptions"
            render={(props) => <Subscriptions {...props} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
