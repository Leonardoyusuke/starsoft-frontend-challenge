import { BagWrapped } from "./styles"
import { useDispatch } from 'react-redux';
import { openCheckout } from "@/lib/features/checkout/checkoutSlice";
import { AppDispatch } from '@/lib/store';
import { Bag } from "./Bag";



export default function ClosedCheckout() {
    const dispatch = useDispatch<AppDispatch>();


    return (
        <BagWrapped onClick={()=>dispatch(openCheckout())} >
            <Bag />
            <p>0</p>
        </BagWrapped>
    )
}