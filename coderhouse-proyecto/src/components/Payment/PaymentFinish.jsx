export default function PaymentFinish({ orderId }) {
    return (
        <div className="bg-gray-200 mt-3 p-2 rounded-sm shadow-md">
            <h2 className=" text-xl font-bold mb-2">Su compra ya fue procesada</h2>
            <p className="font-semibold">El id de su orden es: <span className="font-normal">{orderId}</span></p>
            <p className="italic text-lg">Gracias por su compra</p>
        </div>
    )
}
