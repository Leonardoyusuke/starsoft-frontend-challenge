'use client'
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import OpenedCheckout from "./OpenedCheckout";
import ClosedCheckout from "./ClosedCheckout";

export default function CheckOut() {
  const isOpen = useSelector((state: RootState) => state.checkout.isOpen);

  return <>{isOpen ? <OpenedCheckout /> : <ClosedCheckout />}</>;
}