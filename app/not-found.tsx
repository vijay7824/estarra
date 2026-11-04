import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <h1 className="text-4xl font-bold text-gray-900 font-serif">404 - Page Not Found</h1>
      <p className="mt-4 text-gray-600">The page you are looking for does not exist.</p>
      <Link 
        href="/" 
        className="mt-6 inline-block rounded-full bg-primary-600 px-6 py-2.5 text-white font-medium hover:bg-primary-700 transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
}
