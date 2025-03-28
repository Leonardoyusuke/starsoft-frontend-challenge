import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MotionContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 679px;
  height: 100%;
  border-radius: 5px 0 0 5px;
  background-color: #232323;
  z-index: 1000;
  overflow-y: auto;
`;

export const Top = styled.div`
  position: relative;
  img {
    position: absolute;
    width: 60px;
    height: 60px;
    top: 60px;
    left: 40px;
    cursor: pointer;
  }

  p {
    position: absolute;
    width: 253px;
    height: 26px;
    top: 85px;
    right: 184px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 110%;
    color: #ffffff;
  }
`;
