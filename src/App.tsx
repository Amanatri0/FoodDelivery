import Home from "./pages/Home/home";
import { Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu/Fish/fish";
import Cart from "./pages/Cart/cart";
import Fishmenu from "./pages/Menu/Fish/fishMenu";
import Chickenmenu from "./pages/Menu/Chicken/chickenMenu";
import Muttonmenu from "./pages/Menu/Mutton/muttonMenu";
import SeafoodMenu from "./pages/Menu/Seafood/seafoodMenu";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/fishMenu" element={<Fishmenu />} />
      <Route path="/chickenMenu" element={<Chickenmenu />} />
      <Route path="/muttonMenu" element={<Muttonmenu />} />
      <Route path="/seafoodMenu" element={<SeafoodMenu />} />
    </Routes>
  );
}

export default App;
