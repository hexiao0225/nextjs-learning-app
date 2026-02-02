import Link from "next/link";

export default function Home() {
  const lessons = [
    {
      id: 1,
      title: "App Router & File-based Routing",
      description: "Learn how Next.js uses the file system to create routes, layouts, and pages",
      slug: "routing",
      topics: ["File-based routing", "Dynamic routes", "Route groups", "Layouts"]
    },
    {
      id: 2,
      title: "Server vs Client Components",
      description: "Understand the difference between Server and Client Components and when to use each",
      slug: "server-client",
      topics: ["Server Components (default)", "Client Components with 'use client'", "When to use each", "Component composition"]
    },
    {
      id: 3,
      title: "Data Fetching Patterns",
      description: "Master different ways to fetch and cache data in Next.js",
      slug: "data-fetching",
      topics: ["Server-side data fetching", "Streaming and Suspense", "Client-side fetching", "Caching strategies"]
    },
    {
      id: 4,
      title: "API Routes & Server Actions",
      description: "Build backend APIs and handle form submissions with Server Actions",
      slug: "api-server-actions",
      topics: ["Route Handlers (API Routes)", "Server Actions", "Form handling", "Revalidation"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Next.js Learning Path
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A hands-on guide to mastering Next.js for React developers
          </p>
          <div className="mt-4 text-sm text-gray-500">
            Coming from React + Ant Design? This tutorial is built for you! 🚀
          </div>
        </header>

        {/* Lessons Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {lessons.map((lesson) => (
            <Link
              key={lesson.id}
              href={`/lessons/${lesson.slug}`}
              className="group block p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm">
                    {lesson.id}
                  </span>
                  <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {lesson.title}
                  </h2>
                </div>
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>

              <p className="text-gray-600 mb-4">
                {lesson.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {lesson.topics.map((topic) => (
                  <span
                    key={topic}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        {/* Info Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            What You'll Learn
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Key Differences from React</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Server-first architecture with Server Components
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  File-based routing vs React Router
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Built-in API routes and backend capabilities
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">What You'll Build</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Interactive examples for each concept
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Working demos you can modify and experiment with
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Real-world patterns and best practices
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
