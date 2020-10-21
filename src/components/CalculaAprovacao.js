import React, { Component } from 'react';
import { Slider } from 'primereact/slider';

export default class CalculaAprovacao extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: 100,
      checkValue: 'aprovado',
    };
  }

  handleChange(value) {
    const checkValue = value >= 60 ? 'aprovado' : 'reprovado';
    this.setState({
      value: value,
      checkValue: checkValue,
    });
    this.props.onValue(value);
  }

  render() {
    const { title } = this.props;
    const { value, checkValue } = this.state;

    return (
      <>
        <span className={checkValue}>
          {title}
          {': ' + value}
        </span>
        <Slider
          id={'modX' + title}
          className={checkValue + ' margin-b-25'}
          value={value}
          onChange={(e) => this.handleChange(e.value)}
          min={0}
          max={100}
        />
      </>
    );
  }
}
