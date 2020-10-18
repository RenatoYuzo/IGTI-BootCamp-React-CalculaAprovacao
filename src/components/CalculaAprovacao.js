import React, { Component } from 'react';

export default class CalculaAprovacao extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
    this.props.onValue(event.target.value);
  }

  render() {
    const { title } = this.props;

    return (
      <>
        <div className="row">
          <div className="input-field col s12">
            <input
              id={'modX' + title}
              type="number"
              className="validate"
              onChange={this.handleChange}
            />
            <label htmlFor={'modX' + title}>{title}</label>
          </div>
        </div>
      </>
    );
  }
}
