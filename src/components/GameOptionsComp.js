import { Row, Col, Button } from "react-bootstrap";

const GameOptionsComp = ({ disks, setDisks }) => {
  return (
    <Row>
      <Col>
        <span>Discos: {disks}</span>
        <Button
          variant="outline-secondary"
          onClick={()=>{setDisks(disks+=1)}}
        >
          +
        </Button>
        <Button
          variant="outline-secondary"
          onClick={()=>{if (disks >= 2){setDisks(disks-=1)}}}
        >
          -
        </Button>
      </Col>
      <Col>
        <Button variant="outline-secondary">
          Reiniciar
        </Button>
        <Button variant="outline-secondary">
          Resolver
        </Button>
      </Col>
    </Row>
  );
};

export default GameOptionsComp;
