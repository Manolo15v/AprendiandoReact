import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export const useCartContext = () => useContext(CartContext)