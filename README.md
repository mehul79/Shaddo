# Shaddo

**Productivity on steroids** — a compact, developer-focused README for the Shaddo monorepo.

## What is Shaddo?

A focused productivity app combining ToDo, Calendar/DayMap, Habit tracker, Pomodoro, and a GitHub-like activity heatmap. Built as a Turborepo monorepo for quick development and deployment.

## Features

* Multi-view ToDos (list, board, day-map)
* Calendar + drag-to-schedule
* Habit tracker with reminders
* Pomodoro integrated with tasks
* Productivity heatmap (contribution-style)

## Tech stack

* Frontend: Next.js (app router), TypeScript, Tailwind, shadcn UI
* Backend: Node.js (Express), Prisma + PostgreSQL
* Redis for sessions/jobs; Worker for reminders
* Monorepo: Turborepo + npm; Docker for local infra

## Repository layout (suggested)

```
/apps/web   # Next.js
/apps/api   # API service
/apps/worker# background jobs
/packages/ui # shared components
/packages/db # prisma client
```

## Quickstart (local)

**Prereqs:** Node 18+, pnpm, Docker

1. Install deps: `pnpm install`
2. Start Postgres + Redis: `docker compose -f docker/docker-compose.yml up -d`
3. Migrate & generate: `pnpm -w prisma migrate dev --name init && pnpm -w prisma generate`
4. Dev: `pnpm dev` (or run individual apps with `pnpm --filter <pkg> dev`)

Open: `http://localhost:3000`

## Environment variables (minimum)

```
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/shaddo
REDIS_URL=redis://localhost:6379
NEXT_PUBLIC_APP_NAME=Shaddo
JWT_SECRET=replace_me
```

## Useful scripts

* `npm run dev` — run all dev tasks via turbo
* `npx prisma migrate dev` — run DB migrations
* `npx prisma generate` — generate client

