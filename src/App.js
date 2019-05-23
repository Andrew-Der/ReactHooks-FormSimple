import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from "react-bootstrap"
import FormSimple from "./components/FormSimple"
import TabBar from "./components/TabBar"
import { Tab } from "react-bootstrap"


function App() {
  return (
    <div className="App">

      <header className="App-header">
        <Container>
          <Row>
            <Col>
              <FormSimple>
                <TabBar selected="Sign Up">
                  <Tab title="Login"/>
                  <Tab title="Sign Up"/>
                </TabBar>
              </FormSimple>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
