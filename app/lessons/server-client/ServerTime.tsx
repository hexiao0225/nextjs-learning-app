// This is a Server Component (no 'use client')
export function ServerTime() {
  // This code runs on the server
  const serverTime = new Date().toLocaleString();

  return (
    <div className="space-y-4">
      <div className="text-center">
        <div className="text-2xl font-bold text-blue-600 mb-2">{serverTime}</div>
        <div className="text-sm text-gray-600">Server render time</div>
      </div>

      <div className="bg-blue-50 p-3 rounded text-sm text-gray-700">
        <p className="mb-2">
          This timestamp was generated on the <strong>server</strong> when this page was rendered.
        </p>
        <p className="text-xs text-gray-500">
          Try refreshing the page - the time will update because the server re-renders.
          But it won't update on its own like a client component would!
        </p>
      </div>

      <div className="text-xs text-gray-500 text-center font-mono">
        Server Component (no 'use client')
      </div>
    </div>
  );
}
