import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Header from "./components/Header";
import Stepper from "./components/Stepper";
import FormField from "./components/FormField";
import CompanyType from "./components/CompanyType";
import EmployeeSize from "./components/EmployeeSize";
import BusinessAddress from "./components/BusinessAddress";
import ConfirmDetails from "./components/ConfirmDetails";
import Success from "./components/Success";

function App() {
  const [businessTitle, setBusinessTitle] = useState("");
  const [description, setDescription] = useState("");
  const [companyType, setCompanyType] = useState(
    "LLC / Partnership / Single-member"
  );
  const [employeeSize, setEmployeeSize] = useState("1-20");
  const [address, setAddress] = useState({
    country: "",
    line1: "",
    line2: "",
    city: "",
    state: "",
    zipcode: "",
  });
  const [sameAddress, setSameAddress] = useState(true);
  const [currentStep, setCurrentStep] = useState(2);
  const [submitted, setSubmitted] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors] = useState({});
      // Continue =============== //
 const handleContinue = () => {
  const newErrors = {};

  if (!businessTitle.trim()) {
    newErrors.businessTitle = "Business title is required";
  }

  if (!description.trim()) {
    newErrors.description = "Description is required";
  }

  if (!address.country.trim()) {
    newErrors.country = "Country is required";
  }

  if (!address.line1.trim()) {
    newErrors.line1 = "Address is required";
  }

  if (!address.city.trim()) {
    newErrors.city = "City is required";
  }

  if (!address.state.trim()) {
    newErrors.state = "State is required";
  }

  if (!address.zipcode.trim()) {
    newErrors.zipcode = "Zipcode is required";
  }

  setErrors(newErrors);

  if (Object.keys(newErrors).length > 0) {
    return;
  }

  setShowConfirm(true);
};

const handleBack = () => {
  setShowConfirm(false);
};

const handleSubmit = () => {
  setSubmitted(true);
};
if (submitted) {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Header 
      onBack={() => window.location.href = "/"}/>
      <Success
        onBack={() => {
          setSubmitted(false);
          setCurrentStep(2);
        }}
      />
    </div>
  );
}

if (showConfirm) {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Header />

      <main className="mx-auto flex w-full max-w-[1240px] flex-col px-4 pb-12 pt-6 sm:px-8 sm:pt-8 lg:flex-row lg:gap-14 lg:px-12 lg:pt-14">
        <Stepper currentStep={2} />

        <ConfirmDetails
          businessTitle={businessTitle}
          description={description}
          companyType={companyType}
          employeeSize={employeeSize}
          address={address}
          sameAddress={sameAddress}
          onBack={handleBack}
          onSubmit={handleSubmit}
        />
      </main>
    </div>
  );
}
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* HEADER */}
      <Header />

      {/* MAIN CONTAINER */}
      <main className="mx-auto flex w-full max-w-[1240px] flex-col px-4 pb-12 pt-6 sm:px-8 sm:pt-8 lg:flex-row lg:gap-14 lg:px-12 lg:pt-14">
        {/* STEPPER */}
        <Stepper currentStep={currentStep} />

        {/* FORM SECTION */}
        <section className="min-w-0 w-full flex-1">
          <div className="mx-auto w-full max-w-[420px] sm:max-w-[620px] lg:mx-0 lg:max-w-[680px]">
            {/* TITLE */}
            <h1 className="mb-6 text-2xl font-bold tracking-tight text-[#303c4a] sm:mb-8 sm:text-3xl">
               About your business
            </h1>

            {/* FORM FIELDS */}
            <div className="space-y-4 sm:space-y-5 lg:space-y-6">
              {/* Business Title */}
              <FormField label="Your business title">
                <input
                  type="text"
                  placeholder="Text input"
                  value={businessTitle}
                  onChange={(e) => {
                      setBusinessTitle(e.target.value);
                
                      if (e.target.value.trim()) {
                        setErrors((prev) => ({
                          ...prev,
                          businessTitle: false,
                        }));
                      }
                     }}
                  className={`h-[40px] w-full rounded-md border bg-white px-3 text-xs font-medium text-gray-700 outline-none transition sm:h-[42px] sm:rounded-lg sm:px-4 sm:text-sm ${
                        errors.businessTitle
                          ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-50"
                          : "border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                      }`}                   
                  />
                  {errors.businessTitle && (
                      <p className="mt-1.5 text-xs font-medium text-red-500">
                        Business title is required
                      </p>
                  )}
              </FormField> 

              {/* Description */}
              <FormField
                label={
                  <>
                    Description of
                    <br className="hidden sm:block " />
                    business conducted
                  </>
                }
                description="Helpful description"
              >
                <textarea
                    value={description}
                    placeholder=""
                    onChange={(e) => setDescription(e.target.value)}
                    rows={3}
                    className={`min-h-[76px] w-full resize-none rounded-md border bg-white px-3 py-2 text-xs text-gray-700 outline-none sm:min-h-[82px] sm:rounded-lg sm:px-4 sm:py-2.5 sm:text-sm ${
                      errors.description
                        ? "border-red-400 focus:border-red-500"
                        : "border-gray-200 focus:border-blue-500"
                    }`}
                  />
                  {errors.description && (
                    <p className="mt-1.5 text-xs font-medium text-red-500">
                      {errors.description}
                    </p>
                  )}
              </FormField>

              {/* Company Type */}
              <FormField
                label="Company type"
                description="Helpful description"
              >
                <CompanyType
                  value={companyType}
                  onChange={setCompanyType}
                />
              </FormField>

              {/* Number of Employees */}
              <FormField
                label={
                  <>
                    Number of
                    <br className="hidden sm:block" />
                    employees
                  </>
                }
                description="Helpful description"
              >
                <EmployeeSize
                  value={employeeSize}
                  onChange={setEmployeeSize}
                />
              </FormField>

              {/* Business Address */}
              <FormField
                label="Business address"
                description="Helpful description"
              >
                <BusinessAddress
                  address={address}
                  setAddress={setAddress}
                  errors={errors}
                />
              </FormField>

              {/* Billing Address */}
              <FormField
                label="Billing address"
                description="Helpful description"
              >
                <label className="flex cursor-pointer items-center gap-2 text-xs font-medium text-gray-700 sm:text-sm">
                  <input
                    type="checkbox"
                    checked={sameAddress}
                    onChange={(e) => setSameAddress(e.target.checked)}
                    className="h-4 w-4 cursor-pointer accent-blue-500"
                  />
                  <span>Same as business address</span>
                </label>
              </FormField>
            </div>

            {/* BUTTONS */}
            <div className="mt-8 border-t border-gray-200/80 pt-6 sm:mt-10 sm:pt-7">
              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={handleContinue}
                  className="flex h-[42px] w-full items-center justify-center gap-2 rounded-md bg-[#3b8eea] text-xs font-medium text-white transition hover:bg-blue-600 sm:w-[240px] sm:text-sm"
                >
                  Continue
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
