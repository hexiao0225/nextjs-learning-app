import Link from "next/link";
import { Suspense } from "react";
import { PostsList } from "./PostsList";
import { LoadingSkeleton } from "./LoadingSkeleton";

export default function DataFetchingLesson() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl p-8">
        <h1 className="text-4xl font-bold mb-2">Lesson 3: Data Fetching Patterns</h1>
        <p className="text-green-100 text-lg">
          Learn the powerful ways Next.js fetches and caches data
        </p>
      </div>

      {/* Key Concept */}
      <section className="bg-white rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 The Revolution</h2>
        <div className="bg-green-50 border-l-4 border-green-600 p-4 mb-4">
          <p className="text-gray-800 mb-2">
            <strong>In React:</strong> You fetch data with useEffect, manage loading states, handle errors manually.
          </p>
          <p className="text-gray-800">
            <strong>In Next.js:</strong> Server Components can fetch data directly with async/await. No useEffect needed!
            Plus, you get automatic caching, streaming, and suspense.
          </p>
        </div>
      </section>

      {/* Coming from React */}
      <section className="bg-white rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🔄 Coming from React?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-red-600 mb-3">❌ React Way (Client-side)</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}`}
            </pre>
          </div>
          <div>
            <h3 className="font-semibold text-green-600 mb-3">✅ Next.js Way (Server-side)</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`// This is a Server Component!
async function Posts() {
  // Fetch directly - runs on server
  const res = await fetch(
    'https://api.example.com/posts'
  );
  const posts = await res.json();

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}

// So much simpler! 🎉`}
            </pre>
          </div>
        </div>
      </section>

      {/* Data Fetching Methods */}
      <section className="bg-white rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">📊 Data Fetching Methods</h2>

        <div className="space-y-6">
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-semibold text-gray-900 mb-2">1. Server Component Fetch (Recommended)</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`// Server Component - no 'use client'
async function Page() {
  const res = await fetch('https://api.example.com/data', {
    cache: 'force-cache' // Default: cached automatically
  });
  const data = await res.json();

  return <div>{data.title}</div>;
}`}
            </pre>
            <p className="text-sm text-gray-600 mt-2">
              ✅ Runs on server, automatic caching, better performance
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold text-gray-900 mb-2">2. Dynamic Data (Always Fresh)</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`async function Page() {
  const res = await fetch('https://api.example.com/data', {
    cache: 'no-store' // Don't cache - always fetch fresh
  });
  const data = await res.json();

  return <div>{data.title}</div>;
}`}
            </pre>
            <p className="text-sm text-gray-600 mt-2">
              ⚡ Good for real-time data, user-specific content
            </p>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="font-semibold text-gray-900 mb-2">3. Revalidate (Time-based Cache)</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`async function Page() {
  const res = await fetch('https://api.example.com/data', {
    next: { revalidate: 60 } // Revalidate every 60 seconds
  });
  const data = await res.json();

  return <div>{data.title}</div>;
}`}
            </pre>
            <p className="text-sm text-gray-600 mt-2">
              🔄 Best of both: cached but refreshes periodically
            </p>
          </div>

          <div className="border-l-4 border-orange-500 pl-4">
            <h3 className="font-semibold text-gray-900 mb-2">4. Client-Side Fetch (When Needed)</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`'use client';
import { useEffect, useState } from 'react';

function Component() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(setData);
  }, []);

  return <div>{data?.title}</div>;
}`}
            </pre>
            <p className="text-sm text-gray-600 mt-2">
              💻 Use only when you need client-side interactivity
            </p>
          </div>
        </div>
      </section>

      {/* Streaming and Suspense */}
      <section className="bg-white rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">⚡ Streaming with Suspense</h2>
        <p className="text-gray-600 mb-4">
          Show instant UI while data loads in the background - no loading spinners needed!
        </p>

        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto mb-4">
{`import { Suspense } from 'react';

function Page() {
  return (
    <div>
      <h1>Posts</h1>

      {/* Show fallback while Posts loads */}
      <Suspense fallback={<LoadingSkeleton />}>
        <Posts />  {/* This component fetches data */}
      </Suspense>
    </div>
  );
}`}
        </pre>

        <div className="bg-green-50 p-4 rounded-lg">
          <p className="font-semibold text-green-900 mb-2">Why this is amazing:</p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>✓ Page renders immediately (h1 shows right away)</li>
            <li>✓ Posts stream in when ready</li>
            <li>✓ No blocking - rest of page is interactive</li>
            <li>✓ Better perceived performance</li>
          </ul>
        </div>
      </section>

      {/* Live Demo */}
      <section className="bg-white rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🚀 Live Demo</h2>
        <p className="text-gray-600 mb-4">
          This component fetches real data from JSONPlaceholder API using Suspense:
        </p>

        <div className="border-2 border-green-300 rounded-lg p-6 bg-green-50">
          <Suspense fallback={<LoadingSkeleton />}>
            <PostsList />
          </Suspense>
        </div>

        <p className="text-sm text-gray-500 mt-3">
          💡 Notice how the page loaded instantly, then the posts appeared?
          That's Suspense + server-side data fetching in action!
        </p>
      </section>

      {/* Caching Strategies */}
      <section className="bg-white rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">💾 Caching Cheat Sheet</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-3 font-semibold">Pattern</th>
                <th className="text-left p-3 font-semibold">When to Use</th>
                <th className="text-left p-3 font-semibold">Code</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="p-3 font-semibold">Static</td>
                <td className="p-3">Blog posts, docs, marketing pages</td>
                <td className="p-3"><code className="bg-gray-100 px-2 py-1 rounded text-xs">cache: 'force-cache'</code></td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Dynamic</td>
                <td className="p-3">User dashboards, real-time data</td>
                <td className="p-3"><code className="bg-gray-100 px-2 py-1 rounded text-xs">cache: 'no-store'</code></td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Revalidate</td>
                <td className="p-3">News, social feeds, product data</td>
                <td className="p-3"><code className="bg-gray-100 px-2 py-1 rounded text-xs">next: {`{ revalidate: 60 }`}</code></td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">On-demand</td>
                <td className="p-3">After form submit, data update</td>
                <td className="p-3"><code className="bg-gray-100 px-2 py-1 rounded text-xs">revalidatePath('/page')</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">💡 Key Takeaways</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-600 font-bold mr-2">✓</span>
            <span>Server Components can use <code className="bg-white px-2 py-1 rounded text-sm">async/await</code> directly - no useEffect!</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 font-bold mr-2">✓</span>
            <span>Data is cached by default - use <code className="bg-white px-2 py-1 rounded text-sm">cache: 'no-store'</code> for dynamic data</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 font-bold mr-2">✓</span>
            <span>Use Suspense to stream data and show instant loading states</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 font-bold mr-2">✓</span>
            <span>Choose caching strategy based on how often your data changes</span>
          </li>
        </ul>
      </section>

      {/* Navigation */}
      <div className="flex justify-between pt-8">
        <Link
          href="/lessons/server-client"
          className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
        >
          ← Previous: Server vs Client
        </Link>
        <Link
          href="/lessons/api-server-actions"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: API & Server Actions →
        </Link>
      </div>
    </div>
  );
}
