'use client'
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import OpenedCheckout from "./OpenedCheckout";
import ClosedCheckout from "./ClosedCheckout";

export default function CheckOut() {

  return (
    <>
      <ClosedCheckout />
      <OpenedCheckout />
    </>
  );
}