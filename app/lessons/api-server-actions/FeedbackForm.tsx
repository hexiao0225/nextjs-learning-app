'use client';

import { useState } from 'react';

export function FeedbackForm() {
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsPending(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const message = formData.get('message') as string;

    // Simulate server action
    await new Promise(resolve => setTimeout(resolve, 1000));

    // In a real app, this would call a Server Action
    // For demo purposes, we'll just show success
    setStatus({
      type: 'success',
      message: `Thank you, ${name}! Your feedback has been received.`
    });
    setIsPending(false);

    // Reset form
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-1">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-1">
          Feedback
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          placeholder="What do you think about Next.js so far?"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed font-semibold"
      >
        {isPending ? 'Submitting...' : 'Submit Feedback'}
      </button>

      {status && (
        <div
          className={`p-4 rounded-lg ${
            status.type === 'success'
              ? 'bg-green-50 border border-green-200 text-green-800'
              : 'bg-red-50 border border-red-200 text-red-800'
          }`}
        >
          {status.message}
        </div>
      )}

      <div className="text-xs text-gray-500 text-center">
        💡 This form demonstrates how Server Actions handle form submissions
      </div>
    </form>
  );
}
