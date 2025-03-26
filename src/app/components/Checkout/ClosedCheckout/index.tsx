import Image from "next/image"
import { BagWrapped } from "./styles"
import { useDispatch } from 'react-redux';
import { openCheckout } from "@/lib/features/checkout/checkoutSlice";
import { AppDispatch } from '@/lib/store';


export default function ClosedCheckout() {
    const dispatch = useDispatch<AppDispatch>();


    return (
        <BagWrapped onClick={()=>dispatch(openCheckout())} >
            <Image src="bag.svg" width={33} height={33} alt={"bag"} />
            <p>0</p>
        </BagWrapped>
    )
}