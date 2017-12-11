import { connect } from "react-redux";
import React, { PureComponent } from "react";

import { Wrapper, Title, Input } from "./styles";
import { bindActionCreators } from "redux";
import {
  setbookingPassangerFirstName,
  setbookingPassangerLastName
} from "../../containers/Main/reducer";

class InputField extends PureComponent {
  state = {
    value: "",
    highlight: false,
    submit: this.props.submit
  };

  componentWillReceiveProps = (nextProps) => {
      if (this.state.submit+1 === nextProps.submit) {
          if ( this.props.mandatory === true && !this.state.value ) {
            this.setState({
                highlight: true
            })
          }
      }
  }

  handleChange = e => {
    const { name, position } = this.props;
    if (name === "First Name" && position === "top") {
      this.props.actions.setbookingPassangerFirstName(e.target.value);
    } else if (name === "Last Name" && position === "top") {
      this.props.actions.setbookingPassangerLastName(e.target.value);
    }
    this.setState({
      value: e.target.value,
      highlight: false
    });
  };

  value = () => {
    if (this.props.value) {
      return this.props.value;
    } else {
      return this.state.value;
    }
  };

  render() {
    const { name, mandatory, size, disabled } = this.props;
    const actualValue = this.value();
    return (
      <Wrapper size={size}>
        <Title>
          <span>{name}</span>
          {mandatory === true && <span>*</span>}
        </Title>
        <Input
          type="text"
          value={actualValue}
          onChange={this.handleChange}
          disabled={disabled}
          highlight={this.state.highlight}
        />
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  applyBooking: state.mainReducer.applyBooking,
  submit: state.mainReducer.submit
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      setbookingPassangerFirstName,
      setbookingPassangerLastName
    },
    dispatch
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(InputField);
