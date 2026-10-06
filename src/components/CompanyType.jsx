function CompanyType({ value, onChange }) {
  const options = [
    "LLC / Partnership / Single-member",
    "C / S Corporation",
    "B Corporation",
  ];

  return (
    <div className="space-y-2 sm:space-y-2.5">
      {options.map((option) => (
        <label
          key={option}
          className="flex cursor-pointer items-center gap-2 text-xs text-gray-700 sm:text-sm"
        >
          <input
            type="radio"
            name="companyType"
            value={option}
            checked={value === option}
            onChange={(e) => onChange(e.target.value)}
            className="h-4 w-4 cursor-pointer accent-blue-500 sm:h-4.5 sm:w-4.5"
          />
          <span>{option}</span>
        </label>
      ))}
    </div>
  );
}

export default CompanyType;