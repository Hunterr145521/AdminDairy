import React from 'react';
import './App.css';
import Navbar from "./Components/Static/Navbar";
import { BrowserRouter, Route } from 'react-router-dom';
import Home from "./Components/Dynamic/Home";
import ProductList from "./Components/Dynamic/ProductList";
import AddProduct from "./Components/Dynamic/AddProduct";
import ProductDetail from "./Components/Dynamic/ProductDetails";
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <BrowserRouter>
          <Navbar />
          <Route exact path="/" component={Home} />
            <Route path="/List" component={ProductList} />
            <Route path="/Add" component={AddProduct} />
            <Route path="/Product/:id" component={ProductDetail} />
          </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
