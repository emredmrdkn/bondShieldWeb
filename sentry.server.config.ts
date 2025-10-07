import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,
  
  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: process.env.NODE_ENV === 'development',
  
  // Performance Monitoring
  beforeSend(event) {
    // Filter out non-critical server errors
    if (process.env.NODE_ENV === 'production') {
      // Don't send 404s to Sentry
      if (event.exception?.values?.[0]?.type === 'NotFoundError') {
        return null
      }
      
      // Don't send validation errors for user input
      if (event.exception?.values?.[0]?.type === 'ValidationError') {
        return null
      }
    }
    
    return event
  },
  
  // Set sample rate for performance monitoring
  beforeSendTransaction(event) {
    // Don't send transactions for health checks
    if (event.transaction?.includes('/api/health')) {
      return null
    }
    
    return event
  },
})
