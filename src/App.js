import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

import Cards from './components/Card.component';
import Signup from './components/pages/Signup_patient';
import Signup_doctor from './components/pages/Signup_doctor';
import Abc from './Abc';

function App() {
  return (
    <Router>
      <div className="App">

        <Container>        
          <Row>
            <Col >
              <div className="wrapper">
                <Routes>
                  <Route exact path="/" element={<Abc/>} />
                  <Route path="/demo" element={<Cards/>} />
                  <Route path="/abc" element={<Abc/>} />
                  <Route path="/patient/signup" element={<Signup/>} />
                  <Route path="/doctor/signup_doctor" element={<Signup_doctor/>} />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>

      </div>
    </Router>
  );
}

export default App;
