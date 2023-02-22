import Card from "react-bootstrap/Card";
import { useState } from "react";

function Cards(props) {
  const { img, name, desc } = props;
  const [showImage, setShowImage] = useState(true);
  const handleClick = () => setShowImage(!showImage);
  return (
    <Card
      onClick={handleClick}
      className="rounded-2 m-auto player-card ebru-card"
    >
      {showImage ? (
        <Card.Img variant="top" src={img} className="images" />
      ) : (
        <ul className="m-auto list">
          <li className="h-5 mt-3 list-unstyled ">{desc}</li>
        </ul>
      )}

      <Card.Footer>
        <Card.Title className="text-center text-primary">{name}</Card.Title>
      </Card.Footer>
    </Card>
  );
}

export default Cards;
