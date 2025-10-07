import { createNavigation } from 'next-intl/navigation'
import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['tr', 'en'],
  
  // Used when no locale matches
  defaultLocale: 'tr',
  
  // The `pathnames` object holds pairs of internal and
  // external paths. Based on the locale, the external
  // paths are rewritten to the shared, internal ones.
  pathnames: {
    // If all locales use the same pathname, a
    // single external pathname can be provided.
    '/': '/',
    '/ai': '/ai',
    '/features': '/features',
    '/pricing': '/pricing',
    '/about': '/about',
    '/contact': '/contact',
    
    // If locales use different pathnames, you can
    // specify each external pathname per locale.
    '/blog': {
      tr: '/blog',
      en: '/blog'
    }
  }
})

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing)
