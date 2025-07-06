import React, { useCallback, useEffect, useState } from "react";
import { InputBox, SwapIcon, GitHubIcon } from "./component";
import useExchangeRate from "./hooks/useCurrencyExchange";
import { currencyOptions } from "./options";

function App() {
  const [amount, setAmount] = useState(1);
  const [fromCountry, setFromCountry] = useState(currencyOptions[148]);
  const [toCountry, setToCountry] = useState(currencyOptions[65]);
  const [convertedAmount, setConvertedAmount] = useState();

  function handleSwap() {
    setFromCountry(toCountry);
    setToCountry(fromCountry);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  const exchangeRate = useExchangeRate(
    fromCountry.label.props.children[1],
    toCountry.label.props.children[1]
  );

  const convert = useCallback(() => {
    console.log("convert method called");
    setConvertedAmount((amount * exchangeRate["conversion_rate"]).toFixed(2));
  }, [exchangeRate, amount]);

  useEffect(() => {
    convert();
  }, [amount, fromCountry, toCountry, convert]);

  return (
    <div className="min-h-screen flex flex-col pt-10 items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 relative px-2">
      {/* Soft background glow */}

      {/* Top right GitHub logo and name */}
      <div className="hidden sm:flex absolute top-4 right-4 z-20 ">
        <a
          href="https://github.com/PrabhjotSinghUbhi"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border border-cyan-700 shadow-xl hover:from-cyan-900 hover:to-cyan-700 hover:border-cyan-400 transition-all duration-200 group"
          title="GitHub"
        >
          <span className="p-1 bg-cyan-900 rounded-full group-hover:bg-cyan-700 transition">
            <GitHubIcon />
          </span>
          <span className="ml-1.5 text-cyan-300 font-bold text-base sm:text-lg group-hover:text-cyan-400 transition">
            PrabhjotSinghUbhi
          </span>
        </a>
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-56 h-56 sm:w-72 sm:h-72 bg-blue-900 opacity-30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-56 h-56 sm:w-72 sm:h-72 bg-blue-800 opacity-20 rounded-full blur-2xl"></div>
      </div>

      {/* Main Card */}
      <div className="relative z-10 bg-slate-900/90 backdrop-blur-lg rounded-3xl shadow-2xl px-4 py-6 xs:px-6 sm:px-10 sm:py-12 w-full max-w-md border border-slate-800 ring-1 ring-blue-900/40 transition-all duration-500">
        {/* Header */}
        <div className="text-center mb-6 animate-fade-in">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-cyan-300 drop-shadow-sm tracking-tight mb-1">
            Currency Converter
          </h1>
          <p className="text-cyan-400 text-sm sm:text-base font-medium opacity-90">
            Convert currencies instantly with live exchange rates.
          </p>
        </div>

        {/* InputBox - From */}
        <InputBox
          label="From"
          readOnly={false}
          defaultCountry={fromCountry}
          currencyOptions={currencyOptions}
          defCurrency={fromCountry}
          onCurrencyChange={(currency) => setFromCountry(currency)}
          placeholder={"Amount"}
          amount={amount}
          onAmountChange={(val) => setAmount(val)}
        />

        {/* Swap Button */}
        <SwapIcon handleClick={handleSwap} />

        {/* InputBox - To */}
        <InputBox
          label="To"
          readOnly={true}
          defaultCountry={toCountry}
          currencyOptions={currencyOptions}
          defCurrency={toCountry}
          amount={convertedAmount ?? ""}
          onCurrencyChange={(currency) => setToCountry(currency)}
          placeholder="Converted Amount"
        />

        {/* Convert Button */}
        <button
          className="group w-full mt-4 bg-gradient-to-r from-cyan-700 to-blue-600 hover:from-cyan-800 hover:to-blue-700 transition text-white py-3 rounded-xl text-base font-bold shadow-md active:scale-[0.98] tracking-wide"
          type="button"
          onClick={convert}
        >
          <span className="relative">
            <span className="group-hover:after:w-full after:w-0 after:transition-all after:duration-500 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-white after:rounded-full">
              Get Exchange Rate
            </span>
          </span>
        </button>
      </div>

      {/* Footer */}
      <footer className="mt-6 text-center text-cyan-400 text-sm sm:text-base font-medium z-10">
        <div className="border-t border-slate-700 pt-4 mt-6">
          <p className="mb-1">
            Made with 💙 using{" "}
            <span className="text-cyan-300 font-semibold">React</span> &{" "}
            <span className="text-cyan-300 font-semibold">Tailwind CSS</span> by{" "}
            <a
              id="credits"
              href="https://www.linkedin.com/in/prabhjot-singh-0a7780306"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 font-semibold hover:underline hover:text-cyan-200 transition"
            >
              Prabhjot Singh
            </a>
          </p>
          <p className="text-cyan-500/80">
            Exchange rates powered by{" "}
            <a
              href="https://app.exchangerate-api.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-cyan-300 transition-colors"
            >
              exchangerate-api
            </a>
          </p>
          <p className="mt-2 text-cyan-600/60 text-xs">
            &copy; {new Date().getFullYear()} Prabhjot Singh. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
