import createMiddleware from 'next-intl/middleware'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const intl = createMiddleware({ 
  locales: ['tr', 'en'], 
  defaultLocale: 'tr', 
  localePrefix: 'as-needed' 
})

// DEV ONLY rate limiting (in-memory, not production-ready)
// Production note: Use Upstash Ratelimit + Redis for production
const rateMap = new Map<string, { c: number; t: number }>()
const LIMIT = 100
const WINDOW = 15 * 60 * 1000 // 15 minutes

export default function middleware(req: NextRequest) {
  // DEV ONLY rate limiting
  if (process.env.NODE_ENV !== 'production') {
    const ip = req.ip ?? '127.0.0.1'
    const now = Date.now()
    const entry = rateMap.get(ip) ?? { c: 0, t: now }
    
    // Clean old entries
    if (now - entry.t > WINDOW) { 
      entry.c = 0
      entry.t = now 
    }
    
    entry.c += 1
    rateMap.set(ip, entry)
    
    if (entry.c > LIMIT) {
      return new NextResponse('Too Many Requests', { status: 429 })
    }
  }
  
  return intl(req)
}

export const config = {
  matcher: ['/(tr|en)/:path*']
}
