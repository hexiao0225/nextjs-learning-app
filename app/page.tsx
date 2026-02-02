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
            Coming from React? This tutorial is built for you! 🚀
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

        {/* Author Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-100">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Connect With the Author
            </h3>
            <p className="text-gray-600 mb-6">
              Have questions or feedback? Feel free to reach out and connect!
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/hexiao0225"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/xiaohe0225/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
