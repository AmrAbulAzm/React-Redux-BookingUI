import React, { PureComponent } from "react";

import {
  Wrapper,
  Form,
  Header,
  BookingPassenger,
  InputField,
  RadioField,
  Title,
  Row,
  Checkbox,
  Passengers,
  Passenger,
  AddPassengerButton,
  SubmitButton
} from "./styles";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toggleApplyBooking, addPassanger, submitIncrement } from "./reducer";

class Main extends PureComponent {
  state = {
    passengers: [<Passenger key="first" position="first" />]
  };

  submit = () => {
      this.props.actions.submitIncrement();
  }

  localAddPassenger = () => {
    const { actions, numberOfPassangers } = this.props;
    actions.addPassanger();
    this.setState({
      passengers: this.state.passengers.concat(<Passenger key={numberOfPassangers}/>)
    });
  };

  render() {
    return (
      <Wrapper>
        <Form>
          <Header>
            <span>Personal details</span>
          </Header>
          <Title>
            <div className="left">
              <span>Your data</span>
            </div>
            <div className="right">
              <span>* Mandatory field</span>
            </div>
          </Title>
          <BookingPassenger>
            <RadioField
              optionOne="Mr."
              optionTwo="Mrs."
              name="Title"
              mandatory={true}
            />
            <Row>
              <InputField
                name="First Name"
                mandatory={true}
                size="big"
                position="top"
              />
              <InputField
                name="Last Name"
                mandatory={true}
                size="big"
                position="top"
              />
            </Row>
            <Row>
              <InputField
                name="Street and number"
                mandatory={true}
                size="big"
              />
              <Row>
                <InputField name="City" mandatory={true} size="small" />
                <InputField name="Zip Code" mandatory={true} size="small" />
              </Row>
            </Row>
            <Row>
              <InputField name="Phone" mandatory={true} size="big" />
              <InputField name="Email" mandatory={true} size="big" />
            </Row>
            <Row>
              <InputField name="Discount Code" mandatory="false" size="big" />
            </Row>
          </BookingPassenger>
          <Passengers>
            <Title>
              <div className="left">
                <span>Passengers</span>
              </div>
            </Title>
            {this.state.passengers}
            <AddPassengerButton onClick={this.localAddPassenger}>
              <span>+ Add another passanger</span>
            </AddPassengerButton>
            <Checkbox name="Apply booking person as first passenger" />
          </Passengers>
          <SubmitButton onClick={this.submit}><span>Submit</span></SubmitButton>
        </Form>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  numberOfPassangers: state.mainReducer.numberOfPassangers,
  applyBooking: state.mainReducer.applyBooking,
  bookingPassangerFirst: state.mainReducer.bookingPassangerFirst,
  bookingPassangerLast: state.mainReducer.bookingPassangerLast
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      addPassanger,
      toggleApplyBooking,
      submitIncrement
    },
    dispatch
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
