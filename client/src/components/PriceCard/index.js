import React from "react";
import Card from "react-bootstrap/Card";

function PriceCard({ rental_price }) {
  return (
    <Card className="my-3">
      <Card.Body>
        <Card.Text>
          Price: {rental_price}
          Tax: $0.00 <br />
          Total: $0.00
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PriceCard;
