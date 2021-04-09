import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import * as actions from '../actions';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: '',
      image: '',
      description: ''
    };
  }

  componentWillMount() {
    const { style, image, description } = _.sample(this.props.style);
    this.setState({ style, image, description });
  }

  hideModal() {
    this.props.hideModal();
  }

  handleInputChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email, style, description } = this.state;
    this.props.sendEmail(email, style, description);
  }

  render() {
    const { chosenOptions } = this.props;
    const numChosen = _.size(chosenOptions);

    if (numChosen === 5 && this.props.displayModal) {
      return (
        <div className="result-container" ref="results">
          <div className="result-container-item">
            <button
              onClick={this.hideModal.bind(this)}
              type="button"
              className="close"
              aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <div className="selected-style">
              <h1>{`You are ${this.state.style}!`}</h1>
              <p>{this.state.description}</p>
              <img className="img-rounded" src={`/assets/images/${this.state.image}`}/>
            </div>

          </div>
        </div>
      );
    }
    return null;
  }
}

function mapStateToProps(state) {
  return {
    chosenOptions: state.chosenOptions,
    style: state.style,
    displayModal: state.displayModal
   }
}

export default connect(mapStateToProps, actions)(Result);
