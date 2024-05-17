import { Navbar, Container, Col, Image, Row, Nav } from 'react-bootstrap';

function TelaHome() {
    return (
        <div id="welcome">
            <Container fluid className='vh-100 d-flex align-items-center text-white' >
                <Row className='d-flex align-items-center justify-content-around'>
                    <Col className='d-flex align-items-center justify-content-center' xs={6} md={7}>
                        <h1 className='text-center'>
                            Olá! Me chamo Danilo Valério.<br />Sou estudante de Ciência da Computação.
                        </h1>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-center" xs={6} md={4}>
                        <Image src="src/profile-photo.jpeg" roundedCircle className="profile-photo w-50 border" />
                    </Col>
                </Row>
            </Container>
        </div>);
}

export default TelaHome;