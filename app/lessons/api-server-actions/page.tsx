import Link from "next/link";
import { FeedbackForm } from "./FeedbackForm";
import { revalidatePath } from "next/cache";

// Server Action - runs on the server!
async function submitFeedback(formData: FormData) {
  'use server';

  const name = formData.get('name') as string;
  const message = formData.get('message') as string;

  // Simulate saving to database
  await new Promise(resolve => setTimeout(resolve, 500));

  console.log('Feedback received:', { name, message });

  // Revalidate the page to show success message
  revalidatePath('/lessons/api-server-actions');

  return { success: true, message: 'Feedback submitted!' };
}

export default function ApiServerActionsLesson() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl p-8">
        <h1 className="text-4xl font-bold mb-2">Lesson 4: API Routes & Server Actions</h1>
        <p className="text-orange-100 text-lg">
          Build backend APIs and handle forms without leaving Next.js
        </p>
      </div>

      {/* Key Concept */}
      <section className="bg-white rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 The Power</h2>
        <div className="bg-orange-50 border-l-4 border-orange-600 p-4 mb-4">
          <p className="text-gray-800 mb-2">
            Next.js is a <strong>fullstack framework</strong> - you can build both frontend AND backend in the same project!
          </p>
          <p className="text-gray-800">
            <strong>Route Handlers:</strong> Create API endpoints for external clients<br />
            <strong>Server Actions:</strong> Handle forms and mutations directly from components
          </p>
        </div>
      </section>

      {/* API Routes */}
      <section className="bg-white rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🌐 API Routes (Route Handlers)</h2>

        <div className="space-y-4">
          <p className="text-gray-600">
            Create API endpoints by adding a <code className="bg-gray-100 px-2 py-1 rounded text-sm">route.ts</code> file
            in the <code className="bg-gray-100 px-2 py-1 rounded text-sm">app/api</code> directory.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">File Structure</h3>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm space-y-1">
                <div>app/api/hello/route.ts</div>
                <div className="text-blue-600 ml-4">→ GET /api/hello</div>
                <div>app/api/users/route.ts</div>
                <div className="text-blue-600 ml-4">→ GET /api/users</div>
                <div>app/api/posts/[id]/route.ts</div>
                <div className="text-blue-600 ml-4">→ GET /api/posts/:id</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Example API Route</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`// app/api/hello/route.ts
export async function GET(request: Request) {
  return Response.json({
    message: 'Hello from API!'
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  return Response.json({
    received: body
  });
}`}
              </pre>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <p className="font-semibold text-blue-900 mb-2">Try it yourself:</p>
            <div className="space-y-2 text-sm">
              <div>
                <a
                  href="/api/hello"
                  target="_blank"
                  className="text-blue-600 hover:underline font-mono"
                >
                  /api/hello
                </a>
                <span className="text-gray-600 ml-2">← Click to see the API response!</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Server Actions */}
      <section className="bg-white rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">⚡ Server Actions (The New Way)</h2>

        <div className="space-y-4">
          <p className="text-gray-600">
            Server Actions are functions that run on the server and can be called directly from components.
            Perfect for forms, mutations, and data operations!
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-red-600 mb-3">❌ Old Way (Client-side)</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`'use client';

function Form() {
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    // Client makes API request
    await fetch('/api/submit', {
      method: 'POST',
      body: JSON.stringify({
        name: formData.get('name')
      })
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" />
      <button>Submit</button>
    </form>
  );
}`}
              </pre>
            </div>

            <div>
              <h3 className="font-semibold text-green-600 mb-3">✅ New Way (Server Action)</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`// Server Component
async function submitForm(formData: FormData) {
  'use server'; // This makes it a Server Action!

  const name = formData.get('name');

  // Runs on server - can access DB directly
  await db.users.create({ name });
}

function Form() {
  return (
    <form action={submitForm}>
      <input name="name" />
      <button>Submit</button>
    </form>
  );
}

// Much simpler! 🎉`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Server Action Benefits */}
      <section className="bg-white rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">✨ Why Server Actions Are Awesome</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-semibold text-gray-900 mb-2">Progressive Enhancement</h3>
            <p className="text-sm text-gray-600">Forms work even without JavaScript enabled!</p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold text-gray-900 mb-2">No API Routes Needed</h3>
            <p className="text-sm text-gray-600">Call server code directly from your components</p>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="font-semibold text-gray-900 mb-2">Automatic Serialization</h3>
            <p className="text-sm text-gray-600">No need to manually stringify/parse JSON</p>
          </div>

          <div className="border-l-4 border-orange-500 pl-4">
            <h3 className="font-semibold text-gray-900 mb-2">Type-Safe</h3>
            <p className="text-sm text-gray-600">Full TypeScript support end-to-end</p>
          </div>
        </div>
      </section>

      {/* Live Demo */}
      <section className="bg-white rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🚀 Live Demo: Server Action Form</h2>
        <p className="text-gray-600 mb-4">
          This form uses a Server Action. Notice there's no API route - the action runs directly on the server!
        </p>

        <div className="border-2 border-orange-300 rounded-lg p-6 bg-orange-50">
          <FeedbackForm />
        </div>

        <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-sm text-gray-700">
            <strong>💡 What's happening:</strong> When you submit, the Server Action runs on the server,
            processes the data, and can revalidate the page - all without writing an API route!
          </p>
        </div>
      </section>

      {/* Revalidation */}
      <section className="bg-white rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🔄 Revalidation</h2>

        <p className="text-gray-600 mb-4">
          After mutations, you often want to refresh the data. Next.js provides functions for this:
        </p>

        <div className="space-y-4">
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-semibold text-gray-900 mb-2">revalidatePath()</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`async function createPost(formData: FormData) {
  'use server';

  await db.posts.create({ /* ... */ });

  // Revalidate the posts page
  revalidatePath('/posts');
}`}
            </pre>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold text-gray-900 mb-2">revalidateTag()</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`// Tag your fetch
fetch('...', { next: { tags: ['posts'] } })

// Later, revalidate by tag
async function updatePost() {
  'use server';
  await db.posts.update({ /* ... */ });
  revalidateTag('posts');
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* When to Use What */}
      <section className="bg-white rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🤔 When to Use What?</h2>

        <div className="space-y-4">
          <div className="border-l-4 border-orange-500 pl-4 py-2">
            <h3 className="font-semibold text-gray-900">Use API Routes (Route Handlers) for:</h3>
            <ul className="mt-2 space-y-1 text-gray-700">
              <li>✓ Webhooks from external services</li>
              <li>✓ APIs consumed by mobile apps or other clients</li>
              <li>✓ RESTful endpoints</li>
              <li>✓ Proxy to external APIs</li>
            </ul>
          </div>

          <div className="border-l-4 border-green-500 pl-4 py-2">
            <h3 className="font-semibold text-gray-900">Use Server Actions for:</h3>
            <ul className="mt-2 space-y-1 text-gray-700">
              <li>✓ Form submissions</li>
              <li>✓ Data mutations (create, update, delete)</li>
              <li>✓ Internal server operations</li>
              <li>✓ Operations called directly from your UI</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">💡 Key Takeaways</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-orange-600 font-bold mr-2">✓</span>
            <span>Next.js is fullstack - build APIs and handle forms in the same project</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 font-bold mr-2">✓</span>
            <span>API Routes (<code className="bg-white px-2 py-1 rounded text-sm">route.ts</code>) create REST endpoints</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 font-bold mr-2">✓</span>
            <span>Server Actions (<code className="bg-white px-2 py-1 rounded text-sm">'use server'</code>) let you call server code from components</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 font-bold mr-2">✓</span>
            <span>Use <code className="bg-white px-2 py-1 rounded text-sm">revalidatePath()</code> to refresh data after mutations</span>
          </li>
        </ul>
      </section>

      {/* Navigation */}
      <div className="flex justify-between pt-8">
        <Link
          href="/lessons/data-fetching"
          className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
        >
          ← Previous: Data Fetching
        </Link>
        <Link
          href="/"
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          🎉 Finish & Go Home
        </Link>
      </div>
    </div>
  );
}
