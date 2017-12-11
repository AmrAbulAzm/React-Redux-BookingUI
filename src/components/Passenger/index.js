import { connect } from "react-redux";
import React, { PureComponent } from "react";

import { Wrapper, Row, InputField, DropdownField } from "./styles";
import { bindActionCreators } from "redux";
import {
  setbookingPassangerFirstName,
  setbookingPassangerLastName
} from "../../containers/Main/reducer";

class Passenger extends PureComponent {
  constructPassenger = () => {
    const {
      applyBooking,
      bookingPassangerFirst,
      bookingPassangerLast,
      position
    } = this.props;
    if (applyBooking && position === "first") {
      return {
        firstName: bookingPassangerFirst,
        lastName: bookingPassangerLast,
        disabled: true
      };
    }
  };

  render() {
    const passenger = this.constructPassenger();
    return (
      <Wrapper>
        <Row>
          <InputField
            name="First Name"
            mandatory={true}
            value={passenger && passenger.firstName}
            size="small"
            disabled={passenger && passenger.disabled}
          />
          <InputField
            name="Last Name"
            mandatory={true}
            value={passenger && passenger.lastName}
            size="small"
            disabled={passenger && passenger.disabled}
          />
          <DropdownField options={["normal", "special"]} placeholder="Type" />
        </Row>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  applyBooking: state.mainReducer.applyBooking,
  bookingPassangerFirst: state.mainReducer.bookingPassangerFirst,
  bookingPassangerLast: state.mainReducer.bookingPassangerLast
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

export default connect(mapStateToProps, mapDispatchToProps)(Passenger);
