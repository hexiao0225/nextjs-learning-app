export function LoadingSkeleton() {
  return (
    <div className="space-y-3 animate-pulse">
      <div className="flex items-center justify-between mb-4">
        <div className="h-6 bg-gray-200 rounded w-48"></div>
        <div className="h-5 bg-gray-200 rounded w-24"></div>
      </div>

      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6 mt-1"></div>
        </div>
      ))}

      <div className="text-xs text-gray-400 text-center pt-2">
        Loading posts...
      </div>
    </div>
  );
}
