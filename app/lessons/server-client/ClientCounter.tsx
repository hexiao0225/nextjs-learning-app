'use client';

import { useState } from 'react';

export function ClientCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className="space-y-4">
      <div className="text-center">
        <div className="text-4xl font-bold text-pink-600 mb-2">{count}</div>
        <div className="text-sm text-gray-600">Click count</div>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setCount(count + 1)}
          className="flex-1 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(0)}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
        >
          Reset
        </button>
      </div>

      <div className="text-xs text-gray-500 text-center font-mono">
        'use client' component with useState
      </div>
    </div>
  );
}
