import React from 'react';
import Card from 'react-bootstrap/Card';
import "../../style.scss";

function CardComponent({ title, text, icon }) {
    return (
        <div className="bg-light text-center position-relative mt-5 mb-5">
            <Card.Body>
                <div className="position-absolute top-5 start-50 translate-middle bg-primary text-white d-inline-block p-3 rounded">{icon}</div>
                <Card.Title className='fs-3 fw-bold pt-5'>{title}</Card.Title>
                <Card.Text className='fs-5 pt-2'>{text}</Card.Text>
            </Card.Body>
        </div>

    );
}

export default CardComponent;
