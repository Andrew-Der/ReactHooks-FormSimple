import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from "react-bootstrap"
import FormSimple from "./components/FormSimple"
import TabBar from "./components/TabBar"
import { EmailSimple, EmailForced } from "./components/EmailField"
import { Tab } from "react-bootstrap"

import { useState, useEffect } from 'react'

import { DateField, Month } from './components/DateField'

function App() {

  const [email, setEmail] = useState("test")
  useEffect( ()=> {
    console.log(email)
  }, [email])

  const [date, setDate] = useState(new Date())
  
  useEffect(() => {
    console.log("AYY " + date)
  }, [date])


  return (
    <div className="App">

      <header className="App-header">
        <Container>
          <Row>
            <Col>
              <FormSimple>
                <TabBar selected={2}>
                  <Tab title="Login" eventKey={1}>
                    <p>I LOVE MY LIFE</p>
                  </Tab>
                  <Tab title="Sign Up" eventKey={2}>
                    <EmailSimple onChange={setEmail} placeHolder="LadyGaga@apple.com"/>
                    <EmailForced onChange={setEmail} options={["apple.com", "gmail.com", "yahoo.com"]}/>
                    <DateField date={date} onChange={setDate}>
                      <Month/>
                    </DateField>
                    {date.toDateString()}
                  </Tab>
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
