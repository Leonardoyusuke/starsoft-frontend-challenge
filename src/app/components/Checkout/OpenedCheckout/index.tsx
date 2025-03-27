'use client'

import { Top, MotionContainer } from "./styles";
import Image from "next/image";
import backArrow from "/public/BackArrow.svg";
import { useDispatch, useSelector } from "react-redux";
import { closeCheckout } from "@/lib/features/checkout/checkoutSlice";
import { AppDispatch, RootState } from '@/lib/store';
import { AnimatePresence } from "framer-motion";

export default function OpenedCheckout() {
  const dispatch = useDispatch<AppDispatch>();
  const isOpen = useSelector((state: RootState) => state.checkout.isOpen);

  return (
    <AnimatePresence>
      {isOpen && (
        <MotionContainer
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Top>
            <Image
              src={backArrow}
              alt="BackArrow"
              onClick={() => dispatch(closeCheckout())}
            />
            <p>Mochila de Compras</p>
          </Top>
        </MotionContainer>
      )}
    </AnimatePresence>
  );
}