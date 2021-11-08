import React, {useState} from 'react';
import SortComponent from "../../components/sort-component/sort-component";
import CardItemComponent from "../../components/card-item-component/CardItem-component";

const GoodsComponent = () => {
    const itemsList = [
        {id: 1, name: "Apple granny smith organic", imgurl: "/imgs/fruits/74071-done_medium.jpg", price: 20},
        {id: 2, name: "Apple pink lady organic", imgurl: "/imgs/fruits/74032-done_medium.jpg", price: 22},
        {id: 3, name: "Baby capsicums organic mixed colour", imgurl: "/imgs/fruits/71333-done_medium.jpg", price: 30},
        {id: 4, name: "Banana organic", imgurl: "/imgs/fruits/74211-done_medium.jpg", price: 35},
        {id: 5, name: "Blueberries organic", imgurl: "/imgs/fruits/74232-blueberries-organic-punnet-done_medium.jpg", price: 155},
        {id: 6, name: "Avocado organic each", imgurl: "/imgs/fruits/74150-done_medium.jpg", price: 60},
    ];

    const LOCALSTORE = "LOCAL_STORE";
    const [itemsToSell, setItemsToSell] = useState(itemsList);
    const [totalItems, setTotalItems] = useState([]);

    const getLocalStore = () => {
        if (totalItems && totalItems.length > 0) {
            return;
        }
        let cardsLocal = window.localStorage.getItem(LOCALSTORE);
        cardsLocal = cardsLocal ? JSON.parse(cardsLocal) : cardsLocal;
        if(cardsLocal && Array.isArray(cardsLocal) && cardsLocal.length > 0) {
            setTotalItems([...cardsLocal]);
        }
    };

    getLocalStore();

    const addItem = (cardItem) => {
        setTotalItems([...totalItems, cardItem]);
        window.localStorage.setItem(LOCALSTORE, JSON.stringify(totalItems));
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
        window.localStorage.setItem(LOCALSTORE, JSON.stringify(totalItems));
    };

    const setSortTotalItems = (cards) => {
        setItemsToSell(cards);
    }

    return (
        <section className="mt-3 container">

            <div className="row my-5">
                <div className="col-12">
                    <h1 className="text-end">Всього в корзині вибрано {totalItems.length} товарів ціною {totalItems
                        .reduce((accumulator, item) => {
                            return accumulator += item.price;
                        }, 0)} грн.</h1>
                </div>
            </div>

            <SortComponent itemsList={itemsList} totalItems={totalItems} setSortTotalItems={setSortTotalItems}/>

            <div className="row">
                {itemsToSell.map(item => {
                    return (
                        <CardItemComponent key={item.id} card={item} addItem={addItem} removeItem={removeItem}
                                           totalItems={totalItems.filter(itemFilter => itemFilter.id === item.id)} />
                    );
                })}
            </div>
        </section>
    );
};

export default GoodsComponent;
