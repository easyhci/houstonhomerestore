import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Page Not Found</h1>
      <p className="text-gray-600 mb-8">
        This page doesn&apos;t exist. Use the navigation to find what you&apos;re looking for.
      </p>
      <Link
        href="/"
        className="inline-block bg-amber-700 text-white font-bold px-6 py-3 rounded-lg hover:bg-amber-800"
      >
        Go to Homepage
      </Link>
    </div>
  );
}
