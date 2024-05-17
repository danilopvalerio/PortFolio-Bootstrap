import { Navbar, Container, Col, Image, Row, Nav } from 'react-bootstrap';

function TelaContato() {
    return (
        <div id="contact">
            <Container fluid className="vh-100 d-flex justify-content-center align-items-center p-5">
                <div className="rounded p-5 mb-5" style={{ margin: '20px', padding: '20px' }}>
                    <h1 className="text-center text-white m-3 p-3">Entre em contato!</h1>
                    <ul className="list-unstyled text-center " style={{ color: "#01011B" }}>
                        <li className="bg-white rounded-pill mb-3 p-4"><a href="https://wa.me/5581992361167" target="_blank" className="text-decoration-none text-black">WhatsApp</a></li>
                        <li className="bg-white rounded-pill mb-3 p-4">Telefone: (81) 992361167</li>
                        <li className="bg-white rounded-pill mb-3 p-4"><a href="https://www.linkedin.com/in/danilo-val%C3%A9rio/" target="_blank" className="text-decoration-none text-black">Linkedin</a></li>
                    </ul>
                </div>
            </Container>
        </div>
    );
}

export default TelaContato;
