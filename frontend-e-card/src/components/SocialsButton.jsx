export default function SocialsButtons({children}) {
    return (

        <button
        type="button"
        className="mr-3 mt-3 inline-flex items-center rounded-lg bg-black px-3 py-2 text-sm font-semibold text-slate-200 hover:bg-black/80"
        >
        {children}
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="ml-2 h-4 w-4"
        >
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
        </button>
    )
}
