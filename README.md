# Setting up Next.js SPA with Biome.js, Vitest, Tailwind, Husky, and lint-staged

## Prerequisites

- Node.js (v20 or later)
- pnpm (package manager)

## Installation

1. Create a new Next.js app:


pnpm create next-app@latest my-app


2. Install required dependencies:


cd my-app
pnpm install


3. Configure Tailwind CSS:


pnpm exec tailwindcss init -p


4. Update `tailwind.config.js` with the required plugins:


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-debug-screens'),
  ],
}


5. Update `styles/globals.css` with Tailwind directives:


@tailwind base;
@tailwind components;
@tailwind utilities;


6. Configure Vitest:


pnpm exec vitest init


7. Update `vitest.config.js` with the required setup:


import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test/setup.js',
  },
})


8. Create `test/setup.js` and add the following code:


import '@testing-library/jest-dom/extend-expect'


9. Configure Husky and lint-staged:


pnpm exec husky install
pnpm pkg set scripts.prepare="husky install"
pnpm exec husky add .husky/pre-commit "pnpm run lint:staged"


## Usage

- `pnpm run dev`: Start the development server
- `pnpm run build`: Build the production version
- `pnpm run start`: Start the production server
- `pnpm run lint`: Run the linter
- `pnpm run format`: Format the code
- `pnpm run test`: Run tests
- `pnpm run test:staged`: Run tests on staged files
- `pnpm run lint:staged`: Run linter on staged files

Now you have a Next.js SPA set up with Biome.js, Vitest, Tailwind CSS, Husky, and lint-staged for linting, testing, and formatting your code on commit.
