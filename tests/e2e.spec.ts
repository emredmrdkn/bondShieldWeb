import { test, expect } from '@playwright/test'

test.describe('E2E Flow', () => {
  test('complete tenant workflow', async ({ page }) => {
    // Sign in as tenant
    await page.goto('/auth/signin')
    await page.fill('input[name="email"]', 'demo@tenant.com')
    await page.fill('input[name="password"]', 'demo123!')
    await page.click('button[type="submit"]')
    await expect(page).toHaveURL('/tenant/dashboard')
    
    // Upload photo
    const fileInput = page.locator('input[type="file"]')
    await fileInput.setInputFiles({
      name: 'test.jpg',
      mimeType: 'image/jpeg',
      buffer: Buffer.from('fake image data')
    })
    
    await expect(page.locator('text=Uploaded Files')).toBeVisible()
    
    // Generate PDF report
    await page.click('button:has-text("Generate PDF Report")')
    await expect(page.locator('text=Report Generated Successfully')).toBeVisible()
    
    // Download PDF
    const downloadPromise = page.waitForEvent('download')
    await page.click('a:has-text("Download PDF Report")')
    const download = await downloadPromise
    
    expect(download.suggestedFilename()).toMatch(/report-.*\.pdf/)
  })
  
  test('landlord workflow', async ({ page }) => {
    await page.goto('/auth/signin')
    await page.fill('input[name="email"]', 'demo@landlord.com')
    await page.fill('input[name="password"]', 'demo123!')
    await page.click('button[type="submit"]')
    await expect(page).toHaveURL('/landlord/dashboard')
    
    await expect(page.locator('h1:has-text("Landlord Dashboard")')).toBeVisible()
  })
  
  test('unauthorized access blocked', async ({ page }) => {
    await page.goto('/tenant/dashboard')
    await expect(page).toHaveURL('/auth/signin')
  })

  test('rate limiting works', async ({ request }) => {
    // Test rate limiting by making multiple requests
    const promises = Array.from({ length: 15 }, () => 
      request.post('/api/upload/presigned', {
        data: {
          filename: 'test.jpg',
          contentType: 'image/jpeg',
          size: 1024
        }
      })
    )
    
    const responses = await Promise.all(promises)
    const rateLimited = responses.filter(r => r.status() === 429)
    
    expect(rateLimited.length).toBeGreaterThan(0)
  })

  test('file upload validation', async ({ request }) => {
    // Test invalid file type
    const invalidRes = await request.post('/api/upload/presigned', {
      data: {
        filename: 'test.txt',
        contentType: 'text/plain',
        size: 1024
      }
    })
    
    expect(invalidRes.status()).toBe(400)
    
    // Test file too large
    const largeRes = await request.post('/api/upload/presigned', {
      data: {
        filename: 'large.jpg',
        contentType: 'image/jpeg',
        size: 10 * 1024 * 1024 // 10MB
      }
    })
    
    expect(largeRes.status()).toBe(400)
  })

  test('PDF generation with images', async ({ request }) => {
    const res = await request.post('/api/reports/generate', {
      data: {
        inspectionId: 'test-123',
        photos: ['/uploads/test.jpg'],
        notes: 'Test inspection with images',
        timestamp: new Date().toISOString()
      }
    })

    expect(res.status()).toBe(200)
    const body = await res.json()
    expect(body.ok).toBe(true)
    expect(body.data.pdfUrl).toContain('/reports/')
  })
})
