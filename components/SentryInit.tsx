"use client";

import { useEffect } from "react";

export default function SentryInit() {
  useEffect(() => {
    const initSentry = async () => {
      try {
        await import("../sentry.client.config");
        console.log("Sentry initialized successfully");
      } catch (error) {
        console.error("Failed to initialize Sentry:", error);
      }
    };
    initSentry();
  }, []);
  
  return null;
}
