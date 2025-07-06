

// Blue-accented swap icon for dark theme.
const SwapIcon = () => (
  <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
    <circle
      cx="18"
      cy="18"
      r="17"
      stroke="#2563eb"
      strokeWidth="2"
      fill="#1e293b"
    />
    <path
      d="M12 18c0-3.3137 2.6863-6 6-6 1.657 0 3.156.672 4.242 1.758M24 18c0 3.3137-2.6863 6-6 6-1.657 0-3.156-.672-4.242-1.758"
      stroke="#60a5fa"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 13l1.5 2.5L25 13"
      stroke="#60a5fa"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M14 23l-1.5-2.5L11 23"
      stroke="#60a5fa"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

function SwapIconFit({ handleClick }) {
  return (
    <div className="flex justify-center mb-4 sm:mb-2">
      <button
        className="bg-slate-800/90 hover:bg-blue-900 transition rounded-full p-2 xs:p-2.5 sm:p-3 shadow border border-blue-900 flex items-center justify-center"
        aria-label="Swap currencies"
        type="button"
        onClick={() => {
          handleClick();
        }}
      >
        <SwapIcon />
      </button>
    </div>
  );
}
export default SwapIconFit;
