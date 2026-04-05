"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="max-w-xl mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
        Something went wrong
      </h1>
      <p className="text-gray-600 mb-8">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={reset}
        className="inline-block bg-amber-700 text-white font-bold px-6 py-3 rounded-lg hover:bg-amber-800"
      >
        Try again
      </button>
    </div>
  );
}
