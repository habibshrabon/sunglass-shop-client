import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import ProductDetails from "./ProductDetails/ProductDetails";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import NotFound from "./NotFound/NotFound";
import Explore from "./Pages/Explore/Explore/Explore";
import Sidebar from "./Pages/Sidebar/Sidebar";
import AddProduct from "./Pages/Dashboard/AddProduct/AddProduct";
import ManageProduct from "./Pages/Dashboard/ManageProduct/ManageProduct";
import ManageAllOrders from "./Pages/Dashboard/ManageAllOrders/ManageAllOrders";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders";
import Payment from "./Pages/Dashboard/Payment/Payment";
import Reviews from "./Pages/Dashboard/Reviews/Reviews";

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
            <Route path="/explore">
              <Explore />
            </Route>
            <Route path="/addProduct">
              <AddProduct />
            </Route>
            <Route path="/manageProduct">
              <ManageProduct />
            </Route>
            <Route path="/manageOrder">
              <ManageAllOrders />
            </Route>
            <Route path="/makeAdmin">
              <MakeAdmin />
            </Route>
            <Route path="/myOrders">
              <MyOrders />
            </Route>
            <Route path="/payment">
              <Payment />
            </Route>
            <Route path="/review">
              <Reviews />
            </Route>
            <Route path="/productDetails/:productId">
              <ProductDetails />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/dashboard">
              <Sidebar />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route exact path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
