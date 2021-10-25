import './App.css';
import MenuComponent from "./components/menu-component/Menu-component";
import { Switch, Route } from "react-router-dom";
import GoodsComponent from "./goods-component/goods-component";
import BasketComponent from "./components/basket-component/basket-component";
import ContactComponent from "./contact-component/contact-component";

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
