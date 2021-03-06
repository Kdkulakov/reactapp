import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <SayFullName name="Kirill" surname="Kulakov" link="/" />
        <SayFullName name="Vasia" surname="Sergeev" link="/" />
        <SayFullName name="Sergey" surname="Ivanov" link="/" />
        </div>
    );
  }
}
function Hello() {
  let phrase = "World"
  return (
    <h1> Hello {phrase}! </h1>
    )
}
function SayFullName (props) {
  return (
    <div>
      <h1>Мое имя {props.name}, фамилия - {props.surname}</h1>
      <a href="{props.link}">Ссылка</a>
    </div>
    )
}


export default App;
