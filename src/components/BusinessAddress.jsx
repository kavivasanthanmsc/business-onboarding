function BusinessAddress({ address, setAddress }) {
  const updateField = (field, value) => {
    setAddress((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  return (
    <div className="space-y-2 sm:space-y-2.5">
      <select
        value={address.country}
        onChange={(e) => updateField("country", e.target.value)}
        className="h-[40px] w-full rounded-md border border-gray-200 bg-white px-3 text-xs text-gray-700 outline-none focus:border-blue-500 sm:h-[42px] sm:rounded-lg sm:px-4 sm:text-sm"
      >
        <option value="">Select country</option>
        <option value="US">United States</option>
        <option value="IN">India</option>
        <option value="IN">England</option>
      </select>

      <input
        type="text"
        placeholder="Address line 1"
        value={address.line1}
        onChange={(e) => updateField("line1", e.target.value)}
        className="h-[40px] w-full rounded-md border border-gray-200 bg-white px-3 text-xs text-gray-700 outline-none focus:border-blue-500 sm:h-[42px] sm:rounded-lg sm:px-4 sm:text-sm"
      />

      <input
        type="text"
        placeholder="Address line 2"
        value={address.line2}
        onChange={(e) => updateField("line2", e.target.value)}
        className="h-[40px] w-full rounded-md border border-gray-200 bg-white px-3 text-xs text-gray-700 outline-none focus:border-blue-500 sm:h-[42px] sm:rounded-lg sm:px-4 sm:text-sm"
      />

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-[1fr_95px_95px]">
        <input
          type="text"
          placeholder="City"
          value={address.city}
          onChange={(e) => updateField("city", e.target.value)}
          className="h-[40px] rounded-md border border-gray-200 bg-white px-3 text-xs text-gray-700 outline-none focus:border-blue-500 sm:h-[42px] sm:rounded-lg sm:px-4 sm:text-sm"
        />

        <select
          value={address.state}
          onChange={(e) => updateField("state", e.target.value)}
          className="h-[40px] rounded-md border border-gray-200 bg-white px-2 text-xs text-gray-700 outline-none focus:border-blue-500 sm:h-[42px] sm:rounded-lg sm:px-3 sm:text-sm"
        >
          <option value="">State</option>
          <option value="TN">TN</option>
          <option value="KL">KL</option>
        </select>

        <input
          type="text"
          inputMode="numeric"
          maxLength={6}
          placeholder="Zipcode"
          value={address.zipcode}
          onChange={(e) => updateField("zipcode", e.target.value.replace(/\D/g, ""))}
          className="h-[40px] rounded-md border border-gray-200 bg-white px-3 text-xs text-gray-700 outline-none focus:border-blue-500 sm:h-[42px] sm:rounded-lg sm:px-4 sm:text-sm"
        />
      </div>
    </div>
  );
}

export default BusinessAddress;