import "./App.css";
import Layout from "./components/ui/Layout.jsx";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Wishlist from "./pages/Wishlist";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
        <Route index element={<Wishlist/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const Home = () => {
  return <Layout>
      <Outlet />
  </Layout>
}
export default App;
