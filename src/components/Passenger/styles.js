import styled from "styled-components";

import OriginalInputField from "../../components/InputField";
import OriginalDropdownField from "../../components/DropdownField";
import { MEDIA } from "../../styles/constants";

export const Wrapper = styled.div`font-size: 1em;`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  ${MEDIA.PORTRAIT`flex-direction: column;`};
  ${MEDIA.LANDSCAPE`flex-direction: row;`};
  justify-content: space-between;
  padding: 10em 0 10em 0;
`;

export const InputField = styled(OriginalInputField)``;

export const DropdownField = styled(OriginalDropdownField)`margin-top: 29em;`;
