export default function Form({ submit, children }) {
    return (
        <form onSubmit={submit} className="bg-gray-200 md:my-10 md:mx-60 rounded-sm shadow-md">
            <div className="px-4 py-5">
                {children}
            </div>
        </form>
    )
}
