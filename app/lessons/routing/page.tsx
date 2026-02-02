import Link from "next/link";

export default function RoutingLesson() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8">
        <h1 className="text-4xl font-bold mb-2">Lesson 1: App Router & File-based Routing</h1>
        <p className="text-blue-100 text-lg">
          Learn how Next.js creates routes automatically based on your folder structure
        </p>
      </div>

      {/* Key Concept */}
      <section className="bg-white rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 Key Concept</h2>
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-4">
          <p className="text-gray-800">
            In Next.js, you don't need React Router. The <code className="bg-blue-100 px-2 py-1 rounded text-sm">app</code> folder structure IS your routing.
            Each folder becomes a route segment, and <code className="bg-blue-100 px-2 py-1 rounded text-sm">page.tsx</code> files define the UI.
          </p>
        </div>
      </section>

      {/* Coming from React */}
      <section className="bg-white rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🔄 Coming from React?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-red-600 mb-3">❌ React Router (Old Way)</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}`}
            </pre>
          </div>
          <div>
            <h3 className="font-semibold text-green-600 mb-3">✅ Next.js (New Way)</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`// Just create folders & files!

app/
  page.tsx              → /
  about/
    page.tsx            → /about
  blog/
    [id]/
      page.tsx          → /blog/:id

// No router config needed! 🎉`}
            </pre>
          </div>
        </div>
      </section>

      {/* File Structure */}
      <section className="bg-white rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">📁 File Structure Examples</h2>

        <div className="space-y-6">
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-semibold text-gray-900 mb-2">1. Basic Routes</h3>
            <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm space-y-1">
              <div>app/page.tsx → <span className="text-blue-600">/</span></div>
              <div>app/about/page.tsx → <span className="text-blue-600">/about</span></div>
              <div>app/contact/page.tsx → <span className="text-blue-600">/contact</span></div>
            </div>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold text-gray-900 mb-2">2. Dynamic Routes</h3>
            <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm space-y-1">
              <div>app/blog/[slug]/page.tsx → <span className="text-blue-600">/blog/my-post</span></div>
              <div>app/products/[id]/page.tsx → <span className="text-blue-600">/products/123</span></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              📝 Use <code className="bg-gray-200 px-1 rounded">[param]</code> for dynamic segments
            </p>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="font-semibold text-gray-900 mb-2">3. Nested Routes</h3>
            <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm space-y-1">
              <div>app/dashboard/page.tsx → <span className="text-blue-600">/dashboard</span></div>
              <div>app/dashboard/settings/page.tsx → <span className="text-blue-600">/dashboard/settings</span></div>
              <div>app/dashboard/profile/page.tsx → <span className="text-blue-600">/dashboard/profile</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Files */}
      <section className="bg-white rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">⚡ Special Files in Next.js</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <code className="text-blue-600 font-semibold">page.tsx</code>
            <p className="text-sm text-gray-600 mt-1">Defines the UI for a route (this makes it publicly accessible)</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <code className="text-blue-600 font-semibold">layout.tsx</code>
            <p className="text-sm text-gray-600 mt-1">Shared UI that wraps multiple pages (nav, sidebar, etc.)</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <code className="text-blue-600 font-semibold">loading.tsx</code>
            <p className="text-sm text-gray-600 mt-1">Loading UI shown while page content is loading</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <code className="text-blue-600 font-semibold">error.tsx</code>
            <p className="text-sm text-gray-600 mt-1">Error UI shown when something goes wrong</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <code className="text-blue-600 font-semibold">not-found.tsx</code>
            <p className="text-sm text-gray-600 mt-1">404 UI for this route segment</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <code className="text-blue-600 font-semibold">route.ts</code>
            <p className="text-sm text-gray-600 mt-1">API endpoint (backend route handler)</p>
          </div>
        </div>
      </section>

      {/* Live Example */}
      <section className="bg-white rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🚀 See It In Action</h2>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
          <p className="text-gray-800">
            <strong>Try this:</strong> Notice the URL when you navigate between lessons?
            That's file-based routing! This lessons layout is at <code className="bg-yellow-100 px-2 py-1 rounded text-sm">app/lessons/layout.tsx</code>
            and this page is at <code className="bg-yellow-100 px-2 py-1 rounded text-sm">app/lessons/routing/page.tsx</code>
          </p>
        </div>

        <div className="space-y-3">
          <Link
            href="/"
            className="block p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all"
          >
            <div className="font-semibold text-gray-900">Go to Home</div>
            <div className="text-sm text-gray-600">Route: <code>/</code> → File: <code>app/page.tsx</code></div>
          </Link>

          <Link
            href="/lessons/server-client"
            className="block p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all"
          >
            <div className="font-semibold text-gray-900">Next Lesson: Server vs Client Components</div>
            <div className="text-sm text-gray-600">Route: <code>/lessons/server-client</code> → File: <code>app/lessons/server-client/page.tsx</code></div>
          </Link>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">💡 Key Takeaways</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-green-600 font-bold mr-2">✓</span>
            <span>Folders define route segments, <code className="bg-white px-2 py-1 rounded text-sm">page.tsx</code> makes them accessible</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 font-bold mr-2">✓</span>
            <span>Use <code className="bg-white px-2 py-1 rounded text-sm">[param]</code> brackets for dynamic routes</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 font-bold mr-2">✓</span>
            <span><code className="bg-white px-2 py-1 rounded text-sm">layout.tsx</code> wraps child pages and persists across navigation</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 font-bold mr-2">✓</span>
            <span>No need for React Router - the file system IS your router!</span>
          </li>
        </ul>
      </section>

      {/* Navigation */}
      <div className="flex justify-between pt-8">
        <Link
          href="/"
          className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
        >
          ← Back to Home
        </Link>
        <Link
          href="/lessons/server-client"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Server vs Client →
        </Link>
      </div>
    </div>
  );
}
