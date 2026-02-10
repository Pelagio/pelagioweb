import * as React from "react";
import Helmet from "react-helmet";

export default () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #e85d56 0%, #1a2332 100%)",
        color: "white",
        fontFamily: "Inter, Montserrat, sans-serif"
      }}
    >
      <Helmet>
        <title>Page Not Found | Pelagio</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <h1
        style={{
          fontSize: "120px",
          fontWeight: 700,
          margin: 0,
          opacity: 0.2,
          lineHeight: 1
        }}
      >
        404
      </h1>
      <h2
        style={{
          fontSize: "28px",
          fontWeight: 600,
          margin: "16px 0 8px",
          letterSpacing: "-0.02em"
        }}
      >
        Page not found
      </h2>
      <p style={{ opacity: 0.7, fontSize: "16px", margin: "0 0 32px" }}>
        The page you're looking for doesn't exist.
      </p>
      <a
        href="/"
        style={{
          color: "white",
          textDecoration: "none",
          padding: "14px 32px",
          border: "2px solid rgba(255,255,255,0.3)",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: 600,
          transition: "all 0.2s ease"
        }}
      >
        Back to Home
      </a>
    </div>
  );
};
