import styled from "styled-components";
import iBidLogo from "../../assets/img/ibid-logo.png";

export const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLogo = styled(({ ...props }) => (
  <img src={iBidLogo} {...props} alt="iBid logo" />
))`
  height: 180px;
`;
