import { connect } from "react-redux";
import React, { PureComponent } from "react";

import {
  Wrapper,
  VisibleContainer,
  DropdownArrow,
  InputField,
  Dropdown,
  Option
} from "./styles";

class DropdownField extends PureComponent {
  state = {
    value: this.props.placeholder,
    open: false
  };

  handleChange = e => {
    this.setState({
      value: e.target.innerHTML,
      open: false
    });
  };

  toggleDropdown = () => {
    this.setState({
      open: !this.state.open
    });
  };

  optionCreated = () => {
    const { options } = this.props;
    return options.map((option, index) => {
      return (
        <Option key={index}>
          <span>
            <div onClick={this.handleChange}>{option}</div>
          </span>
        </Option>
      );
    });
  };

  render() {
    const { className } = this.props;
    const options = this.optionCreated();
    return (
      <Wrapper className={className}>
        <VisibleContainer>
          <InputField>
            <span>{this.state.value}</span>
          </InputField>
          <DropdownArrow onClick={this.toggleDropdown} open={this.state.open}/>
        </VisibleContainer>
        <Dropdown open={this.state.open}>{options}</Dropdown>
      </Wrapper>
    );
  }
}

export default connect()(DropdownField);
