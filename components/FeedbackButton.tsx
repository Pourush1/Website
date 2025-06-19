"use client";

import { useEffect, useState } from "react";

export default function FeedbackButton() {
  const [sentryLoaded, setSentryLoaded] = useState(false);

  useEffect(() => {
    // Check if Sentry is loaded
    const checkSentry = () => {
      if (typeof window !== "undefined" && (window as any).Sentry) {
        setSentryLoaded(true);
      }
    };
    // check immediately
    checkSentry();
    // Also check after a delay in case Sentry loads asynchronously
    const timer = setTimeout(checkSentry, 2000);
    return () => clearTimeout(timer);
  }, []);

  const openFeedback = () => {
    if (typeof window !== "undefined" && (window as any).Sentry) {
      const client = (window as any).Sentry.getClient();
      if (client) {
        const feedbackIntegration = client.getIntegration(
          (window as any).Sentry.feedbackIntegration
        );
        if (feedbackIntegration) {
          feedbackIntegration.openDialog();
        } else {
          console.warn("Feedback integration not found");
        }
      }
    }
  };

  if (!sentryLoaded) {
    return null;
  }

  return (
    <button
      onClick={openFeedback}
      className="fixed bottom-4 right-4 z-50 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
      title="Send Feedback"
      aria-label="Send Feedback"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"
          fill="currentColor"
        />
        <path d="M7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z" fill="white" />
      </svg>
    </button>
  );
}
