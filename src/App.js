import './App.css';
import MenuComponent from "./components/menu-component/Menu-component";
import CardItemComponent from "./components/card-item-component/CardItem-component";
import { useState } from "react";
import {Button} from "react-bootstrap";

function App() {
  const itemsList = [
    {id: 1, name: "Apple granny smith organic", imgurl: "/imgs/fruits/74071-done_medium.jpg", price: 20},
    {id: 2, name: "Apple pink lady organic", imgurl: "/imgs/fruits/74032-done_medium.jpg", price: 22},
    {id: 3, name: "Baby capsicums organic mixed colour", imgurl: "/imgs/fruits/71333-done_medium.jpg", price: 30},
    {id: 4, name: "Banana organic", imgurl: "/imgs/fruits/74211-done_medium.jpg", price: 35},
    {id: 5, name: "Blueberries organic", imgurl: "/imgs/fruits/74232-blueberries-organic-punnet-done_medium.jpg", price: 155},
    {id: 6, name: "Avocado organic each", imgurl: "/imgs/fruits/74150-done_medium.jpg", price: 60},
  ];

  const [itemsToSell, setItemsToSell] = useState(itemsList);
  const [totalItems, setTotalItems] = useState([]);

    const addItem = (cardItem) => {
        setTotalItems([...totalItems, cardItem]);
    };

    const removeItem = (cardItem) => {
        let foundItemIndex;
        totalItems.forEach((item, index) => {
            if (item.id === cardItem.id) {
                foundItemIndex = index;
            }
        });
        totalItems.splice(foundItemIndex, 1);
        setTotalItems([...totalItems]);
    };

    const sortingItems = (sorting) => {
        if (sorting === "ASC") {
            itemsList.sort((a, b) => a.price - b.price);
        } else if (sorting === "DESC") {
            itemsList.sort((a, b) => b.price - a.price);
        }
        setItemsToSell([...itemsList]);
    };

    return (
        <>
            <MenuComponent/>
            <section className="mt-3 container">

                <div className="row my-5">
                    <div className="col-12">
                        <h1 className="text-end">Всього в корзині вибрано {totalItems.length} товарів ціною {totalItems
                            .reduce((accumulator, item) => {
                                return accumulator += item.price;
                            }, 0)} грн.</h1>
                    </div>
                </div>

                <div className="mb-3 row justify-content-end">
                    <div className="col-4 col-sm-3 col-lg-2 col-xl-1">
                        <div className="d-grid d-block"><Button variant={"secondary"}
                                                                onClick={e => sortingItems("clear")}>Зняти</Button></div>
                    </div>
                    <div className="col-4 col-sm-3 col-lg-2 col-xl-1">
                        <div className="d-grid d-block"><Button variant={"secondary"}
                                                                onClick={e => sortingItems("ASC")}>Від більшого</Button></div>
                    </div>
                    <div className="col-4 col-sm-3 col-lg-2 col-xl-1">
                        <div className="d-grid d-block"><Button variant={"secondary"}
                                                                onClick={e => sortingItems("DESC")}>Від меншого</Button></div>
                    </div>
                </div>

                <div className="row">
                  {itemsToSell.map(item => {
                    return (
                        <CardItemComponent key={item.id} card={item} addItem={addItem} removeItem={removeItem}
                                           totalItems={totalItems.filter(itemFilter => itemFilter.id === item.id)} />
                    );
                  })}
                </div>
            </section>
        </>
    );
}

export default App;
