import { Route, Routes } from "react-router-dom";
// pages
import RegisterPage from "./pages/RegisterPage";
import ListingPage from "./pages/List";
import ViewOrder from "./pages/ViewOrder";
import ViewOrderDetail from "./pages/ViewOrderDetail";

// components 
import MyNavbar from "./components/Navbar";


// css 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; 
import LoginPage from "./pages/LoginPage";
import Homepage from "./pages/Home";
import Details from "./context/Details";
import  "./App.css"

function App() { 



  return <div className="App" >
  <MyNavbar />
<Routes>
  <Route path="/"  element={<Homepage/>} />
  <Route path="/about"  element={<h1>About</h1>} />
  <Route path="/Login"  element={<LoginPage/>} />
  <Route path="/register"  element={<RegisterPage/>} />
  <Route path="/book/list"  element={<ListingPage/>} />
  <Route path="/book/view/:bookId"  element={<Details/>} />
  <Route path="/book/orders"  element={<ViewOrder/>} />
  <Route path="/books/orders/:bookId"  element={<ViewOrderDetail/>} />
</Routes>


  </div>;
}

export default App;
