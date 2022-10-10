import { useState } from "react";

const useCountries = (label, countries) => {
  const [state, setState] = useState("");

  const Countries = () => (
    <>
      <label className="text-white mb-2 block font-bold">{label}</label>
      <select
        value={state}
        onChange={(e) => setState(e.target.value)}
        className="w-full p-1 text-center rounded hover:bg-gray-100 focus:outline-none focus:border-gray-600 italic mb-4"
      >
        <option value="">-- Select Country --</option>

        {countries.map((country) => (
          <option key={country.id} value={country.id}>
            {country.name}
          </option>
        ))}
      </select>
    </>
  );

  return [state, Countries];
};

export default useCountries;
