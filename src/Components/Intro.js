import { Col, Container, Row, Button } from "react-bootstrap"

const intro = () => {
    return (
        <div className="intro">
        <Container className="text-black text-center d-flex justify-content-center align-tems-center">
          <Row>
            <Col>
            <div className="judul">WELCOME</div>
            <div className="judul">TRAVELER</div>
            </Col>
          </Row>
        </Container>
      </div>  
    )
}

export default intro