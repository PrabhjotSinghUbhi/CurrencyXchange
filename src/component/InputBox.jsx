import Select from "react-select";

function Template({
  label,
  readOnly,
  className = "",
  currencyOptions,
  placeholder,
  defCurrency,
  onCurrencyChange,
  amount,
  onAmountChange,
}) {
  const customStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: "#1e293b", // Tailwind's bg-slate-800
      border: state.isFocused ? "2px solid #3b82f6" : "1px solid #334155",
      borderRadius: "0.75rem", // Tailwind's rounded-xl
      boxShadow: "none",
      padding: "5px",
      color: "#fff",
      width: "130px",
    }),
    option: (base, { isFocused, isSelected }) => ({
      ...base,
      backgroundColor: isSelected
        ? "#2563eb" // Tailwind's blue-600
        : isFocused
        ? "#1e40af" // Tailwind's blue-800
        : "transparent",
      color: "#fff",
      padding: "10px 15px",
      cursor: "pointer",
    }),
    singleValue: (base) => ({
      ...base,
      color: "#fff", // text color for the selected option
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: "#0f172a", // Tailwind's bg-slate-900
      borderRadius: "0.75rem",
      overflow: "hidden",
      // display: "hidden"
    }),
  };

  return (
    <div
      className={`flex flex-col sm:flex-row items-stretch sm:items-end justify-between mb-4 sm:mb-6 gap-2 sm:gap-4 ${className}`}
    >
      <div className="flex-1">
        <label className="text-blue-300 text-xs font-semibold mb-1 block">
          {label}
        </label>
        <input
          type="number"
          value={amount ?? ""}
          className="w-full border-none rounded-lg px-2 py-2 xs:px-3 xs:py-2 sm:px-4 sm:py-3 text-sm xs:text-base sm:text-lg bg-slate-800/80 text-blue-100 shadow-inner focus:ring-2 focus:ring-blue-700 outline-none transition"
          min="0"
          inputMode="decimal"
          readOnly={readOnly}
          placeholder={placeholder}
          onChange={(e) => {
            let value = e.target.value;
            onAmountChange && onAmountChange(value === "" ? "" : Number(value));
          }}
        />
      </div>
      <div className="flex flex-col items-end min-w-[110px]">
        <span className="text-blue-300 text-xs font-semibold mb-1 block">
          Currency
        </span>
        <div className="flex items-center gap-2 w-full">
          <Select
            styles={customStyles}
            options={currencyOptions}
            maxMenuHeight={200}
            value={defCurrency}
            onChange={(selected) => {
              console.log(selected);
              return onCurrencyChange && onCurrencyChange(selected);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Template;
