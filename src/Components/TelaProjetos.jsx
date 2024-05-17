import { Container, Col, Row } from 'react-bootstrap';

function TelaProjetos() {
    return (
        <div id="projects">
            <section className="projects-grid" style={{ backgroundColor: '#FFFFFF' }}>
                <header className="text-center mt-5 py-5 mb-4" style={{ color: "#01011B" }}>
                    <h1>Projetos básicos interdisciplinares feitos durante o atual período universitário:</h1>
                </header>
                <Container className="pb-5 mb-5">
                    <Row xs={1} md={2} className="g-4">
                        <Col className="d-flex justify-content-center">
                            <div className="p-4 project-tile text-center rounded" style={{ backgroundColor: '#01011B' }}>
                                <a href="https://www.linkedin.com/in/danilo-val%C3%A9rio/" target="_blank">
                                    <img src="src/Java-Logo.png" className="img-fluid" alt="Projeto Java" style={{ maxHeight: '180px' }} />
                                </a>
                                <p>Projeto de gerenciamento de avaliações em java.</p>
                            </div>
                        </Col>
                        <Col className="d-flex justify-content-center">
                            <div className="p-4 project-tile text-center rounded" style={{ backgroundColor: '#01011B' }}>
                                <a href="https://www.linkedin.com/in/danilo-val%C3%A9rio/" target="_blank">
                                    <img src="src/python-logo.png" className="img-fluid" alt="Projeto Python" style={{ maxHeight: '180px' }} />
                                </a>
                                <p>Projeto de gerenciamento de vendas em python.</p>
                            </div>
                        </Col>
                        <Col className="d-flex justify-content-center">
                            <div className="p-4 project-tile text-center rounded" style={{ backgroundColor: '#01011B' }}>
                                <a href="https://www.linkedin.com/in/danilo-val%C3%A9rio/" target="_blank">
                                    <img src="src/Java-Logo.png" className="img-fluid" alt="Projeto Java" style={{ maxHeight: '180px' }} />
                                </a>
                                <p>Projeto de gerenciamento de avaliações em java.</p>
                            </div>
                        </Col>
                        <Col className="d-flex justify-content-center">
                            <div className="p-4 project-tile text-center rounded" style={{ backgroundColor: '#01011B' }}>
                                <a href="https://www.linkedin.com/in/danilo-val%C3%A9rio/" target="_blank">
                                    <img src="src/695px-C_Programming_Language.svg.png" className="img-fluid" alt="Projeto C" style={{ maxWidth: '180px' }} />
                                </a>
                                <p>Projeto de gerenciamento de uma biblioteca em C.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default TelaProjetos;
