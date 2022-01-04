import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import ProductDetails from "./ProductDetails/ProductDetails";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import Contact from "./Pages/Home/Contact/Contact";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/explore"></Route>
            <PrivateRoute path="/addProduct"></PrivateRoute>
            <PrivateRoute path="/manageProduct"></PrivateRoute>
            <PrivateRoute path="/manageOrder"></PrivateRoute>
            <PrivateRoute path="/makeAdmin"></PrivateRoute>
            <PrivateRoute path="/myOrders"></PrivateRoute>
            <PrivateRoute path="/payment"></PrivateRoute>
            <PrivateRoute path="/review"></PrivateRoute>
            <PrivateRoute path="/productDetails/:productId">
              <ProductDetails />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <PrivateRoute path="/dashboard"></PrivateRoute>
            <Route path="/register">
              <Register />
            </Route>
            <Route exact path="*"></Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
