export default function PlusButton({onClick, children}) {
    return (
        <button onClick={onClick}
  type="button"
  className="rounded-full bg-black px-3 py-0.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
>
        {children}
</button>
    )
}
