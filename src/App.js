import React, { Component, Fragment } from 'react';
import './App.css';
import CalculaAprovacao from './components/CalculaAprovacao';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      mod1: 100,
      mod2: 100,
      mod3: 100,
      mod4: 100,
      mod5: 100,
      media: 100,
      aprovado: true,
      aprovadoPelaMedia: true,
      aprovadoPeloPercentualTotal: true,
    };
  }

  handleValue1 = (newValue) => {
    this.setState({ mod1: parseInt(newValue, 10) });
  };
  handleValue2 = (newValue) => {
    this.setState({ mod2: parseInt(newValue, 10) });
  };
  handleValue3 = (newValue) => {
    this.setState({ mod3: parseInt(newValue, 10) });
  };
  handleValue4 = (newValue) => {
    this.setState({ mod4: parseInt(newValue, 10) });
  };
  handleValue5 = (newValue) => {
    this.setState({ mod5: parseInt(newValue, 10) });
  };

  calculaAprovacao = () => {
    const { mod1, mod2, mod3, mod4, mod5 } = this.state;
    const soma = mod1 + mod2 + mod3 + mod4 + mod5;
    const media = soma / 5;

    console.log(soma + ' ' + media);

    let aprovado = false;
    let aprovadoPelaMedia = false;
    let aprovadoPeloPercentualTotal = false;

    this.setState({ media: media });

    if (mod1 >= 60 && mod2 >= 60 && mod3 >= 60 && mod4 >= 60 && mod5 >= 60) {
      aprovado = true;
      aprovadoPelaMedia = true;
    }
    if (media >= 70) {
      aprovado = true;
      aprovadoPeloPercentualTotal = true;
    }

    this.setState({
      aprovado,
      aprovadoPelaMedia,
      aprovadoPeloPercentualTotal,
    });
  };

  render() {
    const { aprovado, media } = this.state;

    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col s6	m4	l2	xl2">
              <CalculaAprovacao title="Módulo 1" onValue={this.handleValue1} />
            </div>
            <div className="col s6	m4	l2	xl2">
              <CalculaAprovacao title="Módulo 2" onValue={this.handleValue2} />
            </div>
            <div className="col s6	m4	l2	xl2">
              <CalculaAprovacao title="Módulo 3" onValue={this.handleValue3} />
            </div>
            <div className="col s6	m4	l2	xl2">
              <CalculaAprovacao title="Módulo 4" onValue={this.handleValue4} />
            </div>
            <div className="col s6	m4	l2	xl2">
              <CalculaAprovacao title="Módulo 5" onValue={this.handleValue5} />
            </div>
            <div className="col s6	m4	l2	xl2">
              <button
                onClick={this.calculaAprovacao}
                className="btn waves-effect waves-light"
              >
                Calcular
              </button>
            </div>
          </div>

          {aprovado && (
            <div>
              <i className="material-icons icon-size100 aprovado">check</i>
              <span className="fs90">Aprovado</span>
            </div>
          )}
          {!aprovado && (
            <div>
              <i className="material-icons icon-size100 reprovado">clear</i>
              <span className="fs90">Reprovado</span>
            </div>
          )}
          <h2>Media: {media}</h2>
        </div>
      </Fragment>
    );
  }
}
