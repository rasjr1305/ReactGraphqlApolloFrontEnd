import "./App.css";
import CarouselHeader from "./components/CarouselHeader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductsPage from "./pages/ProductsPage";
import ProductAddPage from "./pages/ProductAddPage";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <CarouselHeader />
      <Switch>
        <Route strict exact path="/" component={ProductsPage} />
        <Route strict exact path="/add" component={ProductAddPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
