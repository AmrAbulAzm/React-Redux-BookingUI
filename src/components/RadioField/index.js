import { connect } from "react-redux";
import React, { PureComponent } from "react";

import { Wrapper, Radio } from "./styles";

class RadioField extends PureComponent {
  state = {
    selected: null
  };

  handleSelection = e => {
    this.setState({
      selected: e.target.value
    });
  };

  render() {
    const { name, optionOne, optionTwo, mandatory } = this.props;
    return (
      <Wrapper>
        <span>{name}</span>
        {mandatory === true && <span>*</span>}
        <br />
        <Radio
          type="radio"
          value={optionOne}
          onChange={this.handleSelection}
          checked={this.state.selected === optionOne}
        />
        <span>{optionOne}</span>

        <Radio
          type="radio"
          value={optionTwo}
          onChange={this.handleSelection}
          checked={this.state.selected === optionTwo}
        />
        <span>{optionTwo}</span>
      </Wrapper>
    );
  }
}

export default connect()(RadioField);
