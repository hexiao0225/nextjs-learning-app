// Server Component that fetches data
export async function PostsList() {
  // Simulate a delay to show Suspense in action
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Fetch real data from JSONPlaceholder API
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5', {
    cache: 'no-store' // Always fetch fresh for demo purposes
  });

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  const posts = await res.json();

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-900">Latest Posts from API</h3>
        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Server Component</span>
      </div>

      {posts.map((post: { id: number; title: string; body: string }) => (
        <div key={post.id} className="bg-white p-4 rounded-lg border border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-1">{post.title}</h4>
          <p className="text-sm text-gray-600 line-clamp-2">{post.body}</p>
        </div>
      ))}

      <div className="text-xs text-gray-500 text-center pt-2">
        Fetched from jsonplaceholder.typicode.com using async/await
      </div>
    </div>
  );
}
