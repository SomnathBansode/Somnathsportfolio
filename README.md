# React + Vite

This repository is a personal portfolio built with React, Vite, and Tailwind CSS.

It includes basic accessibility improvements and a small test suite powered by Vitest.

## Development

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Linting

Run ESLint:

```bash
npm run lint
```

Consider adding `husky` + `lint-staged` to run linting before commits.

## Testing

This project uses Vitest and Testing Library for basic component tests.

Run tests:

```bash
npm test
```

Generate coverage:

```bash
npm run test:coverage
```

Test helpers are configured in `tests/setupTests.js` and the Vitest config is `vitest.config.ts`.

## CI

A GitHub Actions workflow was added at `.github/workflows/ci.yml`. The workflow runs on push and pull requests to `master` and executes:

- npm ci
- npm run lint
- npm test

## Performance & Accessibility Notes

- Images in `public/images` should be optimized (resize, compress, convert to WebP). Consider using a tool like `squoosh` or automated build-time optimization.
- Project images are now lazy-loaded and have aspect ratio reserved to reduce layout shift.
- A skip link has been added to `index.html` for keyboard users. Consider aria-current for active navigation links.

## Next improvements (suggested)

- Add more tests for critical UI components and interactions.
- Add integration with Lighthouse or other performance checks in CI.
- Migrate to TypeScript for stronger typing and better tooling.

If you'd like, I can implement any of the suggested improvements (image optimization pipeline, tests, or TypeScript migration).
