import Card from "react-bootstrap/Card";

function Cards(props) {
  const { img, name } = props;
  return (
    <Card className="rounded-2 m-auto player-card ebru-card">
      <Card.Img variant="top" src={img} className="images" />
      <Card.Body>
        <Card.Title className="text-center text-primary">{name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default Cards;
