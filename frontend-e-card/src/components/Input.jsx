export default function Input({type, placeholder, value, handleChange}) {
    return (
        <div className="w-full mt-3">
        <input
        className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        />
        </div>
    )
}
