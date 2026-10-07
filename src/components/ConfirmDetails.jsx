import {
  ArrowLeft,
  CheckCircle,
  Building2,
  FileText,
  BriefcaseBusiness,
  Users,
  MapPin,
  CreditCard,
} from "lucide-react";

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
      <div className="mx-auto w-full max-w-[420px] sm:max-w-[620px] lg:mx-0 lg:max-w-[720px]">

        {/* HEADER */}
        <div className="mb-7">
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50">
              <CheckCircle className="h-5 w-5 text-[#3b8eea]" />
            </div>

            <span className="text-xs font-semibold uppercase tracking-wider text-[#3b8eea]">
              Final review
            </span>
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-[#303c4a] sm:text-3xl">
            Confirm your details
          </h1>

          <p className="mt-2 max-w-[600px] text-sm leading-6 text-gray-500 sm:text-[15px]">
            Please review the information below carefully before submitting
            your business details.
          </p>
        </div>

        {/* MAIN CARD */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)]">

          {/* CARD TOP */}
          <div className="border-b border-gray-100 bg-gradient-to-r from-blue-50/70 to-white px-5 py-5 sm:px-7">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-blue-100">
                <Building2 className="h-5 w-5 text-[#3b8eea]" />
              </div>

              <div>
                <h2 className="text-base font-semibold text-[#303c4a]">
                  Business information
                </h2>

                <p className="mt-0.5 text-xs text-gray-500">
                  Review your business details
                </p>
              </div>
            </div>
          </div>

          {/* DETAILS */}
          <div className="divide-y divide-gray-100">

            {/* BUSINESS TITLE */}
            <div className="group px-5 py-5 transition hover:bg-gray-50/60 sm:px-7">
              <div className="flex gap-4">
                <div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-50 sm:flex">
                  <BriefcaseBusiness className="h-4 w-4 text-gray-500" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                    Your business title
                  </p>

                  <p className="mt-1.5 break-words text-sm font-semibold text-gray-800">
                    {businessTitle || "Not provided"}
                  </p>
                </div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className="group px-5 py-5 transition hover:bg-gray-50/60 sm:px-7">
              <div className="flex gap-4">
                <div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-50 sm:flex">
                  <FileText className="h-4 w-4 text-gray-500" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                    Description of business conducted
                  </p>

                  <p className="mt-1.5 break-words text-sm leading-6 text-gray-700">
                    {description || "Not provided"}
                  </p>
                </div>
              </div>
            </div>

            {/* COMPANY TYPE + EMPLOYEE SIZE */}
            <div className="grid grid-cols-1 divide-y divide-gray-100 sm:grid-cols-2 sm:divide-x sm:divide-y-0">

              {/* COMPANY TYPE */}
              <div className="px-5 py-5 transition hover:bg-gray-50/60 sm:px-7">
                <div className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-50">
                    <Building2 className="h-4 w-4 text-gray-500" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                      Company type
                    </p>

                    <p className="mt-1.5 break-words text-sm font-semibold text-gray-800">
                      {companyType || "Not provided"}
                    </p>
                  </div>
                </div>
              </div>

              {/* EMPLOYEE SIZE */}
              <div className="px-5 py-5 transition hover:bg-gray-50/60 sm:px-7">
                <div className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-50">
                    <Users className="h-4 w-4 text-gray-500" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                      Number of employees
                    </p>

                    <p className="mt-1.5 text-sm font-semibold text-gray-800">
                      {employeeSize || "Not provided"}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* BUSINESS ADDRESS */}
            <div className="px-5 py-5 transition hover:bg-gray-50/60 sm:px-7">
              <div className="flex gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-50">
                  <MapPin className="h-4 w-4 text-orange-500" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                    Business address
                  </p>

                  <div className="mt-2 rounded-xl border border-gray-100 bg-gray-50/70 p-4 text-sm leading-6 text-gray-700">

                    <p className="font-semibold text-gray-800">
                      {address.line1 || "Not provided"}
                    </p>

                    {address.line2 && (
                      <p>{address.line2}</p>
                    )}

                    <p>
                      {address.city && `${address.city}, `}
                      {address.state && `${address.state}, `}
                      {address.zipcode}
                    </p>

                    <p>{address.country}</p>

                  </div>
                </div>
              </div>
            </div>

            {/* BILLING ADDRESS */}
            <div className="px-5 py-5 transition hover:bg-gray-50/60 sm:px-7">
              <div className="flex gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-purple-50">
                  <CreditCard className="h-4 w-4 text-purple-500" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                    Billing address
                  </p>

                  <div className="mt-2 flex items-center gap-2">
                    {sameAddress && (
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                        <CheckCircle className="h-3.5 w-3.5 text-green-600" />
                      </span>
                    )}

                    <p className="text-sm font-semibold text-gray-800">
                      {sameAddress
                        ? "Same as business address"
                        : "Different billing address"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* INFO MESSAGE */}
        <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/60 px-4 py-3.5 sm:px-5">
          <div className="flex gap-3">
            <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#3b8eea]" />

            <p className="text-xs leading-5 text-gray-600 sm:text-sm">
              Make sure all the information above is correct. You can go back
              and edit your details before submitting.
            </p>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="mt-7 flex flex-col-reverse gap-3 border-t border-gray-200/80 pt-6 sm:flex-row sm:items-center sm:justify-between">

          {/* BACK */}
          <button
            type="button"
            onClick={onBack}
            className="flex h-[44px] w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-6 text-sm font-semibold text-gray-700 transition duration-200 hover:border-gray-300 hover:bg-gray-50 active:scale-[0.98] sm:w-auto"
          >
            <ArrowLeft size={16} />
            Back
          </button>

          {/* SUBMIT */}
          <button
            type="button"
            onClick={onSubmit}
            className="flex h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-[#3b8eea] px-8 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-blue-600 hover:shadow-md active:scale-[0.98] sm:w-auto"
          >
            Submit
            <CheckCircle size={17} />
          </button>

        </div>

      </div>
    </section>
  );
}

export default ConfirmDetails;

