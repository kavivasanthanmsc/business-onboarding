import { useState } from "react";
import { Country, State } from "country-state-city";

function BusinessAddress({ address, setAddress, errors }) {
  const [countryOpen, setCountryOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");

  const [stateOpen, setStateOpen] = useState(false);
  const [stateSearch, setStateSearch] = useState("");

  const updateField = (field, value) => {
    setAddress((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  // All countries
  const countries = Country.getAllCountries();

  // Search country
  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(countrySearch.toLowerCase())
  );

  // States based on selected country
  const states = address.country
    ? State.getStatesOfCountry(address.country)
    : [];

  // Search state
  const filteredStates = states.filter((state) =>
    state.name.toLowerCase().includes(stateSearch.toLowerCase())
  );

  return (
    <div className="space-y-2 sm:space-y-2.5">

      {/* ================= COUNTRY ================= */}
      <div className="relative">
        <button
          type="button"
          onClick={() => {
            setCountryOpen(!countryOpen);
            setStateOpen(false);
          }}
          className={`h-[40px] w-full rounded-md border bg-white px-3 text-left text-xs text-gray-700 outline-none sm:h-[42px] sm:rounded-lg sm:px-4 sm:text-sm ${
            errors.country
              ? "border-red-400 focus:border-red-500"
              : "border-gray-200 focus:border-blue-500"
          }`}
        >
          {address.country
            ? countries.find(
                (country) => country.isoCode === address.country
              )?.name
            : "Select country"}
        </button>

        {errors.country && (
          <p className="mt-1 text-xs font-medium text-red-500">
            {errors.country}
          </p>
        )}

        {countryOpen && (
          <div className="absolute z-50 mt-1 w-full rounded-md border border-gray-200 bg-white shadow-lg">

            {/* Country Search */}
            <input
              type="text"
              placeholder="Search country..."
              value={countrySearch}
              onChange={(e) => setCountrySearch(e.target.value)}
              className="w-full border-b border-gray-200 px-3 py-2 text-xs outline-none sm:px-4 sm:text-sm"
              autoFocus
            />

            {/* Country List */}
            <div className="max-h-48 overflow-y-auto">
              {filteredCountries.length > 0 ? (
                filteredCountries.map((country) => (
                  <button
                    key={country.isoCode}
                    type="button"
                    onClick={() => {
                      updateField("country", country.isoCode);
                      updateField("state", "");

                      setCountryOpen(false);
                      setCountrySearch("");

                      setStateOpen(false);
                      setStateSearch("");
                    }}
                    className="block w-full px-3 py-2 text-left text-xs hover:bg-gray-100 sm:px-4 sm:text-sm"
                  >
                    {country.name}
                  </button>
                ))
              ) : (
                <p className="px-3 py-2 text-xs text-gray-500">
                  No country found
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* ================= ADDRESS LINE 1 ================= */}
      <div>
        <input
          type="text"
          placeholder="Address line 1"
          value={address.line1}
          onChange={(e) => updateField("line1", e.target.value)}
          className={`h-[40px] w-full rounded-md border bg-white px-3 text-xs text-gray-700 outline-none sm:h-[42px] sm:rounded-lg sm:px-4 sm:text-sm ${
            errors.line1
              ? "border-red-400 focus:border-red-500"
              : "border-gray-200 focus:border-blue-500"
          }`}
        />

        {errors.line1 && (
          <p className="mt-1 text-xs font-medium text-red-500">
            {errors.line1}
          </p>
        )}
      </div>

      {/* ================= ADDRESS LINE 2 ================= */}
      <input
        type="text"
        placeholder="Address line 2"
        value={address.line2}
        onChange={(e) => updateField("line2", e.target.value)}
        className="h-[40px] w-full rounded-md border border-gray-200 bg-white px-3 text-xs text-gray-700 outline-none focus:border-blue-500 sm:h-[42px] sm:rounded-lg sm:px-4 sm:text-sm"
      />

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-[1fr_95px_95px]">

        {/* ================= CITY ================= */}
        <div>
          <input
            type="text"
            placeholder="City"
            value={address.city}
            onChange={(e) => updateField("city", e.target.value)}
            className={`h-[40px] w-full rounded-md border bg-white px-3 text-xs text-gray-700 outline-none sm:h-[42px] sm:rounded-lg sm:px-3 sm:text-sm ${
              errors.city
                ? "border-red-400 focus:border-red-500"
                : "border-gray-200 focus:border-blue-500"
            }`}
          />

          {errors.city && (
            <p className="mt-1 text-xs font-medium text-red-500">
              {errors.city}
            </p>
          )}
        </div>

        {/* ================= STATE ================= */}
        <div className="relative">
          <button
            type="button"
            disabled={!address.country}
            onClick={() => {
              setStateOpen(!stateOpen);
              setCountryOpen(false);
            }}
            className={`h-[40px] w-full min-w-0 truncate overflow-hidden rounded-md border bg-white px-2 text-left text-xs text-gray-700 outline-none disabled:bg-gray-100 disabled:text-gray-400 sm:h-[42px] sm:rounded-lg sm:px-3 sm:text-sm ${
              errors.state
                ? "border-red-400 focus:border-red-500"
                : "border-gray-200 focus:border-blue-500"
            }`}
          >
            {address.state
              ? states.find(
                  (state) => state.isoCode === address.state
                )?.name
              : "State"}
          </button>

          {errors.state && (
            <p className="mt-1 text-xs font-medium text-red-500">
              {errors.state}
            </p>
          )}

          {stateOpen && address.country && (
            <div className="absolute bottom-full z-50 mb-1 w-64 rounded-md border border-gray-200 bg-white shadow-lg">

              {/* State Search */}
              <input
                type="text"
                placeholder="Search state..."
                value={stateSearch}
                onChange={(e) => setStateSearch(e.target.value)}
                className="w-full border-b border-gray-200 px-2 py-2 text-xs outline-none sm:px-3 sm:text-sm"
                autoFocus
              />

              {/* State List */}
              <div className="max-h-48 overflow-x-auto overflow-y-auto">
                {filteredStates.length > 0 ? (
                  filteredStates.map((state) => (
                    <button
                      key={state.isoCode}
                      type="button"
                      onClick={() => {
                        updateField("state", state.isoCode);
                        setStateOpen(false);
                        setStateSearch("");
                      }}
                      className="block w-full px-2 py-2 text-left text-xs hover:bg-gray-100 sm:px-3 sm:text-sm"
                    >
                      {state.name}
                    </button>
                  ))
                ) : (
                  <p className="px-2 py-2 text-xs text-gray-500">
                    No state found
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* ================= ZIPCODE ================= */}
        <div>
          <input
            type="text"
            inputMode="numeric"
            maxLength={6}
            placeholder="Zipcode"
            value={address.zipcode}
            onChange={(e) =>
              updateField(
                "zipcode",
                e.target.value.replace(/\D/g, "")
              )
            }
            className={`h-[40px] w-full rounded-md border bg-white px-3 text-xs text-gray-700 outline-none sm:h-[42px] sm:rounded-lg sm:px-4 sm:text-sm ${
              errors.zipcode
                ? "border-red-400 focus:border-red-500"
                : "border-gray-200 focus:border-blue-500"
            }`}
          />

          {errors.zipcode && (
            <p className="mt-1 text-xs font-medium text-red-500">
              {errors.zipcode}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default BusinessAddress;