## Summary
- What / Why

## Evidence (deps-cleanup only)
- grep outputs (short): no usage for removed deps

## Checks
- [ ] tsc --noEmit clean
- [ ] ESLint/Biome clean
- [ ] LHCI ≥ 85 (Home & Dashboard)
- [ ] Smoke tests pass (@smoke)
- [ ] CSP verified (no console errors)
- [ ] Bundle transfer size delta reported (KB / %)