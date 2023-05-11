import "./App.css";
import Categories from "./components/Categories";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <Router>
            <Routes>
              <Route exact path="/" element={<Categories />} />
              <Route exact path="/product/:id/parcat/:parcat/subcat/:subcat" element={<ProductList />} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
