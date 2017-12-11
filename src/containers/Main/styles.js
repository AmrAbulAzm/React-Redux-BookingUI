import styled from "styled-components";

import OriginalInputField from "../../components/InputField";
import OriginalRadioField from "../../components/RadioField";
import OriginalCheckbox from "../../components/Checkbox";
import OriginalPassenger from "../../components/Passenger";

import { MEDIA } from "../../styles/constants";

export const Wrapper = styled.div`
  font-size: 1em;
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow-x: scroll;
`;

export const Form = styled.div`
  position: relative;
  border: 1px lightGray solid;
  border-radius: 3px;
  margin: auto;
  width: 80%;
  margin-top: 15em;
  margin-bottom: 15em;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  text-align: center;
  height: 50em;
  width: 100%;
  background-color: lightGrey;
  span {
    font-size: 40em;
    font-weight: bold;
  }
`;

export const BookingPassenger = styled.div`
  width: 100%;
  padding: 10em;
`;

export const Title = styled.div`
  padding: 10em;
  height: 50em;
  width: 100%;
  .left {
    float: left;
    font-weight: bold;
  }
  .right {
    float: right;
  }
  span {
    font-size: 30em;
  }
`;

export const Row = styled.div`
  display: flex;
  ${MEDIA.PORTRAIT`flex-direction: column;`};
  ${MEDIA.LANDSCAPE`flex-direction: row;`};
  justify-content: space-between;
  padding: 10em 0 10em 0;
`;

export const Passengers = styled.div`
  width: 100%;
  padding: 10em;
`;

export const AddPassengerButton = styled.div`
  width: 400em;
  height: 55em;
  padding: 10em;
  color: white;
  background-color: green;
  border-radius: 3px;
  text-align: center;
  span {
    font-size: 30em;
    font-weight: bold;
  }
`;

export const SubmitButton = styled.div`
  width: 100%;
  height: 55em;
  padding: 10em;
  color: white;
  background-color: black;
  border-radius: 3px;
  text-align: center;
  span {
    font-size: 30em;
    font-weight: bold;
  }
`;

export const InputField = styled(OriginalInputField)``;

export const RadioField = styled(OriginalRadioField)``;

export const Checkbox = styled(OriginalCheckbox)``;

export const Passenger = styled(OriginalPassenger)``;
