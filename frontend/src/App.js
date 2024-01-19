import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={MainLayout}>
          <Route path="/" Component={Products} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
