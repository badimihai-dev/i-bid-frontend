import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledBackground = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: #33333355;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledBox = styled(motion.div)`
  width: 320px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px 0 #33333355;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 30px 20px;
`;
