import { Navbar, Container, Col, Image, Row, Nav } from 'react-bootstrap';

function BarraNavegacao() {
    return (
        <div>
            <Navbar className='fixed-top' style={{ backgroundColor: '#FFFFFF' }}>
                <Container className="d-flex justify-content-center" >
                    <Navbar.Brand href="#">
                        <img width={50} src="src/logoPreta.png" alt="Logo" />
                    </Navbar.Brand>
                    <Nav className="me-center">
                        <Nav.Link href="#welcome">Home</Nav.Link>
                        <Nav.Link href="#about">Sobre</Nav.Link>
                        <Nav.Link href="#projects">Projetos</Nav.Link>
                        <Nav.Link href="#contact">Contatos</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default BarraNavegacao;