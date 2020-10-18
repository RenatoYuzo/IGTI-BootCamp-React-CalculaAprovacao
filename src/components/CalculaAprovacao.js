import React, { Component } from 'react';

export default class CalculaAprovacao extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: 100,
      checkValue: 'aprovado',
    };
  }

  handleChange(event) {
    const checkValue = event.target.value >= 60 ? 'aprovado' : 'reprovado';
    this.setState({
      value: event.target.value,
      checkValue: checkValue,
    });
    this.props.onValue(event.target.value);
  }

  render() {
    const { title } = this.props;
    const { value, checkValue } = this.state;

    return (
      <>
        <div className="input-field">
          <input
            id={'modX' + title}
            type="number"
            className={'validate ' + checkValue}
            onChange={this.handleChange}
            min="0"
            max="100"
            value={value}
          />
          <label htmlFor={'modX' + title}>{title}</label>
        </div>
      </>
    );
  }
}
