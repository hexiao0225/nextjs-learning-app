import Link from "next/link";
import { ClientCounter } from "./ClientCounter";
import { ServerTime } from "./ServerTime";

// This is a SERVER COMPONENT by default!
export default function ServerClientLesson() {
  // This runs on the server at build time or request time
  const serverMessage = "I was rendered on the server! 🖥️";

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-8">
        <h1 className="text-4xl font-bold mb-2">Lesson 2: Server vs Client Components</h1>
        <p className="text-purple-100 text-lg">
          The most important concept in Next.js - understanding where your code runs
        </p>
      </div>

      {/* Key Concept */}
      <section className="bg-white rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 The Big Idea</h2>
        <div className="bg-purple-50 border-l-4 border-purple-600 p-4 mb-4">
          <p className="text-gray-800 mb-2">
            <strong>In React:</strong> Everything runs in the browser (client-side).
          </p>
          <p className="text-gray-800">
            <strong>In Next.js:</strong> Components are <strong>Server Components by default</strong> and only run on the server.
            You opt-in to client components with <code className="bg-purple-100 px-2 py-1 rounded text-sm">'use client'</code>.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-white rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Server vs Client Components</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-2 border-blue-300 rounded-lg p-6 bg-blue-50">
            <h3 className="font-bold text-blue-900 text-xl mb-3">🖥️ Server Components</h3>
            <div className="text-sm mb-4 font-mono bg-blue-100 px-3 py-2 rounded">
              Default in Next.js - No directive needed
            </div>

            <div className="space-y-3 text-sm">
              <div>
                <div className="font-semibold text-blue-900 mb-1">✅ Can:</div>
                <ul className="space-y-1 ml-4 text-gray-700">
                  <li>• Fetch data directly (no useEffect needed!)</li>
                  <li>• Access backend resources (databases, APIs)</li>
                  <li>• Keep sensitive data on server</li>
                  <li>• Reduce client bundle size</li>
                </ul>
              </div>

              <div>
                <div className="font-semibold text-blue-900 mb-1">❌ Cannot:</div>
                <ul className="space-y-1 ml-4 text-gray-700">
                  <li>• Use useState, useEffect, or other hooks</li>
                  <li>• Use browser APIs (localStorage, window)</li>
                  <li>• Handle click events or user interactions</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-2 border-pink-300 rounded-lg p-6 bg-pink-50">
            <h3 className="font-bold text-pink-900 text-xl mb-3">💻 Client Components</h3>
            <div className="text-sm mb-4 font-mono bg-pink-100 px-3 py-2 rounded">
              'use client' at the top
            </div>

            <div className="space-y-3 text-sm">
              <div>
                <div className="font-semibold text-pink-900 mb-1">✅ Can:</div>
                <ul className="space-y-1 ml-4 text-gray-700">
                  <li>• Use React hooks (useState, useEffect, etc.)</li>
                  <li>• Handle user interactions (onClick, onChange)</li>
                  <li>• Use browser APIs</li>
                  <li>• Access browser-only features</li>
                </ul>
              </div>

              <div>
                <div className="font-semibold text-pink-900 mb-1">❌ Cannot:</div>
                <ul className="space-y-1 ml-4 text-gray-700">
                  <li>• Directly access backend resources</li>
                  <li>• Use server-only code</li>
                  <li>• Access file system or databases</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="bg-white rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">📝 Code Examples</h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-blue-600 mb-3">Server Component (Default)</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`// app/page.tsx
// No 'use client' = Server Component!

export default async function Page() {
  // ✅ Can fetch data directly - runs on server!
  const data = await fetch('https://api.example.com/posts');
  const posts = await data.json();

  // ✅ Can access environment variables
  const apiKey = process.env.SECRET_API_KEY;

  return (
    <div>
      {posts.map(post => (
        <article key={post.id}>{post.title}</article>
      ))}
    </div>
  );
}`}
            </pre>
          </div>

          <div>
            <h3 className="font-semibold text-pink-600 mb-3">Client Component</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`// components/Counter.tsx
'use client'; // ← This makes it a Client Component!

import { useState } from 'react';

export function Counter() {
  // ✅ Can use hooks!
  const [count, setCount] = useState(0);

  // ✅ Can handle events!
  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="bg-white rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🚀 Live Demo</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-2 border-blue-300 rounded-lg p-6 bg-blue-50">
            <h3 className="font-bold text-blue-900 mb-3">Server Component</h3>
            <div className="bg-white p-4 rounded-lg">
              <ServerTime />
            </div>
            <p className="text-sm text-gray-600 mt-3">
              💡 The time above was rendered on the server. Refresh the page to see it update.
              It doesn't change on the client!
            </p>
          </div>

          <div className="border-2 border-pink-300 rounded-lg p-6 bg-pink-50">
            <h3 className="font-bold text-pink-900 mb-3">Client Component</h3>
            <div className="bg-white p-4 rounded-lg">
              <ClientCounter />
            </div>
            <p className="text-sm text-gray-600 mt-3">
              💡 This counter is interactive! It uses useState and onClick - both require client-side JavaScript.
            </p>
          </div>
        </div>
      </section>

      {/* When to Use What */}
      <section className="bg-white rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🤔 When to Use What?</h2>

        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <h3 className="font-semibold text-gray-900">Use Server Components for:</h3>
            <ul className="mt-2 space-y-1 text-gray-700">
              <li>✓ Fetching data</li>
              <li>✓ Accessing backend resources</li>
              <li>✓ Keeping sensitive info on server (API keys, tokens)</li>
              <li>✓ Large dependencies that don't need interactivity</li>
            </ul>
          </div>

          <div className="border-l-4 border-pink-500 pl-4 py-2">
            <h3 className="font-semibold text-gray-900">Use Client Components for:</h3>
            <ul className="mt-2 space-y-1 text-gray-700">
              <li>✓ Interactive UI (buttons, forms, modals)</li>
              <li>✓ Event listeners (onClick, onChange, etc.)</li>
              <li>✓ React hooks (useState, useEffect, etc.)</li>
              <li>✓ Browser APIs (localStorage, geolocation, etc.)</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-gray-800">
            <strong>💡 Pro Tip:</strong> Start with Server Components by default. Only add 'use client' when you need interactivity!
            This keeps your bundle size small and your app fast.
          </p>
        </div>
      </section>

      {/* Composition Pattern */}
      <section className="bg-white rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🎨 Composition Pattern (Advanced)</h2>
        <p className="text-gray-600 mb-4">You can nest Server Components inside Client Components using the children pattern:</p>

        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`// ✅ Good: Server component as children
<ClientWrapper>
  <ServerComponent />  {/* Still runs on server! */}
</ClientWrapper>

// ❌ Bad: Importing server component in client component
'use client';
import ServerComponent from './server-component'; // Won't work!`}
        </pre>
      </section>

      {/* Key Takeaways */}
      <section className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">💡 Key Takeaways</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-purple-600 font-bold mr-2">✓</span>
            <span><strong>Server Components are the default</strong> - no directive needed</span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-600 font-bold mr-2">✓</span>
            <span>Add <code className="bg-white px-2 py-1 rounded text-sm">'use client'</code> only when you need interactivity or hooks</span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-600 font-bold mr-2">✓</span>
            <span>Server Components can fetch data directly - no useEffect needed!</span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-600 font-bold mr-2">✓</span>
            <span>Client Components handle user interactions and use React hooks</span>
          </li>
        </ul>
      </section>

      {/* Navigation */}
      <div className="flex justify-between pt-8">
        <Link
          href="/lessons/routing"
          className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
        >
          ← Previous: Routing
        </Link>
        <Link
          href="/lessons/data-fetching"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Data Fetching →
        </Link>
      </div>
    </div>
  );
}
