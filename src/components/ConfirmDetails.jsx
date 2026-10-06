import { ArrowLeft, CheckCircle } from "lucide-react";

function ConfirmDetails({
  businessTitle,
  description,
  companyType,
  employeeSize,
  address,
  sameAddress,
  onBack,
  onSubmit,
}) {
  return (
    <section className="min-w-0 w-full flex-1">
      <div className="mx-auto w-full max-w-[420px] sm:max-w-[620px] lg:mx-0 lg:max-w-[680px]">
        
        {/* TITLE */}
        <h1 className="mb-2 text-xl font-semibold tracking-tight text-[#303c4a] sm:text-2xl">
          Confirm details
        </h1>

        <p className="mb-6 text-sm text-gray-500">
          Please review your information before submitting.
        </p>

        {/* PREVIEW */}
        <div className="space-y-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">

          {/* Business Title */}
          <div className="border-b border-gray-100 pb-4">
            <p className="text-xs font-medium text-gray-400">
              Your business title
            </p>

            <p className="mt-1 text-sm font-medium text-gray-800">
              {businessTitle || "Not provided"}
            </p>
          </div>

          {/* Description */}
          <div className="border-b border-gray-100 pb-4">
            <p className="text-xs font-medium text-gray-400">
              Description of business conducted
            </p>

            <p className="mt-1 text-sm text-gray-800">
              {description || "Not provided"}
            </p>
          </div>

          {/* Company Type */}
          <div className="border-b border-gray-100 pb-4">
            <p className="text-xs font-medium text-gray-400">
              Company type
            </p>

            <p className="mt-1 text-sm font-medium text-gray-800">
              {companyType || "Not provided"}
            </p>
          </div>

          {/* Employee Size */}
          <div className="border-b border-gray-100 pb-4">
            <p className="text-xs font-medium text-gray-400">
              Number of employees
            </p>

            <p className="mt-1 text-sm font-medium text-gray-800">
              {employeeSize || "Not provided"}
            </p>
          </div>

          {/* Business Address */}
          <div className="border-b border-gray-100 pb-4">
            <p className="text-xs font-medium text-gray-400">
              Business address
            </p>

            <div className="mt-1 space-y-1 text-sm text-gray-800">
              <p>{address.line1 || "Not provided"}</p>

              {address.line2 && <p>{address.line2}</p>}

              <p>
                {address.city && `${address.city}, `}
                {address.state && `${address.state}, `}
                {address.zipcode}
              </p>

              <p>{address.country}</p>
            </div>
          </div>

          {/* Billing Address */}
          <div>
            <p className="text-xs font-medium text-gray-400">
              Billing address
            </p>

            <p className="mt-1 text-sm font-medium text-gray-800">
              {sameAddress
                ? "Same as business address"
                : "Different billing address"}
            </p>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="mt-8 flex flex-col gap-3 border-t border-gray-200/80 pt-6 sm:flex-row sm:justify-between">

          {/* BACK */}
          <button
            type="button"
            onClick={onBack}
            className="flex h-[42px] items-center justify-center gap-2 rounded-md border border-gray-200 bg-white px-6 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
          >
            <ArrowLeft size={16} />
            Back
          </button>

          {/* SUBMIT */}
          <button
            type="button"
            onClick={onSubmit}
            className="flex h-[42px] items-center justify-center gap-2 rounded-md bg-[#3b8eea] px-8 text-sm font-medium text-white transition hover:bg-blue-600"
          >
            Submit
            <CheckCircle size={16} />
          </button>

        </div>
      </div>
    </section>
  );
}

export default ConfirmDetails;