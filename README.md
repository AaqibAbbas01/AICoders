This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Testing

This project includes comprehensive testing using Playwright for end-to-end tests. The tests are organized into three categories:

1. **E2E Tests**: Basic functionality tests for each page
2. **Visual Tests**: Tests that capture screenshots of each page for visual regression testing
3. **Interactive Tests**: Tests that simulate user interactions with forms and navigation

### Running Tests

To run the tests, you can use the following commands:

```bash
# Run setup first to create screenshots directory
npm run test:setup

# Run all tests
npm run test

# Run tests with UI
npm run test:ui

# Run tests in headed mode (with browser visible)
npm run test:headed

# Run tests in specific browsers
npm run test:chrome
npm run test:firefox
npm run test:webkit
```

### MCP Browser Testing

For advanced testing scenarios, we also include an MCP browser testing script that can be run in a Claude conversation. This script demonstrates how to:

1. Test the mobile UI of the website
2. Capture snapshots of key interactions
3. Verify form submissions

To run the MCP browser tests:
1. Start a Claude conversation with MCP browser enabled
2. Follow the steps in `tests/mcp-browser-test.js`

### CI/CD Integration

The tests are configured to run automatically in GitHub Actions on every pull request and push to the main branch. The workflow configuration is in `.github/workflows/playwright.yml`.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
