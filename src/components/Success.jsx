import { CheckCircle } from "lucide-react";

function Success() {
  return (
    <main className="flex min-h-[calc(100vh-70px)] items-center justify-center px-4 py-10">
      <div className="w-full max-w-[500px] rounded-2xl bg-white px-6 py-10 text-center shadow-sm sm:px-10">

        {/* SUCCESS ICON */}
        <div className="mb-5 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle
              size={38}
              className="text-green-500"
            />
          </div>
        </div>

        {/* TITLE */}
        <h1 className="text-2xl font-semibold text-[#303c4a] sm:text-3xl">
          Your account created successfully
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-3 text-sm leading-6 text-gray-500">
          Your business information has been submitted successfully.
        </p>

        {/* BUTTON */}

      </div>
    </main>
  );
}

export default Success;