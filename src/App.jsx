import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar, Container, Col, Image, Row, Nav } from 'react-bootstrap';
import BarraNavegacao from './Components/BarraNavegacao';
import TelaHome from './Components/TelaHome';
import TelaSobre from './Components/TelaSobre';
import TelaProjetos from './Components/TelaProjetos';
import TelaContato from './Components/TelaContato';

function App() {

  return (
    <div>
      <BarraNavegacao />

      <main style={{ color: '#FFFFFF', backgroundColor: '#01011B' }}>

        <TelaHome />
        <TelaSobre />
        <TelaProjetos />
        <TelaContato />

      </main>

      <footer className="text-center py-3 m-1">
        <p class="mb-0">
          This is a real portfolio. All the projects and contact details given are real.
        </p>
        <p class="mb-0">
          &copy; Created by
          <a id="profile-link" href="https://www.linkedin.com/in/danilo-val%C3%A9rio/" target="_blank">Danilo Valério</a>
        </p>
      </footer>

    </div>
  )
}

export default App
