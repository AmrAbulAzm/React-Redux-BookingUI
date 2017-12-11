import styled from "styled-components";

export const Wrapper = styled.div`
  font-size: 1em;
  width: 350em;
`;

export const InputField = styled.div`
  padding: 2px;
  width: 90%;
  height: 50em;
  span {
    font-size: 30em;
  }
`;

export const DropdownArrow = styled.div`
  margin: 6em;
  float: right;
  width: 10%;
  height: 50em;
  background: url(${require("../../res/drop-down-arrow.jpg")}) no-repeat 0 0;
  background-size: contain;
`;

export const VisibleContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50em;
  border: 1px solid lightGray;
  border-radius: 5px;
`;

export const Dropdown = styled.div`
  position: absolute;
  background-color: white;
  width: 350em;
  border: 1px solid lightGray;
  border-radius: 5px;
  opacity: ${props => (props.open ? 1 : 0)};
  display: ${props => (props.open ? "block" : "none")};
`;

export const Option = styled.div`
  width: 100%;
  height: 50em;
  padding: 6em;
  span {
    font-size: 30em;
    div {
      width: 100%;
    }
  }
`;
