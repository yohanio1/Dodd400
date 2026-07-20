import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./setupTests.js",
    coverage: {
      enabled: true,
      provider: 'v8',
      include: ['src/**/*.{js,jsx}'],
      reporter: ["text", "cobertura", "lcov"],
      reportsDirectory: "./coverage"  
    }
  }
});
