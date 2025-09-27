# Biz Dev Phil Deployment

This repository contains the Biz Dev Phil marketing site built with React and Vite. The Vite application lives in the `project/` directory, and the repository root exposes npm scripts that proxy to that workspace. This setup allows deployment platforms such as Vercel to install dependencies and run the build from the repository root.

## Getting Started

```bash
npm install
npm run dev
```

The commands above install dependencies and start the Vite development server for the project workspace.

## Available Scripts

All scripts are forwarded to the workspace under `project/`:

- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run lint`
- `npm run format`

Run the commands from the repository root.
