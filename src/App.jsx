import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage';
import Registerpage from './pages/Registerpage';
import Loginpage from './pages/Loginpage';
import Menu from './components/Menu';
import Threadpage from './pages/Threadpage';
import SpecificThreadpage from './pages/SpecificThreadpage';
import Profilepage from './pages/Profilepage';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Row>
            <Col style={{ backgroundColor: 'rgb(238,221,207)' }} md={2} sm={2}>
              {/*<Menu />*/}
               <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/threads" element={<Menu />} />
                <Route path="/threads/:id" element={<Menu />} />
                <Route path="/account" element={<Menu />} />
              </Routes>
            </Col>
            <Col md={10} sm={10}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/threads" element={<Threadpage />} />
                <Route path="/threads/:id" element={<SpecificThreadpage />} />
                <Route path="/account" element={<Profilepage />} />
              </Routes>
            </Col>
            <Col md={12} >
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