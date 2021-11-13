import React from 'react';
import { LOCALSTORE_TOTALITEMS } from "../../models/constants";
import CardItemComponent from "../../components/card-item-component/CardItem-component";

const BasketComponent = () => {

    const getLocalStore = () => {
        let cardsLocal = window.localStorage.getItem(LOCALSTORE_TOTALITEMS);
        cardsLocal = cardsLocal ? JSON.parse(cardsLocal) : "Немає вибраних товарів";
        return (cardsLocal);
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-lg-6">
                    <h2>Список вибраних товарів</h2>
                </div>
            </div>
            <div className="row">
                {Array.isArray(getLocalStore()) && getLocalStore().map((item, index)=> {
                    return (
                        <CardItemComponent key={index} card={item}
                                           totalItems={getLocalStore().filter(itemFilter => itemFilter.id === item.id)} />
                    );
                })}
            </div>
        </div>
    );
};

export default BasketComponent;
