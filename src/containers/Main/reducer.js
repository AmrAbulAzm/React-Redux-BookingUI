export const SET_BP_F_NAME = "main/SET_BP_F_NAME";
export const SET_BP_L_NAME = "main/SET_BP_L_NAME";
export const ADD_P = "main/ADD_P";
export const ADD_S = "main/ADD_S";
export const TOGGLE_APPLY_B = "main/TOGGLE_APPLY_B";

const initialState = {
  bookingPassangerFirst: null,
  bookingPassangerLast: null,
  numberOfPassangers: 1,
  applyBooking: false,
  submit: 0
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_BP_F_NAME:
      return {
        ...state,
        bookingPassangerFirst: action.name
      };
      case SET_BP_L_NAME:
      return {
        ...state,
        bookingPassangerLast: action.name
      };
    case ADD_P:
      return {
        ...state,
        numberOfPassangers: state.numberOfPassangers+1
      };
      case ADD_S:
      return {
        ...state,
        submit: state.submit+1
      };
      case TOGGLE_APPLY_B:
      return {
        ...state,
        applyBooking: !state.applyBooking
      };
    default:
      return state;
  }
}

export function setbookingPassangerFirstName(name) {
  return {
    type: SET_BP_F_NAME,
    name
  };
}

export function setbookingPassangerLastName(name) {
  return {
    type: SET_BP_L_NAME,
    name
  };
}

export function addPassanger() {
  return {
    type: ADD_P
  };
}

export function submitIncrement() {
  return {
    type: ADD_S
  };
}

export function toggleApplyBooking() {
  return {
    type: TOGGLE_APPLY_B
  };
}
