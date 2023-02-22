import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cards from "./Cards";
import { data } from "../data";

const CardContainer = () => {
  return (
    <Container className="card-container rounded-4 my-4 p-3">
      <Row className="g-3 justify-content-center">
        {data.map((item) => {
          return (
            <Col md={6} lg={4} xl={3}>
              <Cards {...item} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CardContainer;
