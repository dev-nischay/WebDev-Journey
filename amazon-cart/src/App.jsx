import "./App.css";
import Layout from "./components/ui/Layout.jsx";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Wishlist from "./pages/Wishlist";
import ErrorPage from "./pages/Error.jsx";
import Navbar from "./components/ui/Navbar.jsx";
import AmazonCart from "./pages/AmazonCart.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
        <Route index element={<Wishlist/>}/>
        <Route path="/cart" element={<AmazonCart/>}/>
        <Route path="*" element={<ErrorPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const Home = () => {
  return <Layout>
    <Navbar/>
      <Outlet/>
  </Layout>
}
export default App;
