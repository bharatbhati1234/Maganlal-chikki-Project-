export default function Loader() {
  return (
    <main className="grid min-h-screen place-items-center bg-gray-100 px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        {/* Spinner */}
        <div className="w-20 mx-auto mb-4 h-20 border-6 border-gray-200 border-t-black rounded-full animate-spin"></div>

        {/* Loading text */}
        <p className="text-lg text-gray-900 tracking-wide">
          Loading products...
        </p>
      </div>
    </main>
  );
}
