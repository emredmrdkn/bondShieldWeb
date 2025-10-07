import { defineConfig } from '@playwright/test'

export default defineConfig({
  webServer: { 
    command: 'npm run build && npm start', 
    port: 3000, 
    reuseExistingServer: !process.env.CI 
  },
  reporter: [['list']],
  use: { baseURL: 'http://localhost:3000' }
})
