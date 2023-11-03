import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage';
import Registerpage from './pages/Registerpage';
import Loginpage from './pages/Loginpage';
import Menu from './components/Menu';
import Threadpage from './pages/Threadpage';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Row>
            <Col md={3} sm={3}>
              <Menu />
              {/* <Routes>
                <Route path="/" element={<Menu />} />
              </Routes> */}
            </Col>
            <Col md={9} sm={9}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/thread" element={<Threadpage />} />
              </Routes>
            </Col>
            <Col md={12} sm={12}>
              <Routes>
                <Route path="/register" element={<Registerpage />} />
                <Route path="/login" element={<Loginpage />} />

              </Routes>
            </Col>
          </Row>
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;