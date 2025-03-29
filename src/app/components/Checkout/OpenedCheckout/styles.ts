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
  overflow-x: hidden;
  transition: width 0.3s ease;

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 0;
  }
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

    @media (max-width: 768px) {
      width: 40px;
      height: 40px;
      top: 40px;
      left: 20px;
    }
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

    @media (max-width: 768px) {
      top: 60px;
      right: 50%;
      transform: translateX(50%);
      font-size: 20px;
      width: auto;
      text-align: center;
    }
  }
`;
