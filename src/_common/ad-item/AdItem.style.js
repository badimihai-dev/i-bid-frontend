import { motion } from "framer-motion";
import styled from "styled-components";
import { ReactComponent as NoImage } from "../../assets/svg/no-image.svg";

export const StyledWrapper = styled.div`
  display: flex;
  gap: 20px;
  max-height: 400px;
`;

export const StyledCardItem = styled.div`
  padding: 30px 20px;
  background: #fff;
  box-shadow: 0 0 10px 0 #33333355;
  border-radius: 20px;
  margin: 10px 0;
  flex: 8;
`;

export const StyledBidsList = styled(motion.div)`
  position: relative;
  padding: 30px 20px;
  background: #3f51b5;
  margin: 10px 0;
  box-shadow: 0 0 10px 0 #33333355;
  border-radius: 20px;
  color: #fff;
`;

export const StyledCardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const StyledNoImage = styled(NoImage)`
  height: 100px;
  width: 100%;
`;

export const StyledBidItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid #f1f1f1;
`;
