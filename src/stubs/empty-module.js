// SSR stub for modules that reference window/document (lenis, gsap).
// Provides a default export so ESM imports don't crash during Gatsby's
// HTML generation. The real modules load in the client bundle.
export default {};
export const ScrollTrigger = { update: () => {} };
