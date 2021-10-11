import React from 'react';
import { Button, Card } from "react-bootstrap";

const CardItemComponent = (props) => {

    const addItem = () => {
        props.addItem(props.card);
    }

    const removeItem = () => {
        props.removeItem(props.card);
    }

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
            <Card>
                <Card.Img variant="top" src={props.card.imgurl}/>
                <Card.Body>
                    <Card.Title>{props.card.name}</Card.Title>
                    <Card.Text>
                        <strong>{props.card.price} грн.</strong>
                    </Card.Text>
                    <div className="row">
                        <div className="col-4">
                            <div className="d-grid d-block">
                                <Button variant="success" onClick={addItem}>Додати</Button>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="d-grid d-block">
                                <Button variant="info"> {props.totalItems.length} шт.</Button>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="d-grid d-block">
                                <Button variant="danger" onClick={removeItem}> - </Button>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CardItemComponent;
