export default function Form({ submit, children }) {
    return (
        <form onSubmit={submit} className="bg-gray-200">
            {children}
        </form>
    )
}
