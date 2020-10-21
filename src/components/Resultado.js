import React, { Component } from 'react';

export default class Resultado extends Component {
  render() {
    const {
      soma,
      media,
      aprovado,
      aprovadoPelaMedia,
      aprovadoPeloPercentualTotal,
    } = this.props;

    return (
      <div className="card grey lighten-4">
        <div className="card-content">
          <span className="card-title">
            {aprovado && (
              <div>
                <i className="material-icons icon-size40 aprovado">check</i>
                <span className="fs60">Aprovado</span>
              </div>
            )}
            {!aprovado && (
              <div>
                <i className="material-icons icon-size40 reprovado">clear</i>
                <span className="fs60">Reprovado</span>
              </div>
            )}
          </span>
          <p>Nota total: {soma}</p>
          <p>Percentual total: {media}</p>
          <p>
            Aprovação pela média (60%)?{' '}
            <span className={aprovadoPelaMedia ? 'aprovado' : 'reprovado'}>
              {aprovadoPelaMedia ? 'Sim' : 'Não'}
            </span>
          </p>
          <p>
            Aprovação pelo percentual total (70%)?
            <span
              className={aprovadoPeloPercentualTotal ? 'aprovado' : 'reprovado'}
            >
              {aprovadoPeloPercentualTotal ? 'Sim' : 'Não'}
            </span>
          </p>
        </div>
      </div>
    );
  }
}
