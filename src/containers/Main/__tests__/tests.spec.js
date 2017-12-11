import reducer from "../reducer";
import * as types from "../reducer";

describe("data layer tests", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      bookingPassangerFirst: null,
      bookingPassangerLast: null,
      numberOfPassangers: 1,
      applyBooking: false,
      submit: 0
    });
  });

  it("it should set booking passanger first name", () => {
    expect(
      reducer(
        {},
        {
          type: types.SET_BP_F_NAME,
          name: "test"
        }
      )
    ).toEqual({
      bookingPassangerFirst: "test"
    });
  });

  it("it should set booking passanger last name", () => {
    expect(reducer({}, { type: types.SET_BP_L_NAME, name: "test" })).toEqual({
      bookingPassangerLast: "test"
    });
  });

  it("it should increment passanger number", () => {
    expect(
      reducer(
        {
          numberOfPassangers: 1
        },
        { type: types.ADD_P }
      )
    ).toEqual({
      numberOfPassangers: 2
    });
  });

  it("it should increment passanger number", () => {
    expect(
      reducer(
        {
          submit: 0
        },
        { type: types.ADD_S }
      )
    ).toEqual({
      submit: 1
    });
  });

  it("it should toggle apply booking status", () => {
    expect(
      reducer(
        {
          applyBooking: false
        },
        { type: types.TOGGLE_APPLY_B }
      )
    ).toEqual({
      applyBooking: true
    });
  });

  it("should set booking passanger first name", () => {
    const name = "test";
    const expectedAction = { type: types.SET_BP_F_NAME, name };
    expect(types.setbookingPassangerFirstName(name)).toEqual(expectedAction);
  });

  it("should set booking passanger last name", () => {
    const name = "test";
    const expectedAction = { type: types.SET_BP_L_NAME, name };
    expect(types.setbookingPassangerLastName(name)).toEqual(expectedAction);
  });

  it("should set add passanger", () => {
    const expectedAction = { type: types.ADD_P };
    expect(types.addPassanger()).toEqual(expectedAction);
  });

  it("should increment submit trials", () => {
    const expectedAction = {
      type: types.ADD_S
    };
    expect(types.submitIncrement()).toEqual(expectedAction);
  });

  it("should toggle apply booking", () => {
    const expectedAction = {
      type: types.TOGGLE_APPLY_B
    };
    expect(types.toggleApplyBooking()).toEqual(expectedAction);
  });
});
