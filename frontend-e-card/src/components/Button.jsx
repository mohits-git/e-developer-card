export default function Button({children}) {
    return(
        <button
        type="button"
        className="inline-flex bg-slate-800 items-center rounded-md px-3 py-4 text-sm font-semibold text-white hover:bg-[#111930]"
        >
        {children}
        {" "}
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
    className="h-4 w-4"
  >
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
        </button>
    )
}
