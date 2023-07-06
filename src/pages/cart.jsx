import Header from "@/components/Header";
import { useSelector } from "react-redux";

export default function Cart(){

    let cartItems = useSelector((redux_store)=>{
        return redux_store.cart.value
    })

    return(
        <>
            <Header />
            {JSON.stringify(cartItems)}
        </>
    )
}