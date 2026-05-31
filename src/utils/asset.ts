// Resolves a public/ asset path against the configured Vite base URL so that
// absolute references keep working when the site is served from a sub-path
// (e.g. https://user.github.io/repo/) instead of the domain root.
export const asset = (path: string): string =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
