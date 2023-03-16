# News main page

What was done:
- Initial folder structure is set:
  - *assets* - place for all kinds of media files;
  - *components* - shared components, which can be reused;
  - *hooks* - shared hooks to reuse functionality;
  - *services* - all kinds of API call services;
  - *utils* - helpers, formatters, validators, constants etc.
  - *types* - shared types
  - *views* - global features/views/pages (may contain local components)

- Added linter & prettier to avoid most common code-style issues;
- Added `pre-commit` hook to run linter;
- Added root imports to avoid `'../../../'` paths

## Available Scripts

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn test:coverage`

Shows current test coverage.

### `yarn build`

Builds the app for production to the `build` folder.

### `yarn format`

Fixes all code-style issues that can be quick-fixed.

### `yarn lint`

Checks code-style with `eslint`.

## Testing strategy

At the moment most of the "happy" cases are covered with unit tests.

What should be covered additionally:
- "Unhappy" cases when errors are thrown
- User flows (as there are no features except to show content, the only thing we can cover is that everything is shown correctly for different screen sizes)