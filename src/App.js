import './App.css';
import MenuComponent from "./components/menu-component/Menu-component";
import { Switch, Route } from "react-router-dom";
import GoodsComponent from "./pages/goods-component/goods-component";
import BasketComponent from "./pages/basket-component/basket-component";
import ContactComponent from "./pages/contact-component/contact-component";

function App() {


    return (
        <>
            <MenuComponent/>
            <Switch>
                <Route path="/basket" component={BasketComponent}/>
                <Route path="/contact" component={ContactComponent}/>
                <Route path="/" component={GoodsComponent}/>
            </Switch>
        </>
    );
}

export default App;
