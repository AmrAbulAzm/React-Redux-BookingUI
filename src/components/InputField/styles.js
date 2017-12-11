import styled from "styled-components";

export const Wrapper = styled.div`
  font-size: 1em;
  width: ${props => (props.size === "big" ? 700 : 350)}em;
`;

export const Title = styled.div`
  margin-bottom: 5em;
  span {
    font-size: 30em;
  }
`;

export const Input = styled.input`
  border: 1px solid ${props => props.highlight && !props.disabled ? "red" : "lightGray"};
  width: 100%;
  border-radius: 3px;
  font-size: 30em;
  pointer-events: ${props => props.disabled ? "none" : "auto"};
`;
