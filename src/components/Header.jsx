import { ArrowLeft } from "lucide-react";

function Header({onBack}) {
  return (
    <header className="h-[52px] border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-full max-w-[1400px] items-center px-4 sm:px-6 lg:px-10">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-gray-700 transition hover:bg-gray-100"
        >
          <ArrowLeft size={18} />
          <span>Back to dashboard</span>
        </button>
      </div>
    </header>
  );
}
export default Header;