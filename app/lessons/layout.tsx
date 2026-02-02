import Link from "next/link";

export default function LessonsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const lessons = [
    { title: "Routing", slug: "routing" },
    { title: "Server vs Client", slug: "server-client" },
    { title: "Data Fetching", slug: "data-fetching" },
    { title: "API & Server Actions", slug: "api-server-actions" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold text-blue-600 hover:text-blue-700"
          >
            ← Next.js Learning
          </Link>
          <div className="flex gap-4">
            {lessons.map((lesson) => (
              <Link
                key={lesson.slug}
                href={`/lessons/${lesson.slug}`}
                className="text-sm text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                {lesson.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        {children}
      </main>
    </div>
  );
}
