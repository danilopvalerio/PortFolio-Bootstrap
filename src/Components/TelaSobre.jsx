import { Navbar, Container, Col, Image, Row, Nav } from 'react-bootstrap';

function TelaSobre() {
    return (
        <div className="container px-4 py-5" id="about">
            <h2 className="pb-2 pb-5 text-center">Me encontro no quarto período de computação e além de programar também atuo como designer gráfico.</h2>
            <div className="row pt-5 mt-5 g-4 py-0 row-cols-1 justify-content-center">
                <div className="feature col">
                    <h4 className="pb-2 mt-5 text-center">Tecnologias e linguagens que utilizo na computação:</h4>
                    <div className="feature col">
                        <ul className="text-center list-unstyled">
                            <li>Java</li>
                            <li>Python</li>
                            <li>Bootstrap</li>
                            <li>Html - Css</li>
                            <li>Javascript / React </li>
                        </ul>
                    </div>
                </div>
                <div className="feature col">
                    <h4 className="pb-2 mt-5 text-center">Tecnologias que uso como designer gráfico:</h4>
                    <div className="feature col">
                        <ul className="text-center list-unstyled">
                            <li>Corel Draw</li>
                            <li>IAs Variadas</li>
                            <li>Photoshop CC</li>
                            <li className='mb-5'>Photoshop CS6</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TelaSobre;
