# BondShield Web

> Enterprise-grade real estate inspection and bond management platform built with Next.js 14

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/bondshield/web/actions)
[![Coverage](https://img.shields.io/badge/coverage-85%25-yellow)](https://github.com/bondshield/web)
[![Version](https://img.shields.io/badge/version-1.0.7-blue)](https://github.com/bondshield/web/releases)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-14.2.33-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue)](https://www.typescriptlang.org/)

## TL;DR Quickstart

```bash
# Prerequisites: Node.js 18+, pnpm
git clone https://github.com/bondshield/web.git
cd web
cp .env.example .env.local
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) → **BondShield platform ready!**

## 🎯 Features & Roadmap

### ✅ Current Features
- **AI-Powered Chat**: Real-time property inspection assistance
- **Multi-language Support**: Turkish (tr) and English (en) with next-intl
- **Accessibility**: WCAG 2.2 AA compliant with skip links and ARIA patterns
- **Analytics**: Plausible Analytics with GDPR-compliant consent management
- **SEO Optimized**: XML sitemap, JSON-LD structured data, meta tags
- **Modern UI**: Tailwind CSS + shadcn/ui components with dark mode support
- **Quality Gates**: ESLint, Prettier, TypeScript strict mode, Lighthouse CI

### 🚧 Roadmap (v1.0.7+)
- OAuth 2.1 PKCE authentication
- Headless CMS integration (Sanity)
- Database integration (Prisma + PostgreSQL)
- Advanced security features
- Mobile app integration
- Real-time collaboration features

### ❌ Non-Goals
- Legacy browser support (IE11, Safari < 14)
- Server-side rendering for all pages (hybrid approach)
- Monolithic architecture (microservices ready)

## 🏗️ Architecture at a Glance

BondShield Web is a modern Next.js 14 App Router application designed for enterprise-scale real estate inspection workflows. The platform combines AI-powered assistance with comprehensive property management tools, built on a foundation of accessibility, internationalization, and performance optimization.

The architecture follows a component-driven approach with clear separation of concerns: UI components in `/src/ui`, business logic in `/src/lib`, and API routes in `/app/api`. The application supports multiple locales through next-intl middleware and implements comprehensive analytics and monitoring through Sentry and Plausible.

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Middleware     │    │   Backend       │
│   Next.js 14    │◄──►│   next-intl      │◄──►│   API Routes    │
│   App Router    │    │   i18n routing   │    │   AI Chat       │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   UI Layer      │    │   Analytics      │    │   Monitoring    │
│   Tailwind CSS  │    │   Plausible      │    │   Sentry        │
│   shadcn/ui     │    │   Consent Mgmt   │    │   Lighthouse    │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

[View detailed architecture documentation →](/docs/architecture.md)

## 📦 Installation & Configuration

### Prerequisites

| Tool | Version | Purpose |
|------|---------|---------|
| Node.js | 18.0+ | Runtime environment |
| pnpm | 8.0+ | Package manager |
| Git | 2.30+ | Version control |

### Environment Variables

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Yes | `http://localhost:3000` | Site base URL |
| `NEXT_PUBLIC_SITE_NAME` | No | `BondShield` | Site name |
| `OPENAI_API_KEY` | No | - | AI chat functionality |
| `SENTRY_DSN` | No | - | Error monitoring |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | No | - | Analytics domain |
| `NEXTAUTH_SECRET` | No | - | Authentication secret |
| `DATABASE_URL` | No | - | Database connection |

### Local Development

```bash
# Clone and install
git clone https://github.com/bondshield/web.git
cd web
pnpm install

# Configure environment
cp .env.example .env.local
# Edit .env.local with your values

# Start development server
pnpm dev
```

### Production Deployment

```bash
# Build for production
pnpm build

# Start production server
pnpm start

# Or use Docker
docker build -t bondshield-web .
docker run -p 3000:3000 bondshield-web
```

## 🚀 Usage

### Tutorials

#### Hello World - First Page Visit
1. Start the development server: `pnpm dev`
2. Open [http://localhost:3000](http://localhost:3000)
3. See the BondShield welcome page with AI chat button
4. Click the AI chat button to test the chat interface

#### Real Use Case - Property Inspection Workflow
1. Navigate to the main platform section
2. Use the AI chat to ask property inspection questions
3. Explore different language options (Turkish/English)
4. Test accessibility features with keyboard navigation

### How-to Guides

#### Authentication Setup
```bash
# Configure NextAuth
export NEXTAUTH_URL="http://localhost:3000"
export NEXTAUTH_SECRET="your-secret-key"

# Add OAuth providers in next.config.js
```

#### Database Integration
```bash
# Setup Prisma
pnpm db:generate
pnpm db:push
pnpm db:seed
```

#### Analytics Configuration
```bash
# Enable Plausible Analytics
export NEXT_PUBLIC_PLAUSIBLE_DOMAIN="your-domain.com"

# Configure consent management
# Edit src/components/analytics/ConsentManager.tsx
```

### Reference

#### Available Scripts

| Script | Purpose | Usage |
|--------|---------|-------|
| `dev` | Start development server | `pnpm dev` |
| `build` | Build for production | `pnpm build` |
| `start` | Start production server | `pnpm start` |
| `lint` | Run ESLint | `pnpm lint` |
| `lint:fix` | Fix ESLint issues | `pnpm lint:fix` |
| `type-check` | TypeScript type checking | `pnpm type-check` |
| `test` | Run unit tests | `pnpm test` |
| `test:e2e` | Run e2e tests | `pnpm test:e2e` |
| `format` | Format code with Prettier | `pnpm format` |
| `a11y:audit` | Accessibility audit | `pnpm a11y:audit` |
| `lighthouse` | Lighthouse performance audit | `pnpm lighthouse` |
| `quality:check` | Run all quality checks | `pnpm quality:check` |

#### API Endpoints

| Endpoint | Method | Description | Example |
|----------|--------|-------------|---------|
| `/api/ai/chat` | POST | AI chat messages | `curl -X POST /api/ai/chat -d '{"message":"Hello"}'` |
| `/api/health` | GET | Health check | `curl /api/health` |

## 🧪 Quality Gates

### Testing
```bash
# Unit tests with Vitest
pnpm test

# E2E tests with Playwright
pnpm test:e2e

# Accessibility audit
pnpm a11y:audit

# All quality checks
pnpm quality:check
```

### Performance Budget
- **Lighthouse Performance**: ≥ 90
- **Lighthouse Accessibility**: 100
- **Lighthouse Best Practices**: ≥ 90
- **Lighthouse SEO**: 100
- **Bundle Size**: < 250KB (gzipped)

### Coverage Thresholds
- **Unit Tests**: ≥ 80%
- **E2E Tests**: Critical user flows
- **TypeScript**: Strict mode enabled
- **Accessibility**: WCAG 2.2 AA compliance

## 🔒 Security

### Reporting Security Issues
Report security vulnerabilities to: [security@bondshield.app](mailto:security@bondshield.app)

### Secrets Management
- Use `.env.local` for local development
- Use environment variables in production
- Never commit secrets to version control
- Rotate API keys regularly

### Dependency Audit
```bash
# Check for vulnerable dependencies
pnpm audit

# Fix vulnerabilities
pnpm audit --fix
```

## 🌐 Internationalization & Accessibility

### i18n Policy
- **Supported Locales**: Turkish (tr), English (en)
- **Default Locale**: Turkish
- **Implementation**: next-intl with server-side rendering
- **Testing**: All UI text must be translatable

### Accessibility Checklist
- [ ] Keyboard navigation works for all interactive elements
- [ ] Screen reader compatibility (tested with NVDA/JAWS)
- [ ] Color contrast ratio ≥ 4.5:1
- [ ] Focus indicators visible
- [ ] Skip links present
- [ ] ARIA labels and roles properly implemented
- [ ] Form labels associated with inputs

## 📊 Observability

### Logging
```bash
# Enable debug logging
export DEBUG="bondshield:*"
pnpm dev
```

### Monitoring
- **Error Tracking**: Sentry integration
- **Performance**: Lighthouse CI
- **Analytics**: Plausible Analytics
- **Uptime**: Health check endpoint at `/api/health`

### Debug Mode
```bash
# Enable debug mode
export NODE_ENV=development
export DEBUG="bondshield:*"
pnpm dev
```

## 🤝 Contributing

We welcome contributions! Please read our [Contributing Guidelines](CONTRIBUTING.md) first.

### Branch Model
- `main`: Production-ready code
- `develop`: Integration branch
- `feature/*`: New features
- `hotfix/*`: Critical fixes

### Conventional Commits
We use [Conventional Commits](https://conventionalcommits.org/) for clear commit history.

**Examples:**
```bash
feat: add AI chat component
fix: resolve middleware routing issue
docs: update README with new features
test: add unit tests for Button component
```

**Commit Cheat Sheet:**
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

## 📝 Changelog

See [CHANGELOG.md](CHANGELOG.md) for detailed release notes.

### Release Policy
- **Major** (1.0.0): Breaking changes
- **Minor** (1.1.0): New features, backward compatible
- **Patch** (1.0.1): Bug fixes, backward compatible

### Semantic Versioning
We follow [SemVer 2.0.0](https://semver.org/) for version numbering.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements & Credits

### Core Technologies
- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI components

### Tools & Libraries
- [next-intl](https://next-intl-docs.vercel.app/) - Internationalization
- [Plausible Analytics](https://plausible.io/) - Privacy-focused analytics
- [Sentry](https://sentry.io/) - Error monitoring
- [Vitest](https://vitest.dev/) - Testing framework
- [Playwright](https://playwright.dev/) - E2E testing

---

## ✅ Verification Checklist

Before publishing this README, ensure:

- [ ] All links are working and point to correct files
- [ ] Code examples are tested and functional
- [ ] Environment variables are documented
- [ ] Scripts table matches package.json
- [ ] API endpoints are current
- [ ] Version numbers are up to date
- [ ] Contact information is correct
- [ ] License information is accurate

---

**Need help?** [Open an issue](https://github.com/bondshield/web/issues) or [start a discussion](https://github.com/bondshield/web/discussions).

---

## 📋 Additional Files

### .markdownlint.json
```json
{
  "MD013": { "line_length": 120 },
  "MD033": false,
  "MD041": false,
  "MD024": { "siblings_only": true }
}
```

### .github/ISSUE_TEMPLATE.md
```markdown
## Bug Report / Feature Request

**Description**
Brief description of the issue or feature request.

**Steps to Reproduce** (for bugs)
1. Step one
2. Step two
3. Step three

**Expected Behavior**
What you expected to happen.

**Environment**
- OS: [e.g., macOS 13.0]
- Node.js: [e.g., 18.17.0]
- Browser: [e.g., Chrome 119]

**Additional Context**
Any other relevant information.
```

### .github/PULL_REQUEST_TEMPLATE.md
```markdown
## Description
Brief description of changes.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests pass
- [ ] E2E tests pass
- [ ] Manual testing completed

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No breaking changes (or documented)
```

---

*Last updated: October 2024 | Version: 1.0.6*