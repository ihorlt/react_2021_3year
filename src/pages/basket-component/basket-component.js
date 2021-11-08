import React from 'react';

const BasketComponent = () => {
    const LOCALSTORE = "LOCAL_STORE";


    const getLocalStore = () => {
        let cardsLocal = window.localStorage.getItem(LOCALSTORE);
        cardsLocal = cardsLocal ? JSON.parse(cardsLocal) : cardsLocal;
        let cards = "Немає вибраних товарів";
        if(cardsLocal && Array.isArray(cardsLocal) && cardsLocal.length > 0) {
            cards =  cardsLocal.map(item => {
                return(
                    <div key={item.id}>
                        {item.name}
                    </div>
                );
            });
        }
        return (cards);
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-lg-6">
                    <h2>Список вибраних товарів</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-6">
                    {getLocalStore()}
                </div>
            </div>
        </div>
    );
};

export default BasketComponent;
