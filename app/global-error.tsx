"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", background: "#FAF8F4", color: "#1C1008" }}>
        <div style={{ maxWidth: 560, margin: "0 auto", padding: "5rem 1rem", textAlign: "center" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1rem" }}>
            Something went wrong
          </h1>
          <p style={{ color: "#6B7280", marginBottom: "2rem" }}>
            An unexpected error occurred. Please try again.
          </p>
          <button
            onClick={reset}
            style={{
              background: "#B45309",
              color: "#fff",
              fontWeight: 700,
              padding: "0.75rem 1.5rem",
              borderRadius: "0.5rem",
              border: "none",
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
