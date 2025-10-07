import { test, expect } from '@playwright/test';

test.describe('@smoke', () => {
  test('home renders', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/BondShield/i);
  });
  
  test('/api/trust-score validates', async ({ request }) => {
    const res = await request.post('/api/trust-score', { data: {
      propertyAge: 5, 
      previousTenants: 1, 
      maintenanceHistory: [], 
      locationScore: 7, 
      propertyCondition: 'GOOD'
    }});
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.ok).toBe(true);
    expect(body.data.score).toBeGreaterThan(0);
  });
  
  test('/api/payments/simulate validates', async ({ request }) => {
    const res = await request.post('/api/payments/simulate', { data: {
      bondAmount: 2000, 
      weeklyAmount: 80, 
      duration: 12
    }});
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.ok).toBe(true);
    expect(body.data.weeklyPayments.length).toBe(12);
  });

  test('auth flow - tenant login', async ({ page }) => {
    await page.goto('/auth/signin');
    
    // Fill login form
    await page.fill('input[name="email"]', 'demo@tenant.com');
    await page.fill('input[name="password"]', 'demo123!');
    
    // Submit form
    await page.click('button[type="submit"]');
    
    // Should redirect to tenant dashboard
    await expect(page).toHaveURL('/tenant/dashboard');
    await expect(page.locator('h1')).toContainText('Tenant Dashboard');
  });

  test('auth flow - landlord login', async ({ page }) => {
    await page.goto('/auth/signin');
    
    // Fill login form
    await page.fill('input[name="email"]', 'demo@landlord.com');
    await page.fill('input[name="password"]', 'demo123!');
    
    // Submit form
    await page.click('button[type="submit"]');
    
    // Should redirect to landlord dashboard
    await expect(page).toHaveURL('/landlord/dashboard');
    await expect(page.locator('h1')).toContainText('Landlord Dashboard');
  });

  test('role-based access control', async ({ page }) => {
    // Login as tenant
    await page.goto('/auth/signin');
    await page.fill('input[name="email"]', 'demo@tenant.com');
    await page.fill('input[name="password"]', 'demo123!');
    await page.click('button[type="submit"]');
    
    // Try to access landlord dashboard - should redirect
    await page.goto('/landlord/dashboard');
    await expect(page).toHaveURL('/tenant/dashboard');
  });

  test('file upload validation', async ({ request }) => {
    // Test file upload with valid image
    const formData = new FormData();
    const blob = new Blob(['fake image data'], { type: 'image/jpeg' });
    formData.append('file', blob, 'test.jpg');
    
    const res = await request.post('/api/upload', { 
      multipart: formData 
    });
    
    // Should return 200 with file URL
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.ok).toBe(true);
    expect(body.data.url).toContain('/uploads/');
  });

  test('PDF report generation', async ({ request }) => {
    const res = await request.post('/api/reports/generate', { 
      data: {
        inspectionId: 'test-123',
        photos: ['/uploads/test.jpg'],
        notes: 'Test inspection',
        timestamp: new Date().toISOString()
      }
    });
    
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.ok).toBe(true);
    expect(body.data.pdfUrl).toContain('/reports/');
  });
});
