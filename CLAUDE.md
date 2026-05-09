# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio website for Varun Gangadharan, hosted on GitHub Pages at varungangadharan.com. Single-page React app with an editorial/archive visual style.

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview production build locally
- Requires Node 20 (see `.nvmrc`)

## Architecture

- **Stack**: React 18, TypeScript, Vite, CSS Modules
- **Single-page layout** with anchor navigation across five sections: Index, Archive, Research, Resume, Contact
- **Data layer**: `src/data/` contains `projects.ts`, `research.ts`, `profile.ts` — all content is centralized here for easy updates
- **Components**: `src/components/` — each section is a standalone component with co-located `.module.css`
- **Styles**: `src/styles/global.css` imports `variables.css` which defines the light/dark color system via CSS custom properties
- **Theme toggle**: persists in localStorage, respects `prefers-color-scheme` on first visit
- **Static assets**: `public/` holds PDFs, images, and `CNAME` — these are copied as-is to `dist/`

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys `dist/` to GitHub Pages on push to `main`.

## Key Conventions

- Light/dark themes controlled via `[data-theme]` attribute on `<html>` — colors defined as CSS custom properties in `variables.css`
- Typography: Cormorant Garamond (display) + Inter (sans) loaded from Google Fonts in `index.html`
- Section labels use `XX / Name` format (e.g., "02 / Archive")
- Project/research data uses expandable row pattern — tap/click to reveal details inline
- Scroll reveal animations via `src/hooks/useScrollReveal.ts` using IntersectionObserver, with `prefers-reduced-motion` fallback
