import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import MainLayout from "./layouts/MainLayout";
import Categories from "./pages/Categories";
import Suppliers from "./pages/Suppliers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={MainLayout}>
          <Route path="/" Component={Products} />
          <Route path="categories" Component={Categories} />
          <Route path="suppliers" Component={Suppliers} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
