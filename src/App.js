import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import NotFound from "./components/notFound/NotFound";
import Product from "./pages/product/Product";
import Register from "./pages/register/Register";
import ProductDetail from "./pages/productDetail/ProductDetail";

function App() {
  return (
    <div>
          <Router>
                
                <Routes>
                    <Route index element={<Home />}></Route>
                    <Route path="/product" element={<Product />}></Route>
                    <Route path="/detail/:id" element={<ProductDetail />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/*" element={<NotFound />}></Route>
                </Routes>
            </Router>
    </div>
  );
}

export default App;
