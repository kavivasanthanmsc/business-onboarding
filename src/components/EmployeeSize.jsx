import { User, Users } from "lucide-react";

function EmployeeSize({ value, onChange }) {
  const options = [
    { value: "1-20", icon: User },
    { value: "21-49", icon: Users },
    { value: "50+", icon: Users },
  ];

  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-3">
      {options.map(({ value: itemValue, icon: Icon }) => {
        const selected = value === itemValue;

        return (
          <button
            key={itemValue}
            type="button"
            onClick={() => onChange(itemValue)}
            className={`flex h-[56px] cursor-pointer flex-col items-center justify-center rounded-md border transition sm:h-[68px] sm:rounded-lg ${
              selected
                ? "border-blue-500 bg-blue-50/60 text-blue-600"
                : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
            }`}
          >
            <Icon size={16} className="mb-1 text-gray-800 sm:size-[18px]" />
            <span
              className={`text-[10px] font-semibold sm:text-xs lg:text-sm ${
                selected ? "text-blue-600" : "text-gray-700"
              }`}
            >
              {itemValue}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default EmployeeSize;