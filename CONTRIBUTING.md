# Contributing to BondShield Web

Thank you for your interest in contributing to BondShield Web! This document provides guidelines and information for contributors.

## Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you agree to uphold this code.

## Getting Started

### Prerequisites
- Node.js 18.0 or higher
- pnpm 8.0 or higher
- Git 2.30 or higher

### Development Setup

1. **Fork and Clone**
   ```bash
   git clone https://github.com/your-username/web.git
   cd web
   ```

2. **Install Dependencies**
   ```bash
   pnpm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Start Development Server**
   ```bash
   pnpm dev
   ```

## Development Workflow

### Branch Naming
- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `refactor/description` - Code refactoring
- `test/description` - Test improvements

### Commit Convention
We use [Conventional Commits](https://conventionalcommits.org/):

```
type(scope): description

[optional body]

[optional footer(s)]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```bash
feat(ai): add real-time chat functionality
fix(auth): resolve login redirect issue
docs(readme): update installation instructions
test(components): add unit tests for Button
```

### Pull Request Process

1. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes**
   - Write your code
   - Add tests if applicable
   - Update documentation if needed

3. **Test Your Changes**
   ```bash
   pnpm lint
   pnpm type-check
   pnpm test
   pnpm test:e2e
   pnpm a11y:audit
   ```

4. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "feat(component): add new feature"
   ```

5. **Push and Create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

## Code Standards

### TypeScript
- Use strict mode
- Prefer interfaces over types
- Use explicit return types for functions
- Avoid `any` type

### React
- Use functional components with hooks
- Prefer composition over inheritance
- Use proper prop types
- Follow React best practices

### Styling
- Use Tailwind CSS classes
- Follow the design system
- Use CSS variables for theming
- Ensure responsive design

### Testing
- Write unit tests for utilities
- Write component tests for UI
- Write e2e tests for critical flows
- Maintain test coverage above 80%

## Quality Gates

Before submitting a PR, ensure:

- [ ] All tests pass
- [ ] Code is properly typed
- [ ] No linting errors
- [ ] Accessibility standards met
- [ ] Performance impact considered
- [ ] Documentation updated

## Review Process

1. **Automated Checks**
   - CI/CD pipeline runs automatically
   - All checks must pass

2. **Code Review**
   - At least one maintainer review required
   - Address all feedback before merging

3. **Testing**
   - Manual testing may be required
   - Performance testing for significant changes

## Reporting Issues

### Bug Reports
Use the [issue template](.github/ISSUE_TEMPLATE.md) and include:
- Clear description
- Steps to reproduce
- Expected vs actual behavior
- Environment details
- Screenshots if applicable

### Feature Requests
- Describe the use case
- Explain the expected behavior
- Consider implementation complexity
- Check existing issues first

## Documentation

### Code Documentation
- Use JSDoc for functions
- Comment complex logic
- Keep README updated
- Update API documentation

### Commit Messages
- Use imperative mood
- Keep first line under 50 characters
- Reference issues when applicable

## Release Process

1. **Version Bumping**
   - Follow semantic versioning
   - Update CHANGELOG.md
   - Update package.json version

2. **Release Notes**
   - Document all changes
   - Highlight breaking changes
   - Include migration guides

## Getting Help

- **Discussions**: Use GitHub Discussions for questions
- **Issues**: Use GitHub Issues for bugs and features
- **Email**: Contact maintainers directly for sensitive issues

## Recognition

Contributors will be recognized in:
- CONTRIBUTORS.md file
- Release notes
- Project documentation

Thank you for contributing to BondShield Web! 🚀
