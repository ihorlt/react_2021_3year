import React from 'react';
import { Button } from "react-bootstrap";

const SortComponent = (props) => {

    const sortingItems = (sorting) => {
        if (sorting === "ASC") {
            props.itemsList.sort((a, b) => a.price - b.price);
        } else if (sorting === "DESC") {
            props.itemsList.sort((a, b) => b.price - a.price);
        }
        props.setSortTotalItems([...props.itemsList]);
    };

    return (
        <div className="mb-3 row justify-content-end">
            <div className="col-4 col-sm-3 col-lg-2 col-xl-1">
                <div className="d-grid d-block"><Button variant={"secondary"}
                                                        onClick={e => sortingItems("clear")}>Зняти</Button></div>
            </div>
            <div className="col-4 col-sm-3 col-lg-2 col-xl-1">
                <div className="d-grid d-block"><Button variant={"secondary"}
                                                        onClick={e => sortingItems("ASC")}>Від меншого</Button></div>
            </div>
            <div className="col-4 col-sm-3 col-lg-2 col-xl-1">
                <div className="d-grid d-block"><Button variant={"secondary"}
                                                        onClick={e => sortingItems("DESC")}>Від більшого</Button></div>
            </div>
        </div>
    );
};

export default SortComponent;
