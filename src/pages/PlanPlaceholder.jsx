import { Link } from "react-router-dom";

export default function PlanPlaceholder() {
  return (
    <div className="min-h-screen bg-[#050907] px-6 py-16 text-center text-white">
      <h1 className="text-2xl font-bold text-lime-400">Plan</h1>
      <p className="mt-4 text-gray-400">
        This route is used after generating a plan from the information page when the
        backend is connected or when running in local fallback mode.
      </p>
      <Link to="/information" className="mt-8 inline-block text-lime-400 underline">
        Back to information
      </Link>
    </div>
  );
}
