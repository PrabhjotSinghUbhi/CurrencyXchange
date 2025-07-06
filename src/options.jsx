import { countryList } from "./codes";

export const currencyOptions = Object.entries(countryList).map(
  ([country, countryCode]) => ({
    value: countryCode,
    label: (
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <img
          src={`https://flagsapi.com/${countryCode}/flat/32.png`}
          alt={countryCode}
          width="20"
          height="15"
          style={{ borderRadius: "3px" }}
        />
        {country}
      </div>
    ),
  })
);
