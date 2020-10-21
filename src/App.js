import React, { Component, Fragment } from 'react';
import './App.css';
import CalculaAprovacao from './components/CalculaAprovacao';
import Resultado from './components/Resultado';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      soma: 500,
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
      soma,
      media,
      aprovado,
      aprovadoPelaMedia,
      aprovadoPeloPercentualTotal,
    });
  };

  render() {
    const {
      soma,
      media,
      aprovado,
      aprovadoPelaMedia,
      aprovadoPeloPercentualTotal,
    } = this.state;

    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col s12	m12	l6	xl6">
              <div className="card grey lighten-4">
                <div className="card-content">
                  <CalculaAprovacao
                    title="Módulo 01 - Fundamentos (0 - 100)"
                    onValue={this.handleValue1}
                  />
                  <CalculaAprovacao
                    title="Módulo 02 - Angular (0 - 100)"
                    onValue={this.handleValue2}
                  />
                  <CalculaAprovacao
                    title="Módulo 03 - React (0 - 100)"
                    onValue={this.handleValue3}
                  />
                  <CalculaAprovacao
                    title="Módulo 04 - Vue (0 - 100)"
                    onValue={this.handleValue4}
                  />
                  <CalculaAprovacao
                    title="Módulo 05 - Desafio Final (0 - 100)"
                    onValue={this.handleValue5}
                  />
                </div>
                <div className="card-action">
                  <button
                    onClick={this.calculaAprovacao}
                    className="btn waves-effect waves-light"
                  >
                    Calcular
                  </button>
                </div>
              </div>
            </div>

            <div className="col s12	m12	l6	xl6">
              <Resultado
                soma={soma}
                media={media}
                aprovado={aprovado}
                aprovadoPelaMedia={aprovadoPelaMedia}
                aprovadoPeloPercentualTotal={aprovadoPeloPercentualTotal}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
