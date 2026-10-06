function FormField({ label, description, children }) {
  return (
    <div className="flex flex-col gap-1.5 sm:flex-row sm:items-start sm:gap-6 lg:gap-8">
      {/* Label */}
      <div className="w-full shrink-0 sm:w-[150px] lg:w-[170px]">
        <p className="text-xs font-semibold leading-tight text-[#303943] lg:text-sm">
          {label}
        </p>

        {description && (
          <p className="mt-0.5 text-[10px] leading-tight text-gray-400 sm:text-[11px] lg:text-xs">
            {description}
          </p>
        )}
      </div>

      {/* Input / Content */}
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}

export default FormField;