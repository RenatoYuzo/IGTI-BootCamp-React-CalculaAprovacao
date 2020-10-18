import React, { Component, Fragment } from 'react';
import './App.css';
import CalculaAprovacao from './components/CalculaAprovacao';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      mod1: 0,
      mod2: 0,
      mod3: 0,
      mod4: 0,
      mod5: 0,
      aprovado: false,
    };
  }

  handleValue1 = (newValue) => {
    this.setState({ mod1: newValue });
    // this.setState({ aprovado: this.calculaAprovacao });
  };
  handleValue2 = (newValue) => {
    this.setState({ mod2: newValue });
    // this.setState({ aprovado: this.calculaAprovacao });
  };
  handleValue3 = (newValue) => {
    this.setState({ mod3: newValue });
    // this.setState({ aprovado: this.calculaAprovacao });
  };
  handleValue4 = (newValue) => {
    this.setState({ mod4: newValue });
    // this.setState({ aprovado: this.calculaAprovacao });
  };
  handleValue5 = (newValue) => {
    this.setState({ mod5: newValue });
    // this.setState({ aprovado: this.calculaAprovacao });
  };

  calculaAprovacao = () => {
    const { mod1, mod2, mod3, mod4, mod5 } = this.state;
    if (mod1 >= 60 && mod2 >= 60 && mod3 >= 60 && mod4 >= 60 && mod5 >= 60) {
      this.setState({ aprovado: true });
      console.log('true');
    } else {
      this.setState({ aprovado: false });
      console.log('false');
    }
  };

  render() {
    return (
      <Fragment>
        <div className="container">
          <CalculaAprovacao title="Módulo 1" onValue={this.handleValue1} />
          <CalculaAprovacao title="Módulo 2" onValue={this.handleValue2} />
          <CalculaAprovacao title="Módulo 3" onValue={this.handleValue3} />
          <CalculaAprovacao title="Módulo 4" onValue={this.handleValue4} />
          <CalculaAprovacao title="Módulo 5" onValue={this.handleValue5} />
        </div>
        <p>{this.state.mod1}</p>
        <p>{this.state.mod2}</p>
        <p>{this.state.mod3}</p>
        <p>{this.state.mod4}</p>
        <p>{this.state.mod5}</p>
        <button onClick={this.calculaAprovacao}>Hit Me</button>
        <p>{this.state.aprovado}</p>
      </Fragment>
    );
  }
}
