export default function ProductDetailSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl w-full animate-pulse">
        <div className="border border-primary-200 rounded-lg p-6 shadow-lg bg-white dark:bg-primary-800">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="h-80 bg-gray-300 rounded mx-auto w-80"></div>
            <div className="space-y-4">
              <div className="h-8 bg-gray-300 rounded w-3/4"></div>
              <div className="h-6 bg-gray-300 rounded w-1/2"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
              </div>
              <div className="h-6 bg-gray-300 rounded w-1/4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}