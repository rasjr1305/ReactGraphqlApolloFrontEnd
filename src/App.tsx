import "./App.css";
import CarouselHeader from "./components/CarouselHeader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductsPage from "./pages/ProductsPage";
import ProductAddPage from "./pages/ProductAddPage";
import { Route, Switch } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import ProductEditPage from "./pages/ProductEditPage";
import ProductDeletePage from "./pages/ProductDeletePage";

function App() {
  return (
    <div className="App">
      <Header />
      <CarouselHeader />
      <Switch>
        <Route strict exact path="/" component={ProductsPage} />
        <Route strict exact path="/add" component={ProductAddPage} />
        <Route strict exact path="/:id" component={ProductPage} />
        <Route strict exact path="/edit/:id" component={ProductEditPage} />
        <Route strict exact path="/delete/:id" component={ProductDeletePage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
