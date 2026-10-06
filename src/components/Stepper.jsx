import { Check, Circle } from "lucide-react";

const steps = [
  "Create account",
  "Confirm details",
];

function Stepper({ currentStep = 2 }) {
  return (
    <>
      {/* ================= DESKTOP ================= */}

      <aside className="hidden w-[270px] shrink-0 lg:block">

        <div className="relative">

          {steps.map((step, index) => {

            const number = index + 1;
            const completed = number < currentStep;
            const active = number === currentStep;

            return (
              <div
                key={step}
                className="relative flex min-h-[54px]"
              >
                {index < steps.length - 1 && (
                  <div
                    className={` absolute left-[14px] top-[29px] h-[40px] w-[2px]
                      ${
                        completed
                          ? "bg-blue-500"
                          : "bg-gray-200"
                      }
                    `}
                  />
                )}
                <div
                  className={` relative z-10 flex h-[30px] w-[30px] shrink-0 items-center 
                    justify-center rounded-full border-2 bg-white
                    ${
                      completed
                        ? "border-blue-500 text-blue-500"
                        : active
                        ? "border-blue-500 bg-blue-500 text-white"
                        : "border-gray-200"
                    }
                  `}
                >
                  {completed ? (
                    <Check size={16} />
                  ) : active ? (
                    <Circle
                      size={8}
                      fill="white"
                    />
                  ) : (
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-200" />
                  )}
                </div>
                <span
                  className={`
                    ml-4
                    pt-1
                    text-sm

                    ${
                      active
                        ? "font-semibold text-gray-800"
                        : "text-gray-600"
                    }
                  `}
                >
                  {step}
                </span>

              </div>
            );
          })}

        </div>

      </aside>

      {/* ================= MOBILE / TABLET ================= */}

      <div className=" mb-10 block w-full lg:hidden">

        <div className="relative w-full">

          {/* Gray line */}

          <div className=" absolute left-[14px] right-[14px] top-[13px] h-[2px] bg-[#e5e7eb]"/>


          {/* Blue line */}

          <div className=" absolute left-[14px] top-[13px] h-[2px] bg-[#3b8eea]"
            style={{
              width: `calc(${((currentStep - 1) /
                (steps.length - 1)) *
                100}% - 14px)`,
            }}
          />

          {/* Steps */}

          <div className=" relative flex w-full items-start justify-between">

            {steps.map((step, index) => {

              const number = index + 1;

              const completed =
                number < currentStep;

              const active =
                number === currentStep;

              return (
                <div
                  key={step}
                  className=" relative flex w-[28px] shrink-0 flex-col items-center">

                  {/* Circle */}

                  <div
                    className={` relative z-10 flex h-[28px] w-[28px] items-center justify-center
                       rounded-full border-2 bg-[#f8fafc]

                      ${
                        completed || active
                          ? "border-[#3b8eea]"
                          : "border-[#e5e7eb]"
                      }
                    `}
                  >

                    {completed && (
                      <Check
                        size={14}
                        className="text-[#3b8eea]"
                      />
                    )}

                    {active && (
                      <span className="h-[8px] w-[8px] rounded-full bg-[#3b8eea]" />
                    )}

                  </div>

                  {/* Active text */}

                  {active && (
                    <span
                      className=" absolute top-[35px] whitespace-nowrap text-[10px] font-semibold
                      text-[#202832] sm:text-[11px]"
                    >
                      {step}
                    </span>
                  )}

                </div>
              );
            })}

          </div>
        </div>
      </div>
    </>
  );
}

export default Stepper;