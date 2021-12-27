import "./App.css";
import { Switch } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
import EachItemDetials from "./components/AddItemDashBoard/EachItemDetials";
import AddItemDashBoard from "./components/AddItemDashBoard/AddItemDashBoard";
import "./App.css";
import { AccountBox } from "./components/accountBox";
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  return (
    <>
      <div className="App">
        <Router>
          <Switch>
            <Route>
              <ProtectedRoute
                exact
                path="/dashboard"
                component={AddItemDashBoard}
              />
              <Route exact path="/" component={AccountBox} />
              <Route exact path="/item-details" component={EachItemDetials} />
              {/* <Route path="/dashboard" element={<AddItemDashBoard />}></Route> */}
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default App;
