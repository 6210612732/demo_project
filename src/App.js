import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

// Component Page
import Cards from './components/Card.component';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup_patient';
import Signup_doctor from './components/pages/Signup_doctor';
import Home_doctor from './components/pages/Home_doctor';
import Abc from './Abc';
import Abd from './Abd';
import { useCookies,Cookies  } from 'react-cookie';

function App() {
  const cookies = new Cookies();
  const gg = cookies.get('name')
  console.log(gg + "ddd")
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
                  <Route path="/login" element={<Login/>} />
                  <Route path="/abc" element={<Abc/>} />
                  <Route path="/patient/signup" element={<Signup/>} />
                  <Route path="/doctor/signup_doctor" element={<Signup_doctor/>} />
                  <Route path="/doctor/home" element={<Home_doctor/>} />
                  <Route path="/logout" element={<Abd/>} />
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
/*

*/