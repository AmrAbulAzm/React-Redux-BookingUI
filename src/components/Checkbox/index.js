import { connect } from "react-redux";
import React, { PureComponent } from "react";

import { Wrapper, Title } from "./styles";
import { bindActionCreators } from "redux";
import { toggleApplyBooking } from "../../containers/Main/reducer";

class Checkbox extends PureComponent {

  toggleState = () => {
      this.props.actions.toggleApplyBooking()
  };

  render() {
    const { name } = this.props;
    return (
      <Wrapper>
        <input
          type="checkbox"
          checked={this.props.applyBooking}
          onChange={this.toggleState}
        />
        <Title>
          <span>{name}</span>
        </Title>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  applyBooking: state.mainReducer.applyBooking
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      toggleApplyBooking
    },
    dispatch
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkbox);
